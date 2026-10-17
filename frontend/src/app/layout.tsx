import type { Metadata, Viewport } from "next";
import "@fontsource/cormorant-garamond/300.css";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource-variable/jost";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "CS Group | Construção e visualização arquitetónica 3D", template: "%s | CS Group" },
  description: siteConfig.description,
  openGraph: { type: "website", locale: "pt_PT", siteName: siteConfig.name, title: "CS Group | Construção e visualização arquitetónica 3D", description: siteConfig.description },
  alternates: { canonical: "/" },
};
export const viewport: Viewport = { themeColor: "#f6f4ef" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const c = siteConfig.contact;
  return (
    <html lang="pt-PT">
      <body>
        <a href="#conteudo" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-carvao focus:px-4 focus:py-2 focus:text-osso">Saltar para o conteúdo</a>
        <Header />
        <main id="conteudo">{children}</main>
        <Footer />
        <JsonLd data={{
          "@context": "https://schema.org",
          "@type": "GeneralContractor",
          name: siteConfig.legalName ?? siteConfig.name,
          url: siteConfig.url,
          description: siteConfig.description,
          areaServed: "PT",
          ...(c.email && { email: c.email }),
          ...(c.phone && { telephone: c.phone }),
          ...(c.address && { address: c.address }),
        }} />
      </body>
    </html>
  );
}
