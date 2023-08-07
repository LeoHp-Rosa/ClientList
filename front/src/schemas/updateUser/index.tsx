import { z } from "zod";

export const EditUserSchema = z.object({
  first_name: z
    .string()
    .optional()
    .transform((e) => (e === "" ? undefined : e)),
  last_name: z
    .string()
    .optional()
    .transform((e) => (e === "" ? undefined : e)),
  email: z
    .string()
    .optional()
    .transform((e) => (e === "" ? undefined : e)),
  phone: z
    .string()
    .optional()
    .transform((e) => (e === "" ? undefined : e)),
  password: z
    .string()
    .optional()
    .transform((e) => (e === "" ? undefined : e)),
});

export type EditUserData = z.infer<typeof EditUserSchema>;
