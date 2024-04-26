"use client";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { signIn, signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

export const page = async () => {
  const pathname = usePathname();

  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8 h-screen lg:pl-72">
      <div className="mx-auto max-w-2wl text-center">
        <h2 className="mt-2 text-4xl font-bold tracking-light text-gray-900 md:text-6xl">
          <p>{pathname}</p>
        </h2>
      </div>
    </div>
  );

  // if (status === "loading") return <h1>Loading...</h1>;
  // {    status === "loading" && <h1>Loading...</h1>  }
  // {status === "unauthenticated" && <Link href={"dots-page"} />;}
  //   if (status === "authenticated") {
  //     return (
  //       <div className="bg-gray-500 px-6 py-24 sm:py-32 lg:px-8 h-screen lg:pl-72">
  //         <div className="mx-auto max-w-2wl text-center">
  //           <h2 className="mt-2 text-4xl font-bold tracking-light text-gray-900 md:text-6xl">
  //             <p>{pathname}</p>
  //             <p>Hello '{data.user?.name}'</p>
  //             <button onClick={() => signOut()}>Sign out</button>
  //           </h2>
  //         </div>
  //       </div>
  //     );
  //   }
  //   return (
  //     <div className="bg-gray-500 px-6 py-24 sm:py-32 lg:px-8 h-screen lg:pl-72">
  //       <div className="mx-auto max-w-2wl text-center">
  //         <button
  //           onClick={() => {
  //             signIn("google");
  //           }}
  //         >
  //           Sign in with Google
  //         </button>
  //       </div>
  //     </div>
  //   );
};

export default page;
