import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";

async function getUserToken({
  user,
  password,
}: {
  user: string;
  password: string;
}): Promise<any> {
  try {
    const res = await fetch("http://localhost:3000/v1/auth/signin", {
      method: "POST",
      body: JSON.stringify({
        user,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    return await res.json();
  } catch (error) {
    throw new Error("Error getting user");
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    Credentials({
      name: "credentials",
      credentials: {},
      async authorize(credentials, request) {
        const parsedCredentials = z
          .object({ user: z.string(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const u = await getUserToken(parsedCredentials.data);

          if (!u) return null;
          return u;
        }

        return null;
      },
    }),
  ],
  secret: process.env.SECRET,
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLogged = auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");

      if (isOnDashboard) {
        if (isLogged) {
          return true;
        }
        return false;
      } else if (isLogged) {
        return Response.redirect(new URL("/dashboard", nextUrl));
      }
      return true;
    },
  },
});
