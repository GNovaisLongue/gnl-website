import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";

import Navbar from "../header/navbar";
import GlobalNav from "./global-nav";
import { PrimeReactProvider } from "primereact/api";
import Tailwind from "primereact/passthrough/tailwind";

export default async function Nav() {
  const session = await getServerSession(authOptions);
  // return <Navbar session={session} />;
  return (
    <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
      <GlobalNav headerTitle="/Work Dir" session={session} />
    </PrimeReactProvider>
  );
}
