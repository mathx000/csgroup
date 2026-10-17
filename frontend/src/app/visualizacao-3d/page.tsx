import type { Metadata } from "next";
import { ComoProduzimos } from "@/components/sections/visualizacao/ComoProduzimos";
import { Exemplos } from "@/components/sections/visualizacao/Exemplos";
import { Hero } from "@/components/sections/visualizacao/Hero";
import { OQueProduzimos } from "@/components/sections/visualizacao/OQueProduzimos";
import { Orcamento } from "@/components/sections/visualizacao/Orcamento";
import { ParaQuem } from "@/components/sections/visualizacao/ParaQuem";
import { Perguntas } from "@/components/sections/visualizacao/Perguntas";

export const metadata: Metadata = {
  title: "Visualização arquitetónica 3D",
  description: "Renders, animações e vídeos 3D de arquitetura para arquitetos, construtores e promotores em Portugal. Peça uma proposta.",
  alternates: { canonical: "/visualizacao-3d" },
};

export default function Visualizacao() {
  return (
    <>
      <Hero />
      <OQueProduzimos />
      <Exemplos />
      <ParaQuem />
      <ComoProduzimos />
      <Perguntas />
      <Orcamento />
    </>
  );
}
