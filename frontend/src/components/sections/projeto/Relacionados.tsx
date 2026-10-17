import { ProjectCard } from "@/components/ProjectCard";
import type { Project } from "@/data/projects";

export function Relacionados({ items }: { items: Project[] }) {
  if (items.length === 0) return null;
  return (
    <section className="mx-auto max-w-site px-5 py-12 sm:px-6 md:py-16">
      <h2 className="font-display text-3xl">Projetos relacionados</h2>
      <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">{items.map((r) => <ProjectCard key={r.slug} project={r} />)}</div>
    </section>
  );
}
