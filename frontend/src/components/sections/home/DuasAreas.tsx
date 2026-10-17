import { LinkButton } from "@/components/LinkButton";
import { constructionServices, visualizationServices } from "@/data/services";

type Area = { title: string; text: string; items: { title: string }[]; href: string; cta: string };

const areas: Area[] = [
  {
    title: "Construção e execução de obras",
    text: "Para quem quer construir ou remodelar e procura uma empresa que execute com rigor.",
    items: constructionServices.slice(0, 3),
    href: "/construcao",
    cta: "Ver construção",
  },
  {
    title: "Visualização arquitetónica 3D",
    text: "Para quem precisa de mostrar um projeto com clareza antes de o executar ou vender.",
    items: visualizationServices.slice(0, 3),
    href: "/visualizacao-3d",
    cta: "Ver visualização 3D",
  },
];

export function DuasAreas() {
  return (
    <section className="bg-bruma/50 py-16 md:py-24">
      <div className="mx-auto max-w-site px-5 sm:px-6">
        <h2 className="max-w-2xl font-display text-3xl font-light sm:text-4xl md:text-5xl">Duas áreas, uma marca.</h2>
        <div className="mt-10 grid gap-12 md:mt-12 md:grid-cols-2">
          {areas.map((a) => (
            <div key={a.href}>
              <h3 className="font-display text-2xl sm:text-3xl">{a.title}</h3>
              <p className="mt-3 text-mineral">{a.text}</p>
              <ul className="mt-6 divide-y divide-bruma border-y border-bruma">
                {a.items.map((s) => <li key={s.title} className="py-3 text-sm">{s.title}</li>)}
              </ul>
              <LinkButton href={a.href} className="mt-8">{a.cta}</LinkButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
