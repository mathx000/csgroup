import Link from "next/link";
import { kindLabel, type Project } from "@/data/projects";
import { Media } from "./Media";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group">
      <Link href={`/projetos/${project.slug}`} className="block">
        <Media item={project.cover} className="aspect-[4/3]" sizes="(min-width: 768px) 33vw, 100vw" />
        <h3 className="mt-4 font-display text-2xl text-carvao group-hover:text-areia-escura">{project.title}</h3>
        <p className="mt-1 text-sm text-mineral">
          {kindLabel[project.kind]}
          {project.location ? ` · ${project.location}` : ""}
          {project.isDemo ? " · Demonstrativo" : ""}
        </p>
      </Link>
    </article>
  );
}
