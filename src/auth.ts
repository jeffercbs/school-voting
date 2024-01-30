import PostgresAdapter from "@auth/pg-adapter";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { Pool } from "pg";

const pool = new Pool({
  host: "localhost",
  port: 5432,
  password: "65765750",
  user: "jeffercbs",
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: PostgresAdapter(pool),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
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
