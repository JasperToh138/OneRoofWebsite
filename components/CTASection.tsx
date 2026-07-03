import { ArrowRight, MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { site } from "@/data/site";

type CTASectionProps = {
  title?: string;
  description?: string;
};

export function CTASection({
  title = "Ready to request a professional quotation?",
  description = "Share photos, measurements, and the issue you need solved. Our team will respond through WhatsApp with practical next steps.",
}: CTASectionProps) {
  return (
    <section className="soft-grid bg-ink px-4 py-16 text-white sm:px-6 lg:px-8">
      <div
        className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between"
        data-scroll-reveal="fade"
      >
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold leading-tight">{title}</h2>
          <p className="mt-4 text-base leading-7 text-blue-50">{description}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:shrink-0">
          <ButtonLink href="/contact" variant="light">
            Contact Us Today <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
          </ButtonLink>
          <ButtonLink href={site.whatsappHref} variant="primary">
            WhatsApp Us <MessageCircle className="ml-2 h-4 w-4" aria-hidden />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
