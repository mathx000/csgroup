import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { ProjectBrowser } from "@/components/ProjectBrowser";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projetos",
  description: "Obras, projetos e visualizações 3D da CS Group, organizados por categoria.",
  alternates: { canonical: "/projetos" },
};

export default function Projetos() {
  return (
    <>
      <PageIntro title="Projetos.">Obras executadas e visualizações 3D, claramente identificadas.</PageIntro>
      <div className="mx-auto max-w-site px-6 pb-24"><ProjectBrowser projects={projects} /></div>
    </>
  );
}
