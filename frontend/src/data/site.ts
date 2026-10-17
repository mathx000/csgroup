// Dados centrais da empresa. Valores null = ainda por confirmar (não inventar).
export const siteConfig = {
  name: "CS Group",
  legalName: null as string | null, // Denominação social completa
  signature: "Construímos soluções. Edificamos confiança.", // do logótipo
  heroLine: "Construção e visualização arquitetónica, ligadas pela mesma visão de qualidade.",
  description:
    "A CS Group executa obras e produz visualização arquitetónica 3D e vídeo para projetos de construção e imobiliário em Portugal.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  // Mostra a faixa "versão de demonstração" no topo. Pôr false ao publicar com conteúdos reais.
  demoMode: true,
  contact: {
    email: null as string | null,
    phone: null as string | null,
    address: null as string | null,
    nif: null as string | null,
    licenseNumber: null as string | null, // alvará / licença de construção
  },
  social: {
    instagram: null as string | null,
    linkedin: null as string | null,
  },
};

export const nav = [
  { href: "/", label: "Início" },
  { href: "/empresa", label: "Empresa" },
  { href: "/construcao", label: "Construção" },
  { href: "/visualizacao-3d", label: "Visualização 3D" },
  { href: "/projetos", label: "Projetos" },
  { href: "/contactos", label: "Contactos" },
] as const;
