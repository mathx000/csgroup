import { LinkButton } from "@/components/LinkButton";
import type { Project } from "@/data/projects";

export function CtaProjeto({ p }: { p: Project }) {
  const construcao = p.area === "construcao";
  return (
    <section className="bg-bruma/50 px-5 py-12 text-center sm:px-6 md:py-16">
      <h2 className="font-display text-3xl font-light sm:text-4xl">Tem um projeto semelhante?</h2>
      <LinkButton href={construcao ? "/construcao#orcamento" : "/visualizacao-3d#orcamento"} className="mt-6">
        {construcao ? "Pedir orçamento de construção" : "Pedir orçamento 3D"}
      </LinkButton>
    </section>
  );
}
