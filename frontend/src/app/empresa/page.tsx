import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { Abordagem } from "@/components/sections/empresa/Abordagem";
import { EmBreve } from "@/components/sections/empresa/EmBreve";
import { Imagem } from "@/components/sections/empresa/Imagem";

export const metadata: Metadata = {
  title: "Empresa",
  description: "Conheça a CS Group: construção e visualização arquitetónica, com a mesma exigência de qualidade.",
  alternates: { canonical: "/empresa" },
};

export default function Empresa() {
  return (
    <>
      <PageIntro title="Construir e comunicar com o mesmo rigor.">
        A CS Group junta a execução de obras à produção de visualização arquitetónica 3D e vídeo.
      </PageIntro>
      <Imagem />
      <Abordagem />
      <EmBreve />
    </>
  );
}
