import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { visualizationFaq } from "@/data/services";

export function Perguntas() {
  return (
    <section className="mx-auto max-w-site px-5 pb-16 sm:px-6 md:pb-24">
      <h2 className="font-display text-3xl font-light sm:text-4xl md:text-5xl">Perguntas frequentes</h2>
      <div className="mt-8 max-w-3xl"><Faq items={visualizationFaq} /></div>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: visualizationFaq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }} />
    </section>
  );
}
