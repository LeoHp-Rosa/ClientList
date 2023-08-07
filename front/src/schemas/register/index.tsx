import { z } from "zod";

export const RegisterSchema = z.object({
  first_name: z.string().min(3).max(12).nonempty("Insira um nome válido"),
  last_name: z.string().min(4).max(15).nonempty("Forneça seu sobrenome"),
  email: z.string().email("Insira um e-mail válido"),
  phone: z
    .string()
    .min(11)
    .max(11)
    .nonempty("Forneça um telefone válido (XX) XXXXX-XXX"),
  password: z
    .string()
    .min(8, "A senha deve ter no mínimo 8 caracteres")
    .nonempty("A senha é obrigatória"),
});

export type RegisterData = z.infer<typeof RegisterSchema>;
