// Todos os recursos visuais passam por aqui. Para trocar um placeholder por um
// ficheiro definitivo, altere apenas `src` (e `alt`/`label`); os componentes não mudam.
export type MediaLabel =
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

const image = (name: string, alt: string): MediaItem => ({
  kind: "image",
  src: `/media/${name}`,
  alt,
});

export const media = {
  heroConstrucao: image("construcao-panorama.jpg", "Edifício urbano envolto em andaimes durante obras"),
  hero3d: image("render-hero.jpg", "Render 3D de uma moradia contemporânea com piscina"),
  heroCity: {
    kind: "video",
    src: "/media/hero-cidade.mp4",
    poster: "/media/hero-cidade.jpg",
    alt: "Vídeo com vista aérea de edifícios residenciais numa cidade",
  },
  empresa: image("empresa-moradia.jpg", "Moradia contemporânea rodeada por jardim"),
  moradia: image("moradia-contemporanea.jpg", "Moradia contemporânea de linhas minimalistas"),
  edificio: image("edificio-residencial.jpg", "Edifício residencial contemporâneo com varandas"),
  interior: image("interior-sala.jpg", "Sala de estar moderna e luminosa"),
  obra: image("construcao-obra.jpg", "Trabalhadores numa obra de construção com andaimes"),
  renderExterior: image("render-exterior.jpg", "Render 3D do exterior de uma moradia contemporânea"),
  renderInterior: image("render-interior.jpg", "Render 3D de uma sala de estar em estilo minimalista"),
  apartamentos: image("apartamentos.jpg", "Conjunto residencial de apartamentos com jardim interior"),
} as const;

