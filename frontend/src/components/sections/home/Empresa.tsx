import { LinkButton } from "@/components/LinkButton";
import { Media } from "@/components/Media";
import { media } from "@/data/media";

export function Empresa() {
  return (
    <section className="mx-auto grid max-w-site items-center gap-8 px-5 py-16 sm:px-6 md:grid-cols-2 md:gap-12 md:py-24">
      <Media item={media.empresa} className="aspect-[4/3] md:aspect-[4/5]" sizes="(min-width: 768px) 40vw, 100vw" />
      <div>
        <h2 className="font-display text-3xl font-light leading-tight sm:text-4xl md:text-5xl">Uma empresa, duas formas de dar forma a um projeto.</h2>
        <p className="mt-6 max-w-lg leading-relaxed text-mineral">A CS Group executa obras e, em paralelo, produz a visualização arquitetónica que permite apresentar, decidir e promover projetos antes e depois de construídos. Cada área tem o seu portefólio e os seus próprios exemplos de trabalho.</p>
        <LinkButton href="/empresa" variant="outline" className="mt-8">Conhecer a empresa</LinkButton>
      </div>
    </section>
  );
}
