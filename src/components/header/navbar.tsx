"use client";

import Image from "next/image";
import Link from "next/link";
// import useScroll from "@/lib/hooks/use-scroll";
import { useSignInModal } from "./sign-in-modal";
import UserDropdown from "./user-dropdown";
import { User } from "next-auth";

interface Props {
  user: User | undefined;
}

export default function NavBar({ user }: Props) {
  const { SignInModal, setShowSignInModal } = useSignInModal();
  // const scrolled = useScroll(50);

  return (
    <>
      <SignInModal />
      {/* {  
        scrolled
          ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
          : "bg-white/0"
        }  */}
      <div
      // className={`fixed top-0 w-full flex justify-center z-30 transition-all`}
      >
        {/* <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between w-full"> */}
        {/* <Link href="/" className="flex items-center font-display text-2xl">
            <Image
              src="/public/vercel.svg"
              alt="Test logo"
              width="30"
              height="30"
              className="mr-2 rounded-sm"
            ></Image>
            <p>TEST PROJECT</p>
          </Link> */}
        {user ? (
          <UserDropdown user={user} />
        ) : (
          <button
            className="rounded-full border border-black bg-black px-4 py-2 text-sm text-white transition-all hover:bg-white hover:text-black"
            onClick={() => setShowSignInModal(true)}
          >
            Log In
          </button>
        )}
      </div>
      {/* </div> */}
    </>
  );
}
