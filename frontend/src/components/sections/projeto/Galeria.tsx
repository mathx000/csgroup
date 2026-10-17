import { Media } from "@/components/Media";
import type { Project } from "@/data/projects";

export function Galeria({ p }: { p: Project }) {
  return (
    <section className="mx-auto max-w-site px-5 pb-12 sm:px-6 md:pb-16">
      <h2 className="font-display text-3xl">Galeria</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {p.gallery.map((g, i) => <Media key={`${g.src}-${i}`} item={g} className="aspect-[4/3]" sizes="(min-width: 768px) 50vw, 100vw" />)}
      </div>
    </section>
  );
}
