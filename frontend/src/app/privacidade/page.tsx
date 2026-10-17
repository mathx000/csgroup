import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { TextoPrivacidade } from "@/components/sections/privacidade/TextoPrivacidade";

export const metadata: Metadata = { title: "Política de privacidade", alternates: { canonical: "/privacidade" }, robots: { index: true, follow: true } };

export default function Privacidade() {
  return (
    <>
      <PageIntro title="Política de privacidade." />
      <TextoPrivacidade />
    </>
  );
}
