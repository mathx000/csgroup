import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export function ProjetosDestaque() {
  const featured = projects.slice(0, 3);
  return (
    <section className="mx-auto max-w-site px-5 py-16 sm:px-6 md:py-24">
      <div className="flex items-end justify-between gap-6">
        <h2 className="font-display text-3xl font-light sm:text-4xl md:text-5xl">Projetos em destaque</h2>
        <Link href="/projetos" className="shrink-0 py-2 text-sm underline underline-offset-4">Ver todos</Link>
      </div>
      <div className="mt-10 grid gap-8 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">{featured.map((p) => <ProjectCard key={p.slug} project={p} />)}</div>
    </section>
  );
}
