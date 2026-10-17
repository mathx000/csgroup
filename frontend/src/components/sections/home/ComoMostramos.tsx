const pontos = [
  "Cada projeto indica o que foi realizado pela CS Group e o que foi contributo de terceiros.",
  "Renders são identificados como renders e nunca apresentados como fotografias de obra.",
  "Só publicamos informação técnica e localizações confirmadas e autorizadas.",
];

export function ComoMostramos() {
  return (
    <section className="border-t border-bruma">
      <div className="mx-auto max-w-site px-5 py-16 sm:px-6 md:py-24">
        <h2 className="font-display text-3xl font-light sm:text-4xl md:text-5xl">Como mostramos o nosso trabalho</h2>
        <div className="mt-8 grid gap-6 md:mt-10 md:grid-cols-3 md:gap-10">
          {pontos.map((p) => <p key={p} className="leading-relaxed text-mineral">{p}</p>)}
        </div>
      </div>
    </section>
  );
}
