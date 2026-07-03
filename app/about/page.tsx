import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About Our Roofing Contractor Team in Penang",
  description:
    "Learn about One Roof Solutions, a roofing contractor Penang team providing roof repair, awning, waterproofing, and steel structure services for Penang, Kulim, Sungai Petani, Alor Setar, and Ipoh.",
  openGraph: {
    title: "About One Roof Solutions Roofing Contractor Penang",
    description:
      "Strong Structures, Reliable Solutions for homeowners, shop lots, factories, warehouses, developers, and contractors in Penang and nearby service areas.",
  },
};

const values = [
  "Clear communication from WhatsApp enquiry to quotation",
  "Practical recommendations based on actual roof and site condition",
  "Neat roofing, awning, waterproofing, gutter, and flashing workmanship",
  "Support for homeowners, shop lots, factories, warehouses, developers, and contractors",
];

export default function AboutPage() {
  return (
    <main>
      <section className="bg-mist px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl" data-scroll-reveal="fade">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-ocean">About Us / Tentang Kami</p>
          <h1 className="mt-3 max-w-4xl text-3xl font-bold leading-tight text-ink sm:text-5xl">
            Roofing contractor Penang with strong awning, waterproofing, and steel structure solutions
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            {site.name} helps customers solve roof leaks, plan roof replacement, build modern awning extensions,
            improve drainage, and strengthen roofing support structures across Penang, Kulim, Sungai Petani, Alor Setar,
            and Ipoh. Kami menyediakan penyelesaian bumbung dan awning yang profesional, kemas, dan mudah dihubungi.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-soft" data-scroll-reveal="left">
            <Image
              alt="One Roof Solutions roofing contractor inspecting roof and awning work in Penang"
              className="object-cover"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              src="/images/about-roof-inspection.png"
            />
          </div>
          <div data-scroll-reveal="right">
            <SectionHeading
              eyebrow="Mission and values"
              title="Reliable roof repair and awning work starts with clear site understanding"
              description="Our mission is to provide strong structures, reliable solutions, clear recommendations, and responsive communication for every roofing, awning, and waterproofing enquiry."
            />
            <div className="mt-7 grid gap-4">
              {values.map((value) => (
                <div className="flex gap-3" key={value}>
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-ocean" aria-hidden />
                  <p className="text-sm font-semibold leading-6 text-slate-700">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-mist px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {[
            ["Since", site.founded],
            ["Customers", "Homes, shop lots, factories, warehouses, developers, contractors"],
            ["Primary Goal", site.primaryGoal],
          ].map(([label, value]) => (
            <article className="rounded-lg bg-white p-6 shadow-soft" data-scroll-reveal="up" key={label}>
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-ocean">{label}</p>
              <p className="mt-3 text-2xl font-bold text-ink">{value}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-4xl text-center" data-scroll-reveal="fade">
          <h2 className="text-3xl font-bold text-ink">Team and workmanship</h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            Every enquiry is handled with professionalism, from WhatsApp photos and first questions through site review,
            quotation, material discussion, and workmanship planning. Final pricing and recommendations may depend on
            site inspection, project scope, materials, access condition, and actual site conditions.
          </p>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
