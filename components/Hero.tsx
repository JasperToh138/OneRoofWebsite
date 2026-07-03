import { ArrowRight, MessageCircle } from "lucide-react";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { site, trustBadges } from "@/data/site";

export function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden bg-ink"
      aria-label="Professional business services hero"
    >
      <Image
        alt="Modern awning extension Penang with metal roof, gutter, flashing, and steel structure detail"
        className="absolute inset-0 -z-20 scale-105 object-cover transition duration-[1600ms] ease-out"
        fill
        priority
        sizes="100vw"
        src={site.heroImage}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/86 to-ocean/26" />
      <div className="absolute inset-0 -z-10 bg-ink/18" />
      <div className="soft-grid absolute inset-0 -z-10 opacity-30" />
      <div className="mx-auto flex min-h-[620px] max-w-7xl items-center px-4 py-16 sm:min-h-[660px] sm:px-6 sm:py-20 lg:min-h-[680px] lg:px-8">
        <div className="max-w-3xl animate-fadeUp text-white">
          <p className="mb-4 inline-flex max-w-full rounded-md bg-white/12 px-3 py-2 text-xs font-semibold leading-5 text-white ring-1 ring-white/20 sm:mb-5 sm:text-sm">
            {site.tagline}
          </p>
          <h1 className="max-w-3xl text-[2rem] font-bold leading-[1.08] sm:text-5xl sm:leading-tight lg:text-6xl">
            Modern Awning Extension, Roofing Contractor Penang & Steel Structure Specialists
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-100 sm:mt-6 sm:text-lg sm:leading-8">
            One Roof Solutions provides roof repair Penang, roof leaking repair Penang, roof replacement Penang,
            modern awning extension Penang, gutter, flashing, waterproofing, and M/S steel structure work for
            homeowners, shop lots, factories, warehouses, developers, and contractors.
            <span className="mt-3 block">
              We also serve Kulim, Sungai Petani, Alor Setar, and Ipoh with practical roofing, awning, and waterproofing support.
            </span>
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
            <ButtonLink href="/contact" variant="light" className="w-full sm:w-auto">
              Request a Free Quotation <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </ButtonLink>
            <ButtonLink href={site.whatsappHref} variant="primary" className="w-full sm:w-auto">
              WhatsApp Us <MessageCircle className="ml-2 h-4 w-4" aria-hidden />
            </ButtonLink>
          </div>
          <div className="mt-7 grid grid-cols-2 gap-3 sm:mt-8 lg:grid-cols-4">
            {trustBadges.map((badge) => (
              <div
                className={`flex rounded-md border border-white/20 bg-white/10 px-3 py-3 text-xs font-semibold leading-5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/16 sm:px-4 sm:text-sm ${
                  badge === "CIDB Registered Contractor"
                    ? "col-span-2 min-h-20 flex-col items-start justify-center gap-2 sm:col-span-1 sm:min-h-24"
                    : "min-h-16 items-center gap-3"
                }`}
                key={badge}
              >
                {badge === "CIDB Registered Contractor" ? (
                  <span className="relative h-10 w-32 max-w-full shrink-0 drop-shadow-[0_2px_8px_rgba(255,255,255,0.22)] sm:h-12 sm:w-44">
                    <Image
                      alt="CIDB Registered Contractor logo"
                      className="object-contain drop-shadow-[0_0_1px_rgba(255,255,255,0.95)] [filter:drop-shadow(0_1px_0_rgba(255,255,255,0.9))_drop-shadow(1px_0_0_rgba(255,255,255,0.9))_drop-shadow(0_-1px_0_rgba(255,255,255,0.9))_drop-shadow(-1px_0_0_rgba(255,255,255,0.9))]"
                      fill
                      sizes="176px"
                      src={site.cidbLogoImage}
                    />
                  </span>
                ) : null}
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
