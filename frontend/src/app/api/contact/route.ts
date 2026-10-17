import { NextResponse } from "next/server";
import { contactSchema, type ContactInput } from "@/lib/contact-schema";
import { rateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";

const ENTITIES: Record<string, string> = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ENTITIES[c]);

function toRows(d: ContactInput): [string, string | undefined][] {
  const common: [string, string | undefined][] = [
    ["Nome", d.name],
    ["E-mail", d.email],
    ["Prazo indicativo", d.timeframe],
    ["Descrição", d.description],
  ];
  return d.area === "construcao"
    ? [["Área", "Construção"], ...common, ["Telefone", d.phone], ["Localização", d.location], ["Tipo de obra", d.workType], ["Orçamento indicativo", d.budget]]
    : [["Área", "Visualização 3D"], ...common, ["Empresa", d.company], ["Tipo de projeto", d.projectType], ["Serviço pretendido", d.service]];
}

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (!rateLimit(ip)) {
    return NextResponse.json({ ok: false, message: "Demasiados pedidos. Tente novamente dentro de alguns minutos." }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Pedido inválido." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, message: "Verifique os campos assinalados.", errors: parsed.error.flatten().fieldErrors },
      { status: 422 },
    );
  }
  const data = parsed.data;

  // Submissões em menos de 3 s são tratadas como bots: resposta neutra, sem envio.
  if (data.openedAt && Date.now() - data.openedAt < 3000) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    // Não simulamos sucesso: sem integração configurada o pedido NÃO foi enviado.
    console.error("Envio de contactos não configurado (RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL).");
    return NextResponse.json(
      { ok: false, message: "O envio de pedidos ainda não está configurado. Por favor contacte-nos diretamente." },
      { status: 503 },
    );
  }

  const rows = toRows(data).filter((r): r is [string, string] => Boolean(r[1]));
  const subject = `Novo pedido: ${data.area === "construcao" ? "Construção" : "Visualização 3D"} — ${data.name}`;
  const html = `<table cellpadding="6">${rows
    .map(([k, v]) => `<tr><td><b>${esc(k)}</b></td><td>${esc(v).replace(/\n/g, "<br>")}</td></tr>`)
    .join("")}</table>`;
  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to: [to], reply_to: data.email, subject, html, text }),
    });
    if (!res.ok) {
      console.error("Resend error", res.status, await res.text());
      return NextResponse.json({ ok: false, message: "Não foi possível enviar o pedido. Tente novamente mais tarde." }, { status: 502 });
    }
  } catch (e) {
    console.error("Resend fetch failed", e);
    return NextResponse.json({ ok: false, message: "Não foi possível enviar o pedido. Tente novamente mais tarde." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
