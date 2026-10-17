import { LinkButton } from "@/components/LinkButton";

export function EmBreve() {
  return (
    <section className="border-t border-bruma bg-bruma/40 py-12 md:py-16">
      <div className="mx-auto max-w-site px-5 sm:px-6">
        <p className="max-w-2xl text-mineral">A história da empresa, a equipa, as certificações e os parceiros serão publicados aqui quando forem confirmados pela CS Group.</p>
        <LinkButton href="/contactos" className="mt-6">Falar connosco</LinkButton>
      </div>
    </section>
  );
}
