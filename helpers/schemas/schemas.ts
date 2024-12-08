import { z } from "zod";

export const LoginSchema = z.object({
    email: z
        .string()
        .email()
        .min(1, "Email is required")
        .max(100, "Email is too long"),
    password: z
        .string()
        .min(1, "Password is required")
        .max(50, "Password is too long"),
})

export type LoginType = z.infer<typeof LoginSchema>