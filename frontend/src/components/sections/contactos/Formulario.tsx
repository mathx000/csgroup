import { ContactForm } from "@/components/ContactForm";

export function Formulario({ area }: { area?: string }) {
  return (
    <div id="orcamento" className="scroll-mt-24">
      <ContactForm initialArea={area === "visualizacao" ? "visualizacao" : "construcao"} />
    </div>
  );
}
