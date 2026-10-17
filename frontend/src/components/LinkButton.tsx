import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "solid" | "outline" | "light" | "ghost-light";
const styles: Record<Variant, string> = {
  solid: "bg-carvao text-osso border-carvao hover:bg-areia-escura hover:border-areia-escura",
  outline: "bg-transparent text-carvao border-carvao hover:bg-carvao hover:text-osso",
  light: "bg-osso text-carvao border-osso hover:bg-areia hover:border-areia",
  "ghost-light": "bg-transparent text-osso border-osso/70 hover:bg-osso hover:text-carvao",
};

export function LinkButton({ href, children, variant = "solid", className = "" }: { href: string; children: ReactNode; variant?: Variant; className?: string }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center border px-6 py-3 text-sm tracking-wide transition-colors duration-base ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
