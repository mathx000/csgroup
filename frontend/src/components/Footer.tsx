import Link from "next/link";
import { nav, siteConfig } from "@/data/site";
import { Logo } from "./Logo";

export function Footer() {
  const c = siteConfig.contact;
  const pending = <span className="text-osso/50">a indicar</span>;
  return (
    <footer className="bg-carvao text-osso">
      <div className="mx-auto grid max-w-site gap-12 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo light />
        </div>
        <nav aria-label="Rodapé">
          <h2 className="font-display text-xl">Navegação</h2>
          <ul className="mt-4 space-y-2 text-sm text-osso/80">
            {nav.map((i) => (<li key={i.href}><Link className="hover:text-areia" href={i.href}>{i.label}</Link></li>))}
          </ul>
        </nav>
        <div>
          <h2 className="font-display text-xl">Serviços</h2>
          <ul className="mt-4 space-y-2 text-sm text-osso/80">
            <li><Link className="hover:text-areia" href="/construcao">Construção e execução de obras</Link></li>
            <li><Link className="hover:text-areia" href="/visualizacao-3d">Visualização arquitetónica 3D</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="font-display text-xl">Contactos</h2>
          <ul className="mt-4 space-y-2 text-sm text-osso/80">
            <li>E-mail: {c.email ? <a className="hover:text-areia" href={`mailto:${c.email}`}>{c.email}</a> : pending}</li>
            <li>Telefone: {c.phone ? <a className="hover:text-areia" href={`tel:${c.phone.replace(/\s/g, "")}`}>{c.phone}</a> : pending}</li>
            <li>Morada: {c.address ?? pending}</li>
            {siteConfig.social.instagram && <li><a className="hover:text-areia" href={siteConfig.social.instagram} rel="noopener noreferrer">Instagram</a></li>}
            {siteConfig.social.linkedin && <li><a className="hover:text-areia" href={siteConfig.social.linkedin} rel="noopener noreferrer">LinkedIn</a></li>}
          </ul>
        </div>
      </div>
      <div className="border-t border-osso/15">
        <div className="mx-auto flex max-w-site flex-col gap-2 px-6 py-6 text-xs text-osso/60 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.legalName ?? siteConfig.name}. {c.nif ? `NIF ${c.nif}.` : ""} {c.licenseNumber ? `Alvará ${c.licenseNumber}.` : ""}</p>
          <Link href="/privacidade" className="hover:text-areia">Política de privacidade</Link>
        </div>
      </div>
    </footer>
  );
}
