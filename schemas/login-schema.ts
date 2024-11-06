import * as z from "zod";

export const LoginSchema = z.object({
  email: z
    .string({
      invalid_type_error: "Should be an email!",
      required_error: "Email is required!",
    })
    .email({
      message: "Email is required!",
    }),
  password: z
    .string({
      required_error: "Password is required!",
    })
    .min(8, {
      message: "Password must be at least 8 characters long!",
    })
    .regex(/[A-Z]/, {
      message: "Password must include at least one uppercase letter!",
    })
    .regex(/[0-9]/, {
      message: "Password must include at least one number!",
    })
    .regex(/[@$!%*?&#]/, {
      message:
        "Password must include at least one special character (@, $, !, %, *, ?, &, or #)!",
    }),
});

export const DialogSchema = z.object({
  password: z
    .string({
      required_error: "Password is required!",
    })
    .min(1, {
      message: "Password is required",
    }),
});
