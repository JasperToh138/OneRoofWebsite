"use client";

import { useEffect } from "react";

export function ScrollEffects() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      document.querySelectorAll<HTMLElement>("[data-scroll-reveal]").forEach((element) => {
        element.classList.add("is-visible");
      });
      return;
    }

    const seenElements = new WeakSet<Element>();
    let revealIndex = 0;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.16,
      },
    );

    function prepareElement(element: HTMLElement) {
      if (seenElements.has(element)) {
        return;
      }

      seenElements.add(element);

      if (!element.style.getPropertyValue("--reveal-delay")) {
        element.style.setProperty("--reveal-delay", `${(revealIndex % 6) * 70}ms`);
      }

      revealIndex += 1;
      observer.observe(element);
    }

    function prepareAll(root: ParentNode = document) {
      root.querySelectorAll<HTMLElement>("[data-scroll-reveal]").forEach(prepareElement);
    }

    prepareAll();

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) {
            return;
          }

          if (node.matches("[data-scroll-reveal]")) {
            prepareElement(node);
          }

          prepareAll(node);
        });
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, []);

  return null;
}
