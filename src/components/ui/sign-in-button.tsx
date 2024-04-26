import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { signIn, signOut, useSession } from "next-auth/react";

export default async function SignInButton() {
  // const { data: session } = useSession();
  const session = await getServerSession(authOptions);

  return (
    <div>
      {!session ? (
        <button onClick={() => signIn("google")}>Sign in with Google!</button>
      ) : (
        <div>
          <p>Welcome, {session.user?.name}</p>
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      )}
    </div>
  );
}
