import { z } from "zod";

export const UpdateContactSchema = z
  .object({
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
      .union([z.string().length(0), z.string().min(11)])
      .optional()
      .transform((e) => (e === "" ? undefined : e)),
  })
  .partial();

export type UpdateContactData = z.infer<typeof UpdateContactSchema>;
