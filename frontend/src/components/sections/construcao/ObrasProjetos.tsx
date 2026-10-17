import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export function ObrasProjetos() {
  const related = projects.filter((p) => p.area === "construcao");
  return (
    <section className="mx-auto max-w-site px-5 pb-16 sm:px-6 md:pb-24">
      <h2 className="font-display text-3xl font-light sm:text-4xl md:text-5xl">Obras e projetos</h2>
      <div className="mt-8 grid gap-8 sm:grid-cols-2 md:mt-10 lg:grid-cols-3">{related.map((p) => <ProjectCard key={p.slug} project={p} />)}</div>
    </section>
  );
}
