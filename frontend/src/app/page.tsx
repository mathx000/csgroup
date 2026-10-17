import { ComoMostramos } from "@/components/sections/home/ComoMostramos";
import { ComoTrabalhamos } from "@/components/sections/home/ComoTrabalhamos";
import { CtaFinal } from "@/components/sections/home/CtaFinal";
import { DuasAreas } from "@/components/sections/home/DuasAreas";
import { Empresa } from "@/components/sections/home/Empresa";
import { Hero } from "@/components/sections/home/Hero";
import { ProjetosDestaque } from "@/components/sections/home/ProjetosDestaque";
import { VisualizacaoCta } from "@/components/sections/home/VisualizacaoCta";

export default function Home() {
  return (
    <>
      <Hero />
      <Empresa />
      <DuasAreas />
      <ProjetosDestaque />
      <VisualizacaoCta />
      <ComoTrabalhamos />
      <ComoMostramos />
      <CtaFinal />
    </>
  );
}
