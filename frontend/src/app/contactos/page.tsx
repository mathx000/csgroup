import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { ContactosDiretos } from "@/components/sections/contactos/ContactosDiretos";
import { Formulario } from "@/components/sections/contactos/Formulario";

export const metadata: Metadata = {
  title: "Contactos",
  description: "Peça um orçamento de construção ou de visualização arquitetónica 3D à CS Group.",
  alternates: { canonical: "/contactos" },
};

export default async function Contactos({ searchParams }: { searchParams: Promise<{ area?: string }> }) {
  const { area } = await searchParams;
  return (
    <>
      <PageIntro title="Vamos falar sobre o seu projeto.">Escolha o serviço e descreva o que pretende.</PageIntro>
      <div className="mx-auto grid max-w-site gap-12 px-5 pb-16 sm:px-6 md:grid-cols-[1.5fr_1fr] md:gap-16 md:pb-24">
        <Formulario area={area} />
        <ContactosDiretos />
      </div>
    </>
  );
}
