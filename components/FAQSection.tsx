import { faqs } from "@/data/faqs";

type FAQSectionProps = {
  compact?: boolean;
};

export function FAQSection({ compact = false }: FAQSectionProps) {
  const visibleFaqs = compact ? faqs.slice(0, 4) : faqs;

  return (
    <div className="grid gap-4">
      {visibleFaqs.map((faq) => (
        <details
          className="group rounded-lg border border-slate-200 bg-white p-5 shadow-soft transition duration-300 open:border-ocean/40 open:shadow-glow hover:border-ocean/30"
          data-scroll-reveal="up"
          key={faq.question}
        >
          <summary className="cursor-pointer list-none text-base font-bold text-ink">
            {faq.question}
            <span className="float-right ml-4 text-ocean transition duration-300 group-open:rotate-45">+</span>
          </summary>
          <p className="mt-4 text-sm leading-6 text-slate-600">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
