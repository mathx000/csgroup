import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { ComoTrabalhamos } from "@/components/sections/construcao/ComoTrabalhamos";
import { Imagem } from "@/components/sections/construcao/Imagem";
import { ObrasProjetos } from "@/components/sections/construcao/ObrasProjetos";
import { OQueFazemos } from "@/components/sections/construcao/OQueFazemos";
import { Orcamento } from "@/components/sections/construcao/Orcamento";
import { Perguntas } from "@/components/sections/construcao/Perguntas";

export const metadata: Metadata = {
  title: "Construção e execução de obras",
  description: "A CS Group executa obras para particulares e empresas em Portugal. Peça um orçamento de construção.",
  alternates: { canonical: "/construcao" },
};

export default function Construcao() {
  return (
    <>
      <PageIntro title="Construção e execução de obras.">
        Para proprietários, empresas e promotores que procuram uma empresa que execute o projeto com rigor e comunique com clareza.
      </PageIntro>
      <Imagem />
      <OQueFazemos />
      <ObrasProjetos />
      <ComoTrabalhamos />
      <Perguntas />
      <Orcamento />
    </>
  );
}
