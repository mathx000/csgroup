import { Steps } from "@/components/Steps";
import { visualizationProcess } from "@/data/services";

export function ComoProduzimos() {
  return (
    <section className="mx-auto max-w-site px-5 py-16 sm:px-6 md:py-24">
      <h2 className="font-display text-3xl font-light sm:text-4xl md:text-5xl">Como produzimos</h2>
      <div className="mt-8 md:mt-10"><Steps items={visualizationProcess} /></div>
    </section>
  );
}
