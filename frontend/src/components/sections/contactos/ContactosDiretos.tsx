import { siteConfig } from "@/data/site";

export function ContactosDiretos() {
  const c = siteConfig.contact;
  return (
    <aside>
      <h2 className="font-display text-3xl">Contactos diretos</h2>
      <dl className="mt-4 space-y-3 text-mineral">
        <div><dt className="text-sm">E-mail</dt><dd className="break-words">{c.email ? <a className="text-carvao underline" href={`mailto:${c.email}`}>{c.email}</a> : "a indicar"}</dd></div>
        <div><dt className="text-sm">Telefone</dt><dd>{c.phone ?? "a indicar"}</dd></div>
        <div><dt className="text-sm">Morada</dt><dd>{c.address ?? "a indicar"}</dd></div>
      </dl>
    </aside>
  );
}
