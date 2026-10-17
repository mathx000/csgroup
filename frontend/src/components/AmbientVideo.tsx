"use client";
import { useEffect, useRef, useState } from "react";

// Vídeo de fundo: sem som, em loop, inline, com poster. Não é carregado se o
// utilizador preferir movimento reduzido ou tiver poupança de dados ativa.
export function AmbientVideo({ src, poster, alt }: { src: string; poster: string; alt: string }) {
  const [enabled, setEnabled] = useState(false);
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    setEnabled(!reduce && !conn?.saveData);
  }, []);

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={poster} alt={alt} className="absolute inset-0 h-full w-full object-cover" />
      {enabled && (
        <video ref={ref} className="absolute inset-0 h-full w-full object-cover" src={src} poster={poster} autoPlay muted loop playsInline preload="metadata" aria-hidden />
      )}
    </>
  );
}
