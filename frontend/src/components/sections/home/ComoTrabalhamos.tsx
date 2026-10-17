import { Steps } from "@/components/Steps";
import { constructionProcess } from "@/data/services";

export function ComoTrabalhamos() {
  return (
    <section className="mx-auto max-w-site px-5 py-16 sm:px-6 md:py-24">
      <h2 className="font-display text-3xl font-light sm:text-4xl md:text-5xl">Como trabalhamos</h2>
      <div className="mt-10 md:mt-12"><Steps items={constructionProcess} /></div>
    </section>
  );
}
