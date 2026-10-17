import { LinkButton } from "@/components/LinkButton";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-site px-5 py-20 sm:px-6 md:py-32">
      <h1 className="font-display text-4xl font-light sm:text-6xl">Página não encontrada.</h1>
      <p className="mt-4 text-mineral">O endereço pode estar errado ou a página já não existe.</p>
      <div className="mt-8 flex flex-wrap gap-4"><LinkButton href="/">Ir para o início</LinkButton><LinkButton href="/projetos" variant="outline">Ver projetos</LinkButton></div>
    </div>
  );
}
