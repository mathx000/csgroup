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

  useEffect(() => {
    const v = ref.current;
    if (!enabled || !v) return;
    // O Safari iOS só aceita autoplay se `muted` estiver definido no elemento antes do play().
    v.muted = true;
    v.defaultMuted = true;
    v.setAttribute("muted", "");
    v.setAttribute("playsinline", "");
    const tryPlay = () => { if (v.paused) v.play().catch(() => {}); };
    tryPlay();
    const events = ["loadedmetadata", "canplay"] as const;
    events.forEach((e) => v.addEventListener(e, tryPlay));
    // Se o sistema bloquear (ex.: poupança de energia), arranca ao primeiro toque/scroll.
    const gesture = ["touchstart", "touchend", "click", "scroll"] as const;
    const onGesture = () => { tryPlay(); if (!v.paused) gesture.forEach((g) => window.removeEventListener(g, onGesture)); };
    gesture.forEach((g) => window.addEventListener(g, onGesture, { passive: true }));
    document.addEventListener("visibilitychange", tryPlay);
    return () => {
      events.forEach((e) => v.removeEventListener(e, tryPlay));
      gesture.forEach((g) => window.removeEventListener(g, onGesture));
      document.removeEventListener("visibilitychange", tryPlay);
    };
  }, [enabled]);

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={poster} alt={alt} className="absolute inset-0 h-full w-full object-cover" />
      {enabled && (
        <video ref={ref} className="ambient-video pointer-events-none absolute inset-0 h-full w-full object-cover" src={src} poster={poster} autoPlay muted loop playsInline preload="auto" controls={false} disablePictureInPicture aria-hidden />
      )}
    </>
  );
}
