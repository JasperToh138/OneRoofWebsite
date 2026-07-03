import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Roof Repair & Awning Contractor FAQ Penang",
  description:
    "Frequently asked questions about roofing contractor Penang services, roof repair, roof leaking repair, modern awning extension, waterproofing, gutter, flashing, and steel structure work in Penang, Kulim, Sungai Petani, Alor Setar, and Ipoh.",
  openGraph: {
    title: "FAQ | Roofing Contractor Penang",
    description:
      "Answers for roof repair Penang, Modern Awning Extension, quotation, waterproofing, and roofing service enquiries.",
  },
};

export default function FAQPage() {
  return (
    <main>
      <section className="bg-mist px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl" data-scroll-reveal="fade">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-ocean">FAQ / Soalan Lazim</p>
          <h1 className="mt-3 max-w-4xl text-3xl font-bold leading-tight text-ink sm:text-5xl">
            Questions before you request a roof repair or awning quotation in Penang
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Quick answers for roof leak repair, Modern Awning Extension, roof replacement, metal deck,
            waterproofing, gutter, flashing, and M/S steel structure enquiries across Penang, Kulim, Sungai Petani,
            Alor Setar, and Ipoh.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <FAQSection />
        </div>
      </section>

      <CTASection
        title="Need a faster answer?"
        description="WhatsApp your roof photos, awning measurements, location, or project details and our team will respond with the next step."
      />
    </main>
  );
}
