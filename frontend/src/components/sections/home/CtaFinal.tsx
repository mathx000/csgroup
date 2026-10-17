import { LinkButton } from "@/components/LinkButton";

export function CtaFinal() {
  return (
    <section className="bg-bruma/50 py-16 text-center md:py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-6">
        <h2 className="font-display text-3xl font-light sm:text-4xl md:text-6xl">Vamos falar sobre o seu projeto?</h2>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row md:mt-10">
          <LinkButton href="/construcao#orcamento">Pedir orçamento de construção</LinkButton>
          <LinkButton href="/visualizacao-3d#orcamento" variant="outline">Pedir orçamento 3D</LinkButton>
        </div>
      </div>
    </section>
  );
}
