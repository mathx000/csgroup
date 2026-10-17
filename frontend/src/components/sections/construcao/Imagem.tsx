import { Media } from "@/components/Media";
import { media } from "@/data/media";

export function Imagem() {
  return <div className="mx-auto max-w-site px-5 sm:px-6"><Media item={media.heroConstrucao} className="aspect-[4/3] sm:aspect-[21/9]" priority /></div>;
}
