"use client";

import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";

export default function page() {
  useEffect(() => {
    setTimeout(() => {
      <Link href={"/"} />;
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
