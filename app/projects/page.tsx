import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { ProjectGallery } from "@/components/ProjectGallery";

export const metadata: Metadata = {
  title: "Finished Projects | Roofing, Awning & Waterproofing Gallery",
  description:
    "View One Roof Solutions finished projects for modern awning extension, roof replacement, metal deck roofing, polycarbonate roofing, gutter and flashing, M/S steel structure, roof capping, and roof tiles replacement.",
  openGraph: {
    title: "Finished Projects Gallery | One Roof Solutions",
    description:
      "Completed roofing, awning, waterproofing, gutter, flashing, and steel structure projects by One Roof Solutions.",
  },
};

export default function ProjectsPage() {
  return (
    <main>
      <section className="bg-mist px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl" data-scroll-reveal="fade">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-ocean">Finished Projects</p>
          <h1 className="mt-3 max-w-4xl text-3xl font-bold leading-tight text-ink sm:text-5xl">
            Finished roofing, awning, waterproofing, and steel structure projects
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Browse completed project examples for modern awning extension, roof replacement, roof upgrade, metal deck
            roofing, polycarbonate roofing, gutter and flashing, M/S steel structure, capping, and roof tiles
            replacement.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl" data-scroll-reveal="fade">
            <h2 className="text-3xl font-bold leading-tight text-ink sm:text-4xl">Project Gallery</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Each card includes the project photo, service type, and a short workmanship summary to help customers
              understand the type of work One Roof Solutions can handle.
            </p>
          </div>
          <ProjectGallery />
        </div>
      </section>

      <CTASection
        title="Have a similar project in mind?"
        description="Send roof photos, site details, or your project goals by WhatsApp and we will guide you on the next step."
      />
    </main>
  );
}
