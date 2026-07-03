import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/services";
import { serviceAreaHighlights, serviceAreas } from "@/data/site";

export const metadata: Metadata = {
  title: "Roof Repair Penang, Awning Contractor & Waterproofing Services",
  description:
    "Explore roof repair Penang, roof leaking repair Penang, roof replacement Penang, modern awning extension Penang, awning contractor Penang, and waterproofing specialist Penang services. We also serve Kulim, Sungai Petani, Alor Setar, and Ipoh.",
  openGraph: {
    title: "Roof Repair, Awning Contractor & Waterproofing Services",
    description:
      "Modern Awning Extension, roof leak repair, roof replacement, metal deck, waterproofing, gutter, flashing, and steel structure work in Penang, Kulim, Sungai Petani, Alor Setar, and Ipoh.",
  },
};

export default function ServicesPage() {
  return (
    <main>
      <section className="bg-mist px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl" data-scroll-reveal="fade">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-ocean">Services / Perkhidmatan</p>
          <h1 className="mt-3 max-w-4xl text-3xl font-bold leading-tight text-ink sm:text-5xl">
            Roof repair Penang, awning contractor, waterproofing, and steel structure services
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            From roof leaking repair Penang to Modern Awning Extension Penang, One Roof Solutions supports homeowners,
            shop lots, factories, warehouses, developers, and contractors with practical, reliable workmanship.
            Kami menyediakan kerja bumbung, awning, waterproofing, gutter, flashing, dan struktur besi.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What we do"
            title="Clear service options for roof replacement, awning, and waterproofing enquiries"
            description="Each service includes a direct WhatsApp CTA so customers can quickly send photos, measurements, and project details for Penang, Kulim, Sungai Petani, Alor Setar, and Ipoh enquiries."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
          <p className="mt-10 rounded-lg bg-mist p-5 text-sm leading-6 text-slate-700" data-scroll-reveal="fade">
            Service disclaimer: Final pricing and recommendations may depend on site inspection, project scope,
            materials, access condition, and actual site conditions.
          </p>
        </div>
      </section>

      <section className="bg-mist px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Service Areas"
            title="We serve Penang, Kulim, Sungai Petani, Alor Setar and Ipoh"
            description={`Our roofing contractor, roof repair, awning contractor, and waterproofing services are available across ${serviceAreas.join(", ")}.`}
            align="center"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {serviceAreaHighlights.map((item) => (
              <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft" data-scroll-reveal="up" key={item.area}>
                <h3 className="text-lg font-bold text-ink">{item.area} service keywords</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need help choosing the right service?"
        description="Send a short description of your project and we will recommend the most practical next step."
      />
    </main>
  );
}
