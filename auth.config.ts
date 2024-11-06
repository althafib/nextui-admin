import CredentialProvider from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";
import { LoginSchema } from "./schemas";

export default {
  // secret: "$3cR7!",
  trustHost: true,
  // jwt: {
  //   async encode({ salt, secret, token, maxAge }) {
  //     // console.log({ salt, secret, token, maxAge });

  //     const apiToken: string = (await storageService.loadString(
  //       storageKeys.ACCESS_TOKEN
  //     )) as string;
  //     return apiToken;
  //   },
  //   async decode({ salt, secret, token }) {
  //     const _secret = new TextEncoder().encode("$3cR7!");
  //     const { payload, protectedHeader } = await jose.jwtVerify(
  //       token || "",
  //       _secret
  //     );

  //     return {
  //       ...payload,
  //     };
  //   },
  // },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  jwt: {
    maxAge: 60 * 60 * 24 * 30,
  },
  callbacks: {
    // async signIn({ user }) {
    // 	// this will be triggered before creating session and after signIn
    // 	if (!user.active) return false;
    // 	return true;
    // },
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
  providers: [],
} satisfies NextAuthConfig;
