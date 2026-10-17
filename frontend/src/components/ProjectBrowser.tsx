"use client";
import { useMemo, useState } from "react";
import { categories, type Category, type Project } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

const PAGE = 9;

export function ProjectBrowser({ projects }: { projects: Project[] }) {
  const [cat, setCat] = useState<Category | "Todos">("Todos");
  const [q, setQ] = useState("");
  const [visible, setVisible] = useState(PAGE);

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return projects.filter((p) => (cat === "Todos" || p.categories.includes(cat)) && (!term || `${p.title} ${p.summary} ${p.location ?? ""}`.toLowerCase().includes(term)));
  }, [projects, cat, q]);

  const choose = (c: Category | "Todos") => { setCat(c); setVisible(PAGE); };
  const chip = (active: boolean) => `border px-4 py-2 text-sm transition-colors duration-base ${active ? "border-carvao bg-carvao text-osso" : "border-bruma text-mineral hover:border-carvao hover:text-carvao"}`;

  return (
    <div>
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div role="group" aria-label="Filtrar por categoria" className="flex flex-wrap gap-2">
          {(["Todos", ...categories] as const).map((c) => (
            <button key={c} type="button" aria-pressed={cat === c} onClick={() => choose(c)} className={chip(cat === c)}>{c}</button>
          ))}
        </div>
        <div>
          <label htmlFor="pesquisa" className="block text-sm text-mineral">Pesquisar projetos</label>
          <input id="pesquisa" type="search" value={q} onChange={(e) => { setQ(e.target.value); setVisible(PAGE); }} className="mt-1 w-full border border-bruma bg-transparent px-3 py-2 md:w-64" />
        </div>
      </div>
      <p className="mt-6 text-sm text-mineral" aria-live="polite">{filtered.length} {filtered.length === 1 ? "projeto" : "projetos"}</p>
      {filtered.length === 0 ? (
        <div className="mt-8 border border-bruma p-10 text-center">
          <p className="font-display text-2xl text-carvao">Sem projetos nesta seleção.</p>
          <button type="button" onClick={() => { setCat("Todos"); setQ(""); }} className="mt-4 text-sm underline underline-offset-4">Limpar filtros</button>
        </div>
      ) : (
        <div className="mt-8 grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {filtered.slice(0, visible).map((p) => <ProjectCard key={p.slug} project={p} />)}
        </div>
      )}
      {filtered.length > visible && (
        <div className="mt-12 text-center">
          <button type="button" onClick={() => setVisible((v) => v + PAGE)} className="border border-carvao px-6 py-3 text-sm hover:bg-carvao hover:text-osso">Ver mais projetos</button>
        </div>
      )}
    </div>
  );
}
