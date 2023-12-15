import { auth, authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth/next";

import Navbar from "../header/navbar";
import GlobalNav from "./global-nav";

export default async function Nav() {
  const { getUser } = await auth();
  const session = getUser();
  // return <Navbar session={session} />;
  return <GlobalNav headerTitle="/Work Dir" user={session?.user} />;
}
