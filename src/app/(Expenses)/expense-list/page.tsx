"use client";

import { usePathname } from "next/navigation";

export const page = () => {
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
};

export default page;
