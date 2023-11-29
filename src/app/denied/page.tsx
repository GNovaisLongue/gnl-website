"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function page() {
  const { replace } = useRouter();
  useEffect(() => {
    setInterval(() => {
      console.log("Denied page");
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
