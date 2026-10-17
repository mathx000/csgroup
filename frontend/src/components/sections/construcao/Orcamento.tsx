import { ContactForm } from "@/components/ContactForm";

export function Orcamento() {
  return (
    <section id="orcamento" className="scroll-mt-24 bg-bruma/50 py-16 md:py-24">
      <div className="mx-auto grid max-w-site gap-10 px-5 sm:px-6 md:grid-cols-[1fr_1.4fr] md:gap-12">
        <div>
          <h2 className="font-display text-3xl font-light sm:text-4xl md:text-5xl">Pedir orçamento de construção</h2>
          <p className="mt-4 text-mineral">Descreva a obra. Só precisamos do essencial para começar a conversa.</p>
        </div>
        <ContactForm initialArea="construcao" lockArea />
      </div>
    </section>
  );
}
