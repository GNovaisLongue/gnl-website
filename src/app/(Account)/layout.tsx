import { Suspense } from "react";

import Nav from "@/components/ui/nav";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* <Suspense fallback="...loading">
        <Nav />
      </Suspense> */}
      <div>{children}</div>
    </section>
  );
}
