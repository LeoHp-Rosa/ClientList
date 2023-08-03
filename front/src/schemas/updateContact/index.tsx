import { z } from "zod";

export const UpdateContactSchema = z.object({
  first_name: z.string().min(3).max(12).optional(),
  last_name: z.string().min(5).max(15).optional(),
  email: z.string().email().optional(),
  phone: z.string().min(11).max(11).optional(),
});

export type UpdateContactData = z.infer<typeof UpdateContactSchema>;
