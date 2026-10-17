import type { ReactNode } from "react";
export function PageIntro({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <div className="mx-auto max-w-site px-6 pb-12 pt-16 md:pt-24">
      <h1 className="max-w-3xl font-display text-5xl font-light leading-[1.05] text-carvao md:text-7xl">{title}</h1>
      {children && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mineral">{children}</p>}
    </div>
  );
}
