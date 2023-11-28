import NextAuth, {
  AuthOptions,
  RequestInternal,
  User,
  getServerSession,
} from "next-auth";
import GoogleProvider, { GoogleProfile } from "next-auth/providers/google";
import GitHubProvider, { GithubProfile } from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

import {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next";
import { unstable_noStore } from "next/cache";
import { Adapter } from "next-auth/adapters";
import { DrizzleAdapter } from "@auth/drizzle-adapter";

import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

async function updateDrizzleUser(email: string, role: string) {
  await db.update(users).set({ role: role }).where(eq(users.email, email));
}

//https://github.com/nextauthjs/next-auth/discussions/6245
export const authOptions: AuthOptions = {
  adapter: DrizzleAdapter(db) as Adapter, //https://github.com/nextauthjs/next-auth/issues/6106
  session: {
    strategy: "jwt",
  },
  providers: [
    // GitHubProvider({
    //   clientId: process.env.GITHUB_ID as string,
    //   clientSecret: process.env.GITHUB_SECRET as string,
    //   profile(profile: GithubProfile) {
    //     return profile;
    //   },
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      profile(profile: GoogleProfile) {
        return {
          ...profile,
          role: profile.role ?? "user",
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture ?? "/favicon.ico",
        };
      },
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "your username",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "your password",
        },
      },
      async authorize(
        credentials: Record<"username" | "password", string> | undefined,
        req: Pick<RequestInternal, "headers" | "body" | "query" | "method">
      ) {
        let user = {
          id: "1234",
          name: "Test",
          email: "test@hotmail.com",
          password: "1234",
          role: "user",
          image: "/favicon.ico",
        };
        //name.split(' ').map(name => name[0]).join('').toUpperCase(),
        if (
          credentials?.username === user.name &&
          credentials?.password === user.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      const dbUser = await db.query.users.findFirst({
        where: (users, { eq }) => eq(users.email, token.email!),
      });

      if (!dbUser) {
        throw new Error("no user with email found"); //something went wrong if stops here
      }

      if (dbUser) token.role = user?.role;
      //my acc - temp solution until proper changes
      if (token?.email === process.env.PERSONAL_EMAIL) {
        token.role = "admin";
      } else {
        token.role = "user";
      }
      await updateDrizzleUser(dbUser.email!, token.role!);

      return token;
    },
    async session({ session, token }) {
      if (token) {
        if (session?.user && token?.sub && token?.email) {
          session.user.id = token.sub as string;
          session.user.role = token.role;
          session.user.name = token.name;
          session.user.email = token.email;
          session.user.image = token.picture;
        }
      }

      console.log("session-token", token);
      console.log("session-session", session);
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

// Use it in server contexts
export async function auth(
  ...args:
    | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  unstable_noStore();
  const session = await getServerSession(...args, authOptions);
  return {
    getUser: () => session?.user && { user: session?.user },
  };
}
