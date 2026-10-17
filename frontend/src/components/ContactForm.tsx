"use client";
import Link from "next/link";
import { useRef, useState, type FormEvent, type ReactNode } from "react";

type Area = "construcao" | "visualizacao";
type Status = "idle" | "sending" | "success" | "error";

const inputCls = "mt-1 w-full border border-bruma bg-white/60 px-3 py-2.5 text-carvao";

function Field({ id, label, optional, error, children }: { id: string; label: string; optional?: boolean; error?: string; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm text-carvao">
        {label} {optional && <span className="text-mineral">(opcional)</span>}
      </label>
      {children}
      {error && <p id={`${id}-erro`} className="mt-1 text-sm text-red-800">{error}</p>}
    </div>
  );
}

export function ContactForm({ initialArea = "construcao", lockArea = false }: { initialArea?: Area; lockArea?: boolean }) {
  const [area, setArea] = useState<Area>(initialArea);
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const openedAt = useRef(Date.now());

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload: Record<string, unknown> = { area, openedAt: openedAt.current, consent: fd.get("consent") === "on" };
    fd.forEach((v, k) => { if (k !== "consent" && typeof v === "string") payload[k] = v; });

    setStatus("sending"); setErrors({}); setMessage("");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const json = (await res.json()) as { ok: boolean; message?: string; errors?: Record<string, string[]> };
      if (res.ok && json.ok) {
        setStatus("success");
        form.reset();
        return;
      }
      if (json.errors) setErrors(Object.fromEntries(Object.entries(json.errors).map(([k, v]) => [k, v[0]])));
      setMessage(json.message ?? "Não foi possível enviar o pedido.");
      setStatus("error");
    } catch {
      setMessage("Sem ligação ao servidor. Verifique a sua ligação e tente novamente.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="border border-carvao p-8">
        <p className="font-display text-3xl text-carvao">Pedido recebido.</p>
        <p className="mt-3 text-mineral">Obrigado. Vamos analisar a sua mensagem e responder para o e-mail indicado.</p>
        <button type="button" className="mt-6 text-sm underline underline-offset-4" onClick={() => setStatus("idle")}>Enviar outro pedido</button>
      </div>
    );
  }

  const err = (k: string) => errors[k];
  const aria = (k: string) => ({ "aria-invalid": err(k) ? true : undefined, "aria-describedby": err(k) ? `${k}-erro` : undefined });

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5" key={area}>
      {!lockArea && (
        <fieldset>
          <legend className="text-sm text-carvao">Que serviço pretende?</legend>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {([["construcao", "Construção"], ["visualizacao", "Visualização 3D"]] as const).map(([v, l]) => (
              <label key={v} className={`cursor-pointer border px-4 py-3 text-center text-sm has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-areia-escura ${area === v ? "border-carvao bg-carvao text-osso" : "border-bruma"}`}>
                <input type="radio" name="area-escolha" className="sr-only" checked={area === v} onChange={() => setArea(v)} />
                {l}
              </label>
            ))}
          </div>
        </fieldset>
      )}

      <div className="grid gap-5 md:grid-cols-2">
        <Field id="name" label="Nome" error={err("name")}><input id="name" name="name" autoComplete="name" required className={inputCls} {...aria("name")} /></Field>
        <Field id="email" label="E-mail" error={err("email")}><input id="email" name="email" type="email" autoComplete="email" required className={inputCls} {...aria("email")} /></Field>
        {area === "construcao" ? (
          <>
            <Field id="phone" label="Telefone" optional error={err("phone")}><input id="phone" name="phone" type="tel" autoComplete="tel" className={inputCls} /></Field>
            <Field id="location" label="Localização da obra" optional><input id="location" name="location" className={inputCls} /></Field>
            <Field id="workType" label="Tipo de obra" optional><input id="workType" name="workType" placeholder="Ex.: moradia nova, remodelação" className={inputCls} /></Field>
            <Field id="timeframe" label="Prazo indicativo" optional><input id="timeframe" name="timeframe" className={inputCls} /></Field>
            <Field id="budget" label="Orçamento indicativo" optional><input id="budget" name="budget" className={inputCls} /></Field>
          </>
        ) : (
          <>
            <Field id="company" label="Empresa" optional><input id="company" name="company" autoComplete="organization" className={inputCls} /></Field>
            <Field id="projectType" label="Tipo de projeto" optional><input id="projectType" name="projectType" placeholder="Ex.: moradia, edifício, interior" className={inputCls} /></Field>
            <Field id="service" label="Serviço pretendido" optional>
              <select id="service" name="service" className={inputCls} defaultValue="">
                <option value="">Ainda não sei</option>
                <option>Renders de exteriores</option>
                <option>Renders de interiores</option>
                <option>Animação / vídeo</option>
                <option>Vários dos anteriores</option>
              </select>
            </Field>
            <Field id="timeframe" label="Prazo indicativo" optional><input id="timeframe" name="timeframe" className={inputCls} /></Field>
          </>
        )}
      </div>

      <Field id="description" label="Descrição do projeto" error={err("description")}>
        <textarea id="description" name="description" rows={5} required className={inputCls} {...aria("description")} />
      </Field>
      {area === "visualizacao" && <p className="text-sm text-mineral">Pode enviar plantas ou referências depois do primeiro contacto.</p>}

      {/* Honeypot: invisível para pessoas, tentador para bots */}
      <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label>Não preencha<input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm text-mineral">
          <input type="checkbox" name="consent" className="mt-1 h-4 w-4" {...aria("consent")} />
          <span>Aceito que a CS Group trate os meus dados para responder a este pedido, conforme a <Link href="/privacidade" className="underline underline-offset-2">política de privacidade</Link>.</span>
        </label>
        {err("consent") && <p id="consent-erro" className="mt-1 text-sm text-red-800">{err("consent")}</p>}
      </div>

      <div aria-live="polite">{status === "error" && <p role="alert" className="border border-red-800 p-3 text-sm text-red-800">{message}</p>}</div>

      <button type="submit" disabled={status === "sending"} className="border border-carvao bg-carvao px-8 py-3 text-osso transition-colors duration-base hover:bg-areia-escura hover:border-areia-escura disabled:opacity-60">
        {status === "sending" ? "A enviar…" : area === "construcao" ? "Enviar pedido de orçamento" : "Enviar pedido de orçamento 3D"}
      </button>
    </form>
  );
}
