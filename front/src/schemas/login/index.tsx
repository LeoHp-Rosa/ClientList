import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email("Insira um e-mail válido"),
  password: z
    .string()
    .min(8, "A senha deve ter no mínimo 8 caracteres")
    .nonempty("A senha é obrigatória"),
});

export type LoginData = z.infer<typeof LoginSchema>;
