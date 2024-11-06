import NextAuth, { type DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialProvider from "next-auth/providers/credentials";
import { LoginSchema } from "./schemas";
import { User } from "./types/user.type";

type ExtendedUser = DefaultSession["user"] & User;

declare module "next-auth/jwt" {
  interface JWT {
    role?: "Admin" | "User";
    uid?: string;
    id?: string;
    active?: boolean;
    accessToken: string;
    refreshToken: string;
    sessionId: string;
    tokenExpiry: string;
  }
}

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }

  interface User {
    role?: "Admin" | "User";
    uid?: string;
    id?: string;
    active?: boolean;
    accessToken: string;
    refreshToken: string;
    sessionId: string;
    tokenExpiry: string;
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  trustHost: true,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  jwt: {
    maxAge: 60 * 60 * 24 * 30,
  },
  callbacks: {
    async session({ token, session }) {
      if (token.id && session.user) session.user.id = token.id;
      if (token.role && session.user) session.user.role = token.role;
      if (token.uid && session.user) session.user.uid = token.uid;
      if (token.active && session.user) session.user.active = token.active;
      if (token.accessToken && session.user)
        session.user.accessToken = token.accessToken;
      if (token.refreshToken && session.user)
        session.user.refreshToken = token.refreshToken;
      if (token.sessionId && session.user)
        session.user.sessionId = token.sessionId;
      if (token.tokenExpiry && session.user)
        session.user.tokenExpiry = token.tokenExpiry;

      return session;
    },
    async jwt({ token, user, account, profile, session, trigger }) {
      if (user) {
        token.role = user.role;
        token.uid = user.uid;
        token.id = user.id?.toString();
        token.active = user.active;
        token.email = user.email;
        token.name = user.name;
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.sessionId = user.sessionId;
        token.tokenExpiry = user.tokenExpiry;
      }
      return token;
    },
  },
  providers: [
    CredentialProvider({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);
        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          return {
            ...{ name: "Althaf", email },
            accessToken: "data.token",
            refreshToken: "data.refresh_token",
            sessionId: "data.session_id",
            tokenExpiry: "data.token_expiry",
          };
        }
        return null;
      },
    }),
  ],
});
