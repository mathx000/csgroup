import { Media } from "@/components/Media";
import { media } from "@/data/media";

export function Hero() {
  return (
    <section className="bg-carvao text-osso">
      <div className="mx-auto grid max-w-site items-center gap-8 px-5 py-12 sm:px-6 md:grid-cols-2 md:gap-10 md:py-24">
        <div>
          <h1 className="font-display text-4xl font-light leading-[1.05] sm:text-5xl md:text-7xl">Veja o projeto antes de ganhar forma.</h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-osso/75 md:text-lg">Renders, animações e vídeo de arquitetura para apresentar, decidir e promover.</p>
        </div>
        <Media item={media.hero3d} className="aspect-[16/10]" priority sizes="(min-width: 768px) 50vw, 100vw" />
      </div>
    </section>
  );
}
