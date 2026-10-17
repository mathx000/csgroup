// Todos os recursos visuais passam por aqui. Para trocar um placeholder por um
// ficheiro definitivo, altere apenas `src` (e `alt`/`label`); os componentes não mudam.
export type MediaLabel =
  | "Imagem ilustrativa"
  | "Visualização demonstrativa"
  | "Projeto conceptual"
  | "Fotografia real"
  | "Render";

export interface MediaItem {
  kind: "image" | "video";
  src: string;
  alt: string;
  /** Etiqueta mostrada sobre o recurso. Usar "Fotografia real" só para material da CS Group. */
  label?: MediaLabel;
  /** Só vídeo: imagem de poster (obrigatória) e fonte mp4 */
  poster?: string;
}

const image = (name: string, alt: string, label: MediaLabel = "Imagem ilustrativa"): MediaItem => ({
  kind: "image",
  src: `/media/${name}`,
  alt,
  label,
});

export const media = {
  heroConstrucao: image("construcao-panorama.jpg", "Edifício urbano envolto em andaimes durante obras (imagem ilustrativa)"),
  hero3d: image("render-hero.jpg", "Render 3D de uma moradia contemporânea com piscina", "Visualização demonstrativa"),
  heroCity: {
    kind: "video",
    src: "/media/hero-cidade.mp4",
    poster: "/media/hero-cidade.jpg",
    alt: "Vídeo ilustrativo com vista aérea de edifícios residenciais numa cidade",
  },
  empresa: image("empresa-moradia.jpg", "Moradia contemporânea rodeada por jardim (imagem ilustrativa)"),
  moradia: image("moradia-contemporanea.jpg", "Moradia contemporânea de linhas minimalistas (imagem ilustrativa)"),
  edificio: image("edificio-residencial.jpg", "Edifício residencial contemporâneo com varandas (imagem ilustrativa)"),
  interior: image("interior-sala.jpg", "Sala de estar moderna e luminosa (imagem ilustrativa)"),
  obra: image("construcao-obra.jpg", "Trabalhadores numa obra de construção com andaimes (imagem ilustrativa)"),
  renderExterior: image("render-exterior.jpg", "Render 3D do exterior de uma moradia contemporânea", "Visualização demonstrativa"),
  renderInterior: image("render-interior.jpg", "Render 3D de uma sala de estar em estilo minimalista", "Visualização demonstrativa"),
  apartamentos: image("apartamentos.jpg", "Conjunto residencial de apartamentos com jardim interior (imagem ilustrativa)"),
} as const;
