"use server";
import { auth, signIn, signOut } from "@/auth";
import { LoginSchema } from "@/schemas";
import { AuthError } from "next-auth";
import { z } from "zod";

export async function login(
  data: z.infer<typeof LoginSchema>,
  callbackUrl?: string
) {
  const validatedFields = LoginSchema.safeParse(data);
  if (!validatedFields.success) return { error: "Invalid Fields!" };
  const { email, password } = validatedFields.data;
  try {
    const resp = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    return { data: resp, error: "" };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials!", data: null };
        case "AccessDenied":
          return { error: "Access denied!", data: null };
        default:
          return { error: "Something went wrong!", data: null };
      }
    }
    throw error;
  }
}

export async function logOut() {
  await signOut();
}
