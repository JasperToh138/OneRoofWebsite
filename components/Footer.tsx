import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { navLinks, serviceAreas, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 sm:py-12 md:grid-cols-2 lg:grid-cols-[1.2fr_0.7fr_1fr_1fr] lg:gap-10 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="relative h-11 w-14 shrink-0 sm:h-12 sm:w-16">
              <Image alt="One Roof Solutions logo" className="object-contain" fill sizes="64px" src={site.logoImage} />
            </span>
            <div className="min-w-0">
              <p className="text-base font-bold sm:text-lg">{site.name}</p>
              <p className="text-sm text-slate-300">{site.tagline}</p>
            </div>
          </div>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-300">{site.description}</p>
          <div className="mt-5 flex max-w-sm items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3">
            <span className="relative h-12 w-32 shrink-0 drop-shadow-[0_2px_8px_rgba(255,255,255,0.16)] sm:h-14 sm:w-44">
              <Image
                alt="CIDB Registered Contractor logo"
                className="object-contain drop-shadow-[0_0_1px_rgba(255,255,255,0.95)] [filter:drop-shadow(0_1px_0_rgba(255,255,255,0.9))_drop-shadow(1px_0_0_rgba(255,255,255,0.9))_drop-shadow(0_-1px_0_rgba(255,255,255,0.9))_drop-shadow(-1px_0_0_rgba(255,255,255,0.9))]"
                fill
                sizes="176px"
                src={site.cidbLogoImage}
              />
            </span>
            <span className="text-sm font-semibold leading-5 text-slate-100">CIDB Registered Contractor</span>
          </div>
        </div>

        <div>
          <p className="font-semibold">Company</p>
          <div className="mt-4 grid gap-2">
            {navLinks.map((link) => (
              <Link className="text-sm text-slate-300 transition hover:text-white" href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="font-semibold">Service Areas</p>
          <p className="mt-4 text-sm leading-6 text-slate-300">
            We serve {serviceAreas.join(", ")} for roofing contractor, roof repair, awning contractor, waterproofing,
            modern awning extension, and roof replacement enquiries.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {serviceAreas.map((area) => (
              <span className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-200" key={area}>
                {area}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="font-semibold">Contact</p>
          <div className="mt-4 grid gap-3 text-sm text-slate-300">
            <a className="flex gap-3 transition hover:text-white" href={site.phoneHref}>
              <Phone className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
              {site.phone}
            </a>
            <a className="flex gap-3 transition hover:text-white" href={site.secondaryPhoneHref}>
              <Phone className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
              {site.secondaryPhone}
            </a>
            <a className="flex gap-3 transition hover:text-white" href={site.emailHref}>
              <Mail className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
              {site.email}
            </a>
            <span className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
              {site.address}
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
