import { media, type MediaItem } from "./media";

export const categories = [
  "Construção",
  "Moradias",
  "Apartamentos",
  "Edifícios",
  "Interiores",
  "Renders 3D",
  "Vídeos e animações",
] as const;
export type Category = (typeof categories)[number];

/** Distingue claramente o que é obra, projeto ou render. */
export type ProjectKind = "obra-concluida" | "obra-em-execucao" | "projeto-arquitetonico" | "render-3d";
export const kindLabel: Record<ProjectKind, string> = {
  "obra-concluida": "Obra concluída",
  "obra-em-execucao": "Obra em execução",
  "projeto-arquitetonico": "Projeto arquitetónico",
  "render-3d": "Render 3D",
};

export interface Project {
  slug: string;
  title: string;
  area: "construcao" | "visualizacao";
  kind: ProjectKind;
  categories: Category[];
  summary: string;
  description: string;
  location?: string; // só se autorizada
  status: string;
  cover: MediaItem;
  gallery: MediaItem[];
  scope: string[]; // o que a CS Group fez
  credits?: string; // contribuição de terceiros
  technical?: { label: string; value: string }[]; // só informação confirmada
  /** true = conteúdo de demonstração, nunca apresentar como trabalho real */
  isDemo: boolean;
}

// TODOS os projetos abaixo são DEMONSTRATIVOS. Substituir por projetos reais e pôr isDemo: false.
export const projects: Project[] = [
  {
    slug: "moradia-contemporanea-exemplo",
    title: "Moradia contemporânea",
    area: "construcao",
    kind: "obra-concluida",
    categories: ["Construção", "Moradias"],
    summary: "Exemplo de ficha de obra concluída.",
    description: "Ficha demonstrativa que mostra como será apresentada uma obra real: descrição, âmbito, galeria e informação técnica confirmada.",
    status: "Exemplo",
    cover: media.moradia,
    gallery: [media.moradia, media.interior, media.obra],
    scope: ["Âmbito a preencher com os trabalhos realmente executados"],
    isDemo: true,
  },
  {
    slug: "edificio-residencial-exemplo",
    title: "Edifício residencial",
    area: "construcao",
    kind: "obra-em-execucao",
    categories: ["Construção", "Edifícios", "Apartamentos"],
    summary: "Exemplo de ficha de obra em execução.",
    description: "Ficha demonstrativa para uma obra em curso, com evolução dos trabalhos ao longo do tempo.",
    status: "Exemplo",
    cover: media.obra,
    gallery: [media.obra, media.edificio],
    scope: ["Âmbito a preencher"],
    isDemo: true,
  },
  {
    slug: "apartamentos-exemplo",
    title: "Conjunto de apartamentos",
    area: "construcao",
    kind: "obra-concluida",
    categories: ["Construção", "Apartamentos", "Edifícios"],
    summary: "Exemplo de ficha com vários espaços.",
    description: "Ficha demonstrativa para um projeto de habitação multifamiliar.",
    status: "Exemplo",
    cover: media.apartamentos,
    gallery: [media.apartamentos, media.interior],
    scope: ["Âmbito a preencher"],
    isDemo: true,
  },
  {
    slug: "render-moradia-exterior-exemplo",
    title: "Render de moradia, exterior",
    area: "visualizacao",
    kind: "render-3d",
    categories: ["Renders 3D", "Moradias"],
    summary: "Visualização demonstrativa de uma moradia.",
    description: "Exemplo do tipo de imagem produzida para apresentar um projeto antes da obra. Não representa um projeto real.",
    status: "Visualização demonstrativa",
    cover: media.renderExterior,
    gallery: [media.renderExterior, media.hero3d],
    scope: ["Modelação e render (a confirmar no projeto real)"],
    credits: "Projeto arquitetónico: a indicar quando for um projeto real.",
    isDemo: true,
  },
  {
    slug: "render-interior-exemplo",
    title: "Render de sala de estar",
    area: "visualizacao",
    kind: "render-3d",
    categories: ["Renders 3D", "Interiores"],
    summary: "Visualização demonstrativa de um interior.",
    description: "Exemplo de render de interior com materiais e iluminação. Não representa um projeto real.",
    status: "Visualização demonstrativa",
    cover: media.renderInterior,
    gallery: [media.renderInterior, media.interior],
    scope: ["Modelação e render (a confirmar no projeto real)"],
    isDemo: true,
  },
  {
    slug: "empreendimento-conceptual-exemplo",
    title: "Empreendimento conceptual",
    area: "visualizacao",
    kind: "projeto-arquitetonico",
    categories: ["Renders 3D", "Edifícios", "Vídeos e animações"],
    summary: "Exemplo de apresentação de um empreendimento.",
    description: "Projeto conceptual para demonstrar a apresentação de renders e vídeo de um empreendimento.",
    status: "Projeto conceptual",
    cover: media.edificio,
    gallery: [media.edificio, media.apartamentos, media.hero3d],
    scope: ["Imagens e vídeo de apresentação (a confirmar)"],
    isDemo: true,
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const relatedProjects = (p: Project, n = 3) =>
  projects.filter((x) => x.slug !== p.slug && x.area === p.area).slice(0, n);
