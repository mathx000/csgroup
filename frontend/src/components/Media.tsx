import Image from "next/image";
import type { MediaItem } from "@/data/media";
import { AmbientVideo } from "./AmbientVideo";

// Moldura de imagem/vídeo com etiqueta de transparência ("Imagem ilustrativa", etc.).
export function Media({ item, sizes = "100vw", priority = false, className = "", showLabel = true }: { item: MediaItem; sizes?: string; priority?: boolean; className?: string; showLabel?: boolean }) {
  return (
    <div className={`relative overflow-hidden bg-bruma ${className}`}>
      {item.kind === "video" && item.poster ? (
        <AmbientVideo src={item.src} poster={item.poster} alt={item.alt} />
      ) : (
        <Image src={item.src} alt={item.alt} fill sizes={sizes} priority={priority} className="object-cover" />
      )}
      {showLabel && item.label && (
        <span className="absolute bottom-3 left-3 bg-carvao/75 px-2 py-1 text-xs text-osso">{item.label}</span>
      )}
    </div>
  );
}
