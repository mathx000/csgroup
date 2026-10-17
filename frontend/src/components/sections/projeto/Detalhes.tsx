import type { Project } from "@/data/projects";

export function Detalhes({ p }: { p: Project }) {
  return (
    <section className="mx-auto grid max-w-site gap-10 px-5 py-12 sm:px-6 md:grid-cols-[1.5fr_1fr] md:gap-12 md:py-16">
      <div>
        <h2 className="font-display text-3xl">Sobre o projeto</h2>
        <p className="mt-4 max-w-xl leading-relaxed text-mineral">{p.description}</p>
      </div>
      <div className="space-y-8">
        <div>
          <h2 className="font-display text-3xl">Âmbito da CS Group</h2>
          <ul className="mt-3 list-disc pl-5 text-mineral">{p.scope.map((s) => <li key={s}>{s}</li>)}</ul>
        </div>
        {p.credits && (<div><h2 className="font-display text-3xl">Outras contribuições</h2><p className="mt-3 text-mineral">{p.credits}</p></div>)}
        {p.technical && (
          <dl className="divide-y divide-bruma border-y border-bruma">
            {p.technical.map((t) => (<div key={t.label} className="flex justify-between gap-4 py-2 text-sm"><dt className="text-mineral">{t.label}</dt><dd className="text-right">{t.value}</dd></div>))}
          </dl>
        )}
      </div>
    </section>
  );
}
