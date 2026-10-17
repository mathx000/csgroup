import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Cabecalho } from "@/components/sections/projeto/Cabecalho";
import { CtaProjeto } from "@/components/sections/projeto/CtaProjeto";
import { Detalhes } from "@/components/sections/projeto/Detalhes";
import { Galeria } from "@/components/sections/projeto/Galeria";
import { Relacionados } from "@/components/sections/projeto/Relacionados";
import { getProject, projects, relatedProjects } from "@/data/projects";

type Params = { slug: string };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const p = getProject((await params).slug);
  if (!p) return {};
  return { title: p.title, description: p.summary, alternates: { canonical: `/projetos/${p.slug}` }, openGraph: { title: p.title, description: p.summary } };
}

export default async function ProjetoPage({ params }: { params: Promise<Params> }) {
  const p = getProject((await params).slug);
  if (!p) notFound();

  return (
    <>
      <Cabecalho p={p} />
      <Detalhes p={p} />
      <Galeria p={p} />
      <CtaProjeto p={p} />
      <Relacionados items={relatedProjects(p)} />
    </>
  );
}
