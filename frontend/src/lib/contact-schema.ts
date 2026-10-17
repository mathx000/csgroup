import { z } from "zod";

const optional = (max: number) =>
  z.string().trim().max(max).optional().transform((v) => (v ? v : undefined));

const base = {
  name: z.string().trim().min(2, "Indique o seu nome.").max(120),
  email: z.string().trim().email("Indique um e-mail válido.").max(200),
  description: z.string().trim().min(10, "Descreva brevemente o projeto (mínimo 10 caracteres).").max(4000),
  timeframe: optional(120),
  consent: z.literal(true, { errorMap: () => ({ message: "É necessário aceitar a política de privacidade." }) }),
  // Anti-spam: honeypot (tem de vir vazio) e momento de abertura do formulário
  website: z.string().max(0).optional(),
  openedAt: z.number().optional(),
};

export const constructionSchema = z.object({
  ...base,
  area: z.literal("construcao"),
  phone: optional(40),
  location: optional(160),
  workType: optional(120),
  budget: optional(120),
});

export const visualizationSchema = z.object({
  ...base,
  area: z.literal("visualizacao"),
  company: optional(160),
  projectType: optional(120),
  service: optional(120),
});

export const contactSchema = z.discriminatedUnion("area", [constructionSchema, visualizationSchema]);
export type ContactInput = z.infer<typeof contactSchema>;
