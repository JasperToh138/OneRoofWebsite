import { Award, Clock, ShieldCheck, Users } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { serviceAreaHighlights, serviceAreas, site } from "@/data/site";
import { testimonials } from "@/data/testimonials";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roofing Contractor Penang | Roof Repair, Awning & Waterproofing",
  description:
    "One Roof Solutions is a roofing contractor Penang providing roof repair, roof leaking repair, roof replacement, modern awning extension, awning contractor work, and waterproofing specialist services in Penang, Kulim, Sungai Petani, Alor Setar, and Ipoh.",
  openGraph: {
    title: "Roofing Contractor Penang | One Roof Solutions",
    description:
      "Roof repair Penang, roof replacement Penang, modern awning extension Penang, awning contractor Penang, and waterproofing specialist Penang services.",
  },
};

const reasons = [
  {
    icon: Award,
    title: "Experienced workmanship",
    text: "Roofing, awning, waterproofing, gutter, flashing, and steel structure work handled with practical site planning.",
  },
  {
    icon: Clock,
    title: "Fast response",
    text: "WhatsApp-friendly enquiries help you move from photos and site details to quotation guidance faster.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable structures",
    text: "We focus on strong support, correct drainage, suitable materials, and clear recommendations.",
  },
  {
    icon: Users,
    title: "All customer types",
    text: "Homeowners, shop lots, factories, warehouses, developers, and contractors can enquire directly.",
  },
];

export default function HomePage() {
  return (
    <main>
      <Hero />

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <article data-scroll-reveal="left">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-ocean">Our Story</p>
            <h2 className="mt-3 max-w-4xl text-3xl font-bold leading-tight text-ink sm:text-4xl">
              Our Story: Built on Strong Structures & Reliable Solutions
            </h2>
            <div className="mt-6 grid gap-4 text-base leading-8 text-slate-600">
              <p>
                One Roof Solutions was founded with a clear mission: to provide strong, reliable and long-lasting
                roofing solutions for homes, businesses and industrial properties.
              </p>
              <p>
                Built on years of hands-on roofing and structural experience, we understand the common problems
                property owners face, including leaking roofs, poor drainage, weak structures and roof repairs that do
                not last. That is why we focus on proper inspection, quality materials and workmanship that gives our
                customers peace of mind.
              </p>
              <p>
                As a roofing contractor serving Penang, Kulim, Sungai Petani, Alor Setar and Ipoh, we provide a
                complete range of services including roof repair, roof replacement, modern awning extension,
                waterproofing, gutter and flashing works, metal deck roofing, polycarbonate roofing, roof tiles
                replacement and M/S steel structure.
              </p>
              <p>
                Today, One Roof Solutions continues to serve homeowners, business owners, factories and property
                developers with one promise: strong structures, reliable solutions.
              </p>
            </div>
          </article>

          <aside
            className="steel-card rounded-lg border border-ocean/10 p-6 shadow-soft lg:sticky lg:top-24"
            data-scroll-reveal="right"
            aria-label="One Roof Solutions story highlights"
          >
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-ocean">Built for dependable protection</p>
            <div className="mt-6 grid gap-4">
              {[
                ["Experience", "20+ years of hands-on roofing and structural work"],
                ["Since", site.founded],
                ["Service Areas", serviceAreas.join(", ")],
                ["Core Work", "Roofing, awning, waterproofing, gutter, flashing, and M/S steel structure"],
              ].map(([label, value]) => (
                <div className="rounded-lg border border-slate-200 bg-white p-4" key={label}>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-ocean">{label}</p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-ink">{value}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-mist px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <article className="lift-card steel-card rounded-lg border border-ocean/10 p-7 shadow-soft" data-scroll-reveal="left">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-ocean">Vision</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-ink">Building Trust, Protecting Every Roof</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">{site.vision}</p>
          </article>
          <article className="lift-card steel-card rounded-lg border border-ocean/10 p-7 shadow-soft" data-scroll-reveal="right">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-ocean">Mission</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-ink">Honest advice, quality materials, fast response</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">{site.mission}</p>
          </article>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Services"
            title="Roof repair, awning contractor, waterproofing, and steel structure services"
            description="Modern Awning Extension is our highlighted service, supported by roof leak repair, roof replacement, metal deck, polycarbonate, gutter, flashing, waterproofing, and roof tiles replacement for Penang and nearby service areas."
            align="center"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Service Areas"
            title="Roofing, awning, and waterproofing services in Penang, Kulim, Sungai Petani, Alor Setar, and Ipoh"
            description={`We serve ${serviceAreas.join(", ")} for roof repair, roof leaking repair, roof replacement, modern awning extension, waterproofing, and steel structure enquiries.`}
            align="center"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {serviceAreaHighlights.map((item) => (
              <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft" data-scroll-reveal="up" key={item.area}>
                <h3 className="text-lg font-bold text-ink">{item.area}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <SectionHeading
              eyebrow="Why choose us"
              title="Reliable, professional, experienced, and responsive"
              description={`${site.name} helps customers understand roof condition, structure needs, material options, quotation scope, and the best next step before work begins. Kami fokus pada komunikasi jelas dan kerja yang kemas.`}
            />
            <div className="grid gap-5 sm:grid-cols-2">
              {reasons.map((reason) => (
                <article className="rounded-lg border border-slate-200 bg-white p-6" data-scroll-reveal="up" key={reason.title}>
                  <reason.icon className="h-8 w-8 text-ocean" aria-hidden />
                  <h3 className="mt-4 text-lg font-bold text-ink">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{reason.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Finished Projects"
            title="Completed roofing, awning, waterproofing, and steel structure work"
            description="Browse selected finished projects with real project photos, service types, and short workmanship summaries."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Client trust"
            title="Fast response and reliable workmanship"
            description="Testimonials are realistic placeholders and should be replaced with real customer reviews when available."
            align="center"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="FAQ"
            title="Common questions before requesting a quotation"
            description="Quick answers in English and Malay for roofing, awning, waterproofing, and quotation enquiries."
            align="center"
          />
          <div className="mt-10">
            <FAQSection compact />
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
