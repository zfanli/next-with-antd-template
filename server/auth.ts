import { NextAuthOptions, getServerSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "./db/adapter";
import prisma from "./db/prisma";

export function getServerSessionWithOptions() {
  return getServerSession(authOptions);
}

export const authOptions: NextAuthOptions = {
  session: { strategy: "jwt" },
  adapter: PrismaAdapter(),
  providers: [
    CredentialsProvider({
      credentials: {
        email: {
          label: "email",
          type: "text",
          placeholder: "email here.",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (credentials) {
          const user = await prisma.user.findUnique({
            where: { email: credentials.email },
          });
          if (user) return user;
        }

        return null;
      },
    }),
  ],
};
