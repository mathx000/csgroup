// Sequência real de etapas (a numeração faz sentido aqui).
export function Steps({ items }: { items: { title: string; text: string }[] }) {
  return (
    <ol className="grid gap-px bg-bruma md:grid-cols-4">
      {items.map((s, i) => (
        <li key={s.title} className="bg-osso p-6">
          <span className="font-display text-3xl text-areia-escura">{i + 1}</span>
          <h3 className="mt-3 font-display text-2xl text-carvao">{s.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-mineral">{s.text}</p>
        </li>
      ))}
    </ol>
  );
}
