import Link from "next/link";
import { Media } from "@/components/Media";
import { kindLabel, type Project } from "@/data/projects";

export function Cabecalho({ p }: { p: Project }) {
  return (
    <>
      <div className="mx-auto max-w-site px-5 pt-8 sm:px-6 md:pt-10">
        <Link href="/projetos" className="inline-block py-2 text-sm text-mineral underline underline-offset-4">Todos os projetos</Link>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-light leading-[1.05] sm:text-5xl md:mt-6 md:text-7xl">{p.title}</h1>
        <p className="mt-4 text-mineral">
          {kindLabel[p.kind]} · {p.status}
          {p.location ? ` · ${p.location}` : ""}
        </p>
      </div>
      <div className="mx-auto mt-8 max-w-site px-5 sm:px-6 md:mt-10"><Media item={p.cover} className="aspect-[4/3] sm:aspect-[21/9]" priority /></div>
    </>
  );
}
