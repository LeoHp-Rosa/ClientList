import { z } from "zod";

export const NewContactSchema = z.object({
  first_name: z.string().min(3).max(12).nonempty("Insira um nome válido"),
  last_name: z.string().min(5).max(15).nonempty("Forneça seu sobrenome"),
  email: z.string().email("Insira um e-mail válido"),
  phone: z
    .string()
    .min(11)
    .max(11)
    .nonempty("Forneça um telefone válido (XX) XXXXX-XXX"),
});

export type NewContactData = z.infer<typeof NewContactSchema>;
