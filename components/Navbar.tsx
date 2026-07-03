"use client";

import { Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, site } from "@/data/site";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ocean/10 bg-white/92 shadow-sm backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
        <Link className="focus-ring flex min-w-0 items-center gap-2 rounded-md sm:gap-3" href="/" onClick={() => setOpen(false)}>
          <span className="relative flex h-9 w-12 shrink-0 items-center justify-center sm:h-11 sm:w-14">
            <Image alt="One Roof Solutions logo" className="object-contain mix-blend-multiply" fill sizes="56px" src={site.logoImage} />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-bold text-ink sm:text-base">{site.name}</span>
            <span className="block max-w-[11rem] truncate text-[11px] text-slate-600 sm:max-w-none sm:text-xs">{site.tagline}</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                className={`focus-ring rounded-md px-4 py-2 text-sm font-semibold transition ${
                  active ? "bg-ocean/10 text-ocean" : "text-slate-700 hover:bg-mist hover:text-ocean"
                }`}
                href={link.href}
                key={link.href}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <a
          className="shine-button focus-ring hidden min-h-11 items-center gap-2 rounded-md bg-ocean px-4 py-2 text-sm font-bold text-white shadow-soft transition duration-300 hover:bg-ink hover:shadow-glow lg:inline-flex"
          href={site.phoneHref}
        >
          <Phone size={18} aria-hidden />
          Call Now
        </a>

        <button
          aria-expanded={open}
          aria-label="Toggle navigation"
          className="focus-ring inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-ocean/20 text-ink shadow-steel lg:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-slate-200 bg-white px-4 pb-4 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                className="focus-ring rounded-md px-3 py-3 text-sm font-semibold text-slate-800 transition hover:bg-mist hover:text-ocean"
                href={link.href}
                key={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              className="shine-button focus-ring mt-2 inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-ocean px-4 py-3 text-sm font-bold text-white shadow-soft"
              href={site.phoneHref}
            >
              <Phone size={18} aria-hidden />
              Call Now
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
