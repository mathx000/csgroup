import { Steps } from "@/components/Steps";
import { constructionProcess } from "@/data/services";

export function ComoTrabalhamos() {
  return (
    <section className="mx-auto max-w-site px-5 pb-16 sm:px-6 md:pb-24">
      <h2 className="font-display text-3xl font-light sm:text-4xl md:text-5xl">Como trabalhamos</h2>
      <div className="mt-8 md:mt-10"><Steps items={constructionProcess} /></div>
    </section>
  );
}
