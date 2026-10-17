import { visualizationAudiences } from "@/data/services";

export function ParaQuem() {
  return (
    <section className="bg-bruma/50 py-16 md:py-24">
      <div className="mx-auto max-w-site px-5 sm:px-6">
        <h2 className="font-display text-3xl font-light sm:text-4xl md:text-5xl">Para quem</h2>
        <dl className="mt-8 grid gap-8 sm:grid-cols-2 md:mt-10 lg:grid-cols-4">
          {visualizationAudiences.map((a) => (<div key={a.who}><dt className="font-display text-2xl">{a.who}</dt><dd className="mt-2 text-sm leading-relaxed text-mineral">{a.why}</dd></div>))}
        </dl>
      </div>
    </section>
  );
}
