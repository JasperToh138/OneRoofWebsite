import { Quote } from "lucide-react";

type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
};

export function TestimonialCard({ quote, name, role }: TestimonialCardProps) {
  return (
    <figure data-scroll-reveal="up" className="lift-card rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
      <Quote className="h-8 w-8 text-ocean" aria-hidden />
      <blockquote className="mt-4 text-base leading-7 text-slate-700">"{quote}"</blockquote>
      <figcaption className="mt-5">
        <p className="font-bold text-ink">{name}</p>
        <p className="text-sm text-slate-500">{role}</p>
      </figcaption>
    </figure>
  );
}
