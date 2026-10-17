import { LinkButton } from "@/components/LinkButton";
import { Media } from "@/components/Media";
import { media } from "@/data/media";

export function VisualizacaoCta() {
  return (
    <section className="bg-carvao text-osso">
      <div className="mx-auto grid max-w-site items-center gap-10 px-5 py-16 sm:px-6 md:grid-cols-2 md:gap-12 md:py-24">
        <div>
          <h2 className="font-display text-3xl font-light leading-tight sm:text-4xl md:text-6xl">Veja o projeto antes de ganhar forma.</h2>
          <p className="mt-6 max-w-lg leading-relaxed text-osso/75">Renders e vídeo ajudam arquitetos, construtores e promotores a apresentar espaços, comunicar propostas e promover projetos imobiliários.</p>
          <LinkButton href="/visualizacao-3d" variant="light" className="mt-8">Explorar visualização 3D</LinkButton>
        </div>
        <Media item={media.renderExterior} className="aspect-[16/10]" sizes="(min-width: 768px) 50vw, 100vw" />
      </div>
    </section>
  );
}
