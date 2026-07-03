import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  const styles = {
    primary:
      "bg-ocean text-white shadow-soft hover:bg-ink hover:shadow-glow focus-ring",
    secondary:
      "border border-ocean/20 bg-white text-ink hover:border-ocean hover:bg-mist hover:text-ocean hover:shadow-steel focus-ring",
    light:
      "border border-white/40 bg-white text-ink hover:bg-mist hover:shadow-glow focus-ring",
  };

  const external = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");

  if (external) {
    return (
      <a
        className={`shine-button inline-flex min-h-11 items-center justify-center rounded-md px-5 py-3 text-center text-sm font-semibold leading-5 transition duration-300 ${styles[variant]} ${className}`}
        href={href}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      className={`shine-button inline-flex min-h-11 items-center justify-center rounded-md px-5 py-3 text-center text-sm font-semibold leading-5 transition duration-300 ${styles[variant]} ${className}`}
      href={href}
    >
      {children}
    </Link>
  );
}
