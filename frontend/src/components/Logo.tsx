import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site";

export function Logo({ light = false }: { light?: boolean }) {
  const color = light ? "text-osso" : "text-carvao";
  const lineColor = light ? "bg-osso/75" : "bg-carvao/75";

  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} — ${siteConfig.signature}`}
      className={`inline-flex shrink-0 items-center gap-2 ${color}`}
    >
      <span className="relative h-12 w-12 shrink-0 font-display font-light leading-none" aria-hidden="true">
        <Image
          src="/brand/monograma-cs-branco.png"
          alt=""
          aria-hidden="true"
          width={768}
          height={863}
          priority
          className={`absolute left-0 top-0 h-12 w-auto ${light ? "" : "brightness-0"}`}
        />
      </span>
      <span className="flex w-[clamp(8.5rem,20vw,15rem)] flex-col items-center">
        <svg viewBox="0 0 120 18" className="h-[15px] w-[112px]" fill="none" aria-hidden="true">
          <path d="M2 16.5H48M72 16.5H118M57 16.5V2M63 16.5V0M69 16.5V5" stroke="currentColor" strokeWidth="1" />
        </svg>
        <span className="whitespace-nowrap text-[0.68rem] font-light tracking-[0.48em]">CS GROUP</span>
        <span className={`my-1 h-px w-10 ${lineColor}`} aria-hidden="true" />
        <span className="whitespace-nowrap text-[0.34rem] font-light tracking-[0.16em] sm:text-[0.39rem]">
          {siteConfig.signature.toLocaleUpperCase("pt-PT")}
        </span>
      </span>
    </Link>
  );
}
