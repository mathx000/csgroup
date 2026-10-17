import { LinkButton } from "@/components/LinkButton";
import { Media } from "@/components/Media";
import { media } from "@/data/media";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section aria-labelledby="titulo-hero" className="relative flex min-h-svh items-center justify-center overflow-hidden px-5 py-28 text-center text-osso sm:px-6 md:px-12 md:py-32">
      <Media item={media.heroCity} className="!absolute inset-0" priority sizes="100vw" showLabel={false} />
      <div className="absolute inset-0 bg-gradient-to-b from-carvao/55 via-carvao/45 to-carvao/65" aria-hidden />
      <div className="relative z-10 mx-auto max-w-4xl">
        <h1 id="titulo-hero" className="hero-rise text-balance font-display text-4xl font-light leading-[1.05] sm:text-5xl md:text-7xl">{siteConfig.signature}</h1>
        <p className="hero-rise mx-auto mt-5 max-w-2xl text-base text-osso/90 md:text-lg" style={{ animationDelay: "150ms" }}>{siteConfig.heroLine}</p>
        <div className="hero-rise mt-8 flex flex-col items-stretch justify-center gap-4 sm:mt-9 sm:flex-row sm:items-center" style={{ animationDelay: "300ms" }}>
          <LinkButton href="/construcao" variant="ghost-light">Conhecer a construção</LinkButton>
          <LinkButton href="/visualizacao-3d" variant="ghost-light">Explorar visualização 3D</LinkButton>
        </div>
      </div>
    </section>
  );
}
