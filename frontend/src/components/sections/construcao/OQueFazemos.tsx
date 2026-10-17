import { constructionServices } from "@/data/services";

export function OQueFazemos() {
  return (
    <section className="mx-auto max-w-site px-5 py-16 sm:px-6 md:py-24">
      <h2 className="font-display text-3xl font-light sm:text-4xl md:text-5xl">O que fazemos</h2>
      <div className="mt-8 grid gap-px bg-bruma md:mt-10 md:grid-cols-2">
        {constructionServices.map((s) => (
          <div key={s.title} className="bg-osso p-6 sm:p-8">
            <h3 className="font-display text-2xl">{s.title}</h3>
            <p className="mt-2 text-mineral">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
