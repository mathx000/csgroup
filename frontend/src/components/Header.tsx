"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/data/site";
import { Logo } from "./Logo";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [pathname]);

  const isHome = pathname === "/";
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className={isHome ? "absolute inset-x-0 top-0 z-40 border-b border-osso/20 bg-carvao/25 backdrop-blur-sm" : "sticky top-0 z-40 border-b border-bruma bg-osso/95 backdrop-blur"}>
      <div className="mx-auto flex h-20 max-w-site items-center justify-between gap-4 px-5 sm:px-6">
        <Logo light={isHome} />
        <nav aria-label="Principal" className="hidden items-center gap-8 lg:flex">
          {nav.map((i) => (
            <Link key={i.href} href={i.href} aria-current={isActive(i.href) ? "page" : undefined}
              className={`text-sm transition-colors duration-base ${isHome ? "text-osso/85 hover:text-osso" : "hover:text-areia-escura"} ${isActive(i.href) ? (isHome ? "text-osso underline decoration-areia decoration-2 underline-offset-8" : "text-carvao underline decoration-areia decoration-2 underline-offset-8") : isHome ? "" : "text-mineral"}`}>
              {i.label}
            </Link>
          ))}
          <Link href="/contactos#orcamento" className={isHome ? "border border-osso bg-osso px-5 py-2.5 text-sm text-carvao transition-colors duration-base hover:border-areia hover:bg-areia" : "border border-carvao bg-carvao px-5 py-2.5 text-sm text-osso transition-colors duration-base hover:bg-areia-escura hover:border-areia-escura"}>
            Pedir orçamento
          </Link>
        </nav>
        <button type="button" className={`flex h-11 w-11 shrink-0 items-center justify-center border lg:hidden ${isHome ? "border-osso/70 text-osso" : "border-carvao text-carvao"}`} aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} aria-controls="menu-movel" onClick={() => setOpen((v) => !v)}>
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <nav id="menu-movel" aria-label="Principal (móvel)" className="border-t border-bruma bg-osso lg:hidden">
          <ul className="mx-auto flex max-w-site flex-col px-6 py-4">
            {nav.map((i) => (
              <li key={i.href}>
                <Link href={i.href} aria-current={isActive(i.href) ? "page" : undefined} className="block py-3 text-lg text-carvao">{i.label}</Link>
              </li>
            ))}
            <li className="pt-3">
              <Link href="/contactos#orcamento" className="block bg-carvao px-5 py-3 text-center text-osso">Pedir orçamento</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
