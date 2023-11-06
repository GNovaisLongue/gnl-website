import { withAuth, NextRequestWithAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

const USER_ROLES = {
  UNAUTHENTICATED: "unauthenticated",
  AUTHENTICATED: "authenticated",
  ADMIN: "admin",
};

export default withAuth(
  function middleware(req: NextRequestWithAuth) {
    if (
      req.nextUrl.pathname.startsWith("/dashboard") &&
      req.nextauth.token?.role !== "admin"
    ) {
      return NextResponse.rewrite(new URL("/denied", req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: ["/dashboard", "/notes"],
};

export const checkAccess = (requiredRole: string, userRole: string) => {
  // Perform role comparison here and return true if access is allowed, or false if denied
  if (
    (requiredRole === USER_ROLES.UNAUTHENTICATED &&
      userRole === USER_ROLES.UNAUTHENTICATED) ||
    userRole === USER_ROLES.AUTHENTICATED ||
    userRole === USER_ROLES.ADMIN
  ) {
    //req unauth and user is unauth, auth or admin
    return true;
  } else if (
    (requiredRole === USER_ROLES.AUTHENTICATED &&
      userRole === USER_ROLES.AUTHENTICATED) ||
    userRole === USER_ROLES.ADMIN
  ) {
    //req auth and user is auth or admin
    return true;
  } else if (
    requiredRole === USER_ROLES.ADMIN &&
    userRole === USER_ROLES.ADMIN
  ) {
    // req admin and user is admin
    return true;
  }

  return false;
};
