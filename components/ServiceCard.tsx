import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

type ServiceCardProps = {
  title: string;
  malayTitle?: string;
  summary: string;
  benefit: string;
  cta: string;
  highlight?: boolean;
  image?: string;
  imageAlt?: string;
};

export function ServiceCard({ title, malayTitle, summary, benefit, cta, highlight, image, imageAlt }: ServiceCardProps) {
  return (
    <article
      data-scroll-reveal="up"
      className={`overflow-hidden rounded-lg border bg-white shadow-soft transition hover:-translate-y-1 ${
        highlight ? "lift-card steel-card border-ocean ring-2 ring-ocean/10" : "lift-card border-slate-200 hover:border-ocean/40"
      }`}
    >
      {image ? (
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            alt={imageAlt || title}
            className="object-cover transition duration-500 hover:scale-105"
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            src={image}
          />
        </div>
      ) : null}
      <div className="p-5 sm:p-6">
        <div className="flex h-11 w-11 items-center justify-center rounded-md bg-ocean/10 text-ocean shadow-steel">
          <CheckCircle2 size={22} aria-hidden />
        </div>
        {highlight ? (
          <p className="mt-5 inline-flex rounded-md bg-ocean/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-ocean">
            Highlighted service
          </p>
        ) : null}
        <h3 className={highlight ? "mt-3 text-lg font-bold leading-7 text-ink sm:text-xl" : "mt-5 text-lg font-bold leading-7 text-ink sm:text-xl"}>{title}</h3>
        {malayTitle ? <p className="mt-1 text-sm font-semibold text-slate-500">{malayTitle}</p> : null}
        <p className="mt-3 text-sm leading-6 text-slate-600">{summary}</p>
        <p className="mt-4 border-l-4 border-ocean pl-4 text-sm font-semibold leading-6 text-ink">{benefit}</p>
        <Link
          className="focus-ring mt-5 inline-flex items-center rounded-md text-sm font-bold text-ocean hover:text-ink"
          href={`${site.whatsappHref}&service=${encodeURIComponent(title)}`}
        >
          {cta}
          <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
        </Link>
      </div>
    </article>
  );
}
