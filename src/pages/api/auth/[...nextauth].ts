import NextAuth, { Session } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    accessToken?: string;
  }
}

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "", 
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "", 
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      // Ensuring accessToken is treated as a string
      if (account?.access_token) {
        token.accessToken = account.access_token as string;
      }
      return token;
    },
    async session({ session, token }) {
      // Ensuring accessToken is a string or undefined, never an empty object
      const jwt = token as JWT; // More explicit type assertion
      session.accessToken = typeof jwt.accessToken === 'string' ? jwt.accessToken : undefined;
      return session;
    },
  },
  debug: process.env.NODE_ENV === "development",
});
