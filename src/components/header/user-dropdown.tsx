"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { User } from "next-auth";
import Image from "next/image";
import { LayoutDashboard, LogOut } from "lucide-react";
import Popover from "@/components/ui/popover";
import clsx from "clsx";

interface Props {
  user: User;
}

export default function UserDropdown({ user }: Props) {
  const { push } = useRouter();
  const { role, name, email, image } = user;
  const [openPopover, setOpenPopover] = useState(false);
  const isAdmin = user?.role == "admin" ? true : false;

  if (!email) return null;

  return (
    <div className="relative inline-block text-left">
      <Popover
        content={
          //  sm:w-56
          <div className="w-full rounded-md bg-white p-2 sm:w-56">
            <div className="p-2">
              {user?.name && (
                <p className="truncate text-sm font-medium text-gray-900">
                  {name} - Role: {role}
                </p>
              )}
              <p className="truncate text-sm text-gray-500">{email}</p>
            </div>
            <button
              className={clsx(
                "relative flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-100",
                { "cursor-not-allowed": !isAdmin }
              )}
              disabled={!isAdmin}
              onClick={() => {
                push("/dashboard");
              }}
            >
              <LayoutDashboard className="h-4 w-4 text-black" />
              <p className="text-sm text-black">Dashboard</p>
            </button>
            <button
              className="relative flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-100"
              onClick={() => {
                signOut({ callbackUrl: "/" });
              }}
            >
              <LogOut className="h-4 w-4 text-black" />
              <p className="text-sm text-black">Logout</p>
            </button>
          </div>
        }
        align="end"
        openPopover={openPopover}
        setOpenPopover={setOpenPopover}
      >
        <button
          onClick={() => setOpenPopover(!openPopover)}
          // sm:h-9 sm:w-9
          className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-gray-300 transition-all duration-75 focus:outline-none active:scale-95 sm:h-9 sm:w-9"
        >
          <Image
            alt={email}
            src={image || `https://avatars.dicebear.com/api/micah/${email}.svg`}
            width={40}
            height={40}
          />
        </button>
      </Popover>
    </div>
  );
}
