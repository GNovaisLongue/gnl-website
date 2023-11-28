"use client";

import { RedirectType, redirect } from "next/navigation";
import React, { useEffect } from "react";

export default function page() {
  useEffect(() => {
    setInterval(() => {
      console.log("Denied page");
      redirect("/profile", RedirectType.replace); //not wortking for some reason
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
