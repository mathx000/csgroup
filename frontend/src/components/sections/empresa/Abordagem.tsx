const valores = ["Rigor técnico", "Comunicação clara", "Atenção ao detalhe", "Transparência sobre o que mostramos"];

export function Abordagem() {
  return (
    <section className="mx-auto grid max-w-site gap-10 px-5 py-16 sm:px-6 md:grid-cols-2 md:gap-12 md:py-24">
      <div>
        <h2 className="font-display text-3xl font-light sm:text-4xl">A nossa abordagem</h2>
        <p className="mt-4 max-w-lg leading-relaxed text-mineral">Trabalhamos com clareza sobre o que foi pedido, o que será executado e como será acompanhado. Cada área demonstra a sua competência com o seu próprio trabalho: as obras com obras, a visualização com visualização.</p>
      </div>
      <div>
        <h2 className="font-display text-3xl font-light sm:text-4xl">O que nos orienta</h2>
        <ul className="mt-4 divide-y divide-bruma border-y border-bruma text-mineral">
          {valores.map((v) => <li key={v} className="py-3">{v}</li>)}
        </ul>
      </div>
    </section>
  );
}
