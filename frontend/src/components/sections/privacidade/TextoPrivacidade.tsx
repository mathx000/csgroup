import { siteConfig } from "@/data/site";

// MODELO PROVISÓRIO. Deve ser revisto e completado por quem tem competência jurídica (RGPD).
export function TextoPrivacidade() {
  return (
    <div className="mx-auto max-w-2xl space-y-6 px-5 pb-16 leading-relaxed text-mineral sm:px-6 md:pb-24">
      <p><strong className="text-carvao">Aviso:</strong> texto provisório, a rever antes da publicação.</p>
      <h2 className="font-display text-3xl text-carvao">Responsável pelo tratamento</h2>
      <p>{siteConfig.legalName ?? "[Denominação social]"}, NIF {siteConfig.contact.nif ?? "[NIF]"}, {siteConfig.contact.address ?? "[morada]"}, {siteConfig.contact.email ?? "[e-mail]"}.</p>
      <h2 className="font-display text-3xl text-carvao">Dados recolhidos e finalidade</h2>
      <p>Os dados indicados nos formulários (nome, e-mail e, se fornecidos, telefone, empresa e descrição do projeto) são usados apenas para responder ao seu pedido de orçamento.</p>
      <h2 className="font-display text-3xl text-carvao">Fundamento e conservação</h2>
      <p>O tratamento baseia-se no seu consentimento e em diligências pré-contratuais. Prazo de conservação: [a definir].</p>
      <h2 className="font-display text-3xl text-carvao">Os seus direitos</h2>
      <p>Pode pedir acesso, retificação, apagamento, limitação, oposição e portabilidade dos dados, e apresentar reclamação à CNPD (cnpd.pt).</p>
      <h2 className="font-display text-3xl text-carvao">Cookies</h2>
      <p>Este site não usa cookies de análise ou marketing. Se forem adicionadas ferramentas de medição, será necessário um banner de consentimento antes do seu carregamento.</p>
    </div>
  );
}
