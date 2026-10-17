export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-bruma border-y border-bruma">
      {items.map((f) => (
        <details key={f.q} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between font-display text-2xl text-carvao">
            {f.q}
            <span className="ml-4 text-areia-escura transition-transform group-open:rotate-45" aria-hidden>+</span>
          </summary>
          <p className="mt-3 max-w-2xl leading-relaxed text-mineral">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
