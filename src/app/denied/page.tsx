"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function Page() {
  const { replace } = useRouter();
  useEffect(() => {
    setTimeout(() => {
      replace("/");
    }, 1500);
  }, []);

  return (
    <>
      <h1>Access Denied!</h1>
      <p>Higher level required to access this page</p>
      <p>Redirecting....</p>
    </>
  );
}
