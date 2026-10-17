import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/empresa", "/construcao", "/visualizacao-3d", "/projetos", "/contactos", "/privacidade"];
  return [
    ...pages.map((p) => ({ url: `${siteConfig.url}${p}`, changeFrequency: "monthly" as const, priority: p === "" ? 1 : 0.7 })),
    ...projects.map((p) => ({ url: `${siteConfig.url}/projetos/${p.slug}`, changeFrequency: "yearly" as const, priority: 0.5 })),
  ];
}
