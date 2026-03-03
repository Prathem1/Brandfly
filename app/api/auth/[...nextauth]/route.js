import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"; // ✅ important
import { Pool } from "pg";
import bcrypt from "bcryptjs";

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT || 5432),
});

async function findUserByEmail(email) {
  const res = await pool.query("SELECT * FROM users WHERE email=$1", [email]);
  return res.rows[0] || null;
}

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        if (!email || !password) return null;

        const user = await findUserByEmail(email);
        if (!user) return null;

        const valid = await bcrypt.compare(password, user.password);
        if (!valid) return null;

        if (!user.is_verified) throw new Error("ACCOUNT_NOT_VERIFIED");

        return {
          id: user.id,
          email: user.email,
          is_verified: user.is_verified,
          is_admin: user.is_admin, // include is_admin for admin check
        };
      },
    }),
  ],
  session: { strategy: "jwt" },
  pages: { signIn: "/login" },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.isVerified = user.is_verified;
        token.isAdmin = user.is_admin;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.isVerified = token.isVerified;
      session.user.isAdmin = token.isAdmin;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
