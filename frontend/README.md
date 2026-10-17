# CS Group — website

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS 3 · Node.js 20+

## Executar
```bash
npm install
cp .env.example .env.local   # preencher (ver abaixo)
npm run dev                  # http://localhost:3000
npm run typecheck && npm run build && npm start   # verificação de produção
```

## Onde mexer
| O quê | Ficheiro |
|---|---|
| Contactos, NIF, alvará, redes sociais, `demoMode` | `src/data/site.ts` |
| Imagens e vídeos (trocar placeholders) | `src/data/media.ts` + ficheiros em `public/media/` |
| Projetos do portefólio (novo projeto = novo objeto no array) | `src/data/projects.ts` |
| Serviços, processos, FAQ | `src/data/services.ts` |
| Cores e tipos de letra | `tailwind.config.ts` |
| Logótipo e slogan | `src/components/Logo.tsx` |
| Secções de cada página (uma por ficheiro) | `src/components/sections/<página>/*.tsx`; as páginas em `src/app/**/page.tsx` apenas as compõem |

## Formulários (envio real)
`POST /api/contact` valida com Zod no servidor, tem honeypot, tempo mínimo e limite de pedidos (em memória).
Envia por [Resend](https://resend.com). Defina em `.env.local` (e no alojamento):
`RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` (domínio verificado no Resend), `NEXT_PUBLIC_SITE_URL`.
Sem estas variáveis o formulário devolve erro 503 claro; nunca simula sucesso.
Para integrar um CRM, ligar na função `POST` de `src/app/api/contact/route.ts`.

## Conteúdo demonstrativo
Todos os projetos continuam demonstrativos (`isDemo: true`). As fotografias e visualizações são material ilustrativo de stock e não representam trabalhos da CS Group. Os ficheiros estão em `public/media/` e são usados através de `src/data/media.ts`.

Fotografias, renders e vídeo de fundo fornecidos por colaboradores do [Pexels](https://www.pexels.com/), sob a [licença Pexels](https://www.pexels.com/license/). A atribuição não é obrigatória, mas é recomendada:
- [Jan van der Wolf — andaimes num edifício](https://www.pexels.com/photo/scaffolding-on-urban-building-facade-38798439/)
- [Niklas Jeromin — trabalhadores numa obra](https://www.pexels.com/photo/construction-workers-on-a-building-site-12314551/)
- [Maverick Frame — moradia com jardim](https://www.pexels.com/photo/luxurious-modern-villa-with-tropical-garden-38279917/)
- [Rodrigo Neto — moradia minimalista](https://www.pexels.com/photo/modern-minimalist-house-design-exterior-view-30484316/)
- [Damir K — edifício residencial](https://www.pexels.com/photo/balconies-of-modern-residential-building-21071043/)
- [SHOX ART — conjunto residencial](https://www.pexels.com/photo/modern-apartment-building-with-green-courtyard-31656168/)
- [Salman Saqib — sala de estar](https://www.pexels.com/photo/modern-minimalist-living-room-interior-design-28456458/)
- [Bilal Mansuri — render 3D de moradia](https://www.pexels.com/photo/a-3d-rendering-of-a-modern-house-13203191/)
- [Pușcaș Adryan — render 3D de moradia mediterrânica](https://www.pexels.com/photo/modern-mediterranean-villa-with-rooftop-patio-35128543/)
- [Mahmoud Ramadan — render 3D de sala](https://www.pexels.com/photo/minimalist-pastel-living-room-interior-design-36444541/)
- [CHRIS KROLAK — vídeo aéreo de bairro residencial](https://www.pexels.com/video/drone-footage-over-a-residential-area-in-city-11807136/)

Ao publicar: substituir o material ilustrativo por conteúdo real autorizado, pôr `isDemo: false` apenas nos projetos reais e `demoMode: false`.
Para trocar o vídeo, substituir `public/media/hero-cidade.mp4` e o poster `public/media/hero-cidade.jpg`, mantendo os caminhos em `src/data/media.ts`.

## Publicar
Vercel (recomendado): importar o repositório, definir as variáveis de ambiente e `NEXT_PUBLIC_SITE_URL` com o domínio final.

## Em falta antes de publicar
- Serviços realmente prestados e zonas de atuação (confirmar `services.ts`).
- Denominação social, NIF, morada, telefone, e-mail, alvará.
- Logótipo vetorial; fotografias, vídeos e renders reais com direitos de utilização.
- Texto de privacidade revisto juridicamente (RGPD) e prazo de conservação.
- Banner de cookies só se forem adicionadas ferramentas de análise ou marketing.
- Página "Empresa": história, equipa, certificações (só se confirmadas).

## Testado
Typecheck e build de produção sem erros; 12 rotas respondem com 200/404 corretos; sitemap e robots; API de contacto (validação, honeypot, rate limit, 503 sem integração).
Não testado: envio real de e-mail (requer credenciais), aspeto visual em browsers, Core Web Vitals, leitor de ecrã, vídeo do hero (sem ficheiro).
