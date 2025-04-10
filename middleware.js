import { getToken } from "next-auth/jwt";
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export async function middleware(request) {
  const pathname = request.nextUrl.pathname;

  const publicApiPrefixes = [
    "/api/products",
    "/api/brands",
    "/api/categories",
    "/api/banners",
    "/api/auth",
  ];

  const isPublicApiRoute = publicApiPrefixes.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );

  const token = await getToken({ req: request });
  const isAuthenticated = !!token;

  if (isPublicApiRoute) {
    return NextResponse.next();
  }

  const protectedRoutes = ["/dashboard", "/checkout", "/cart", "/api/"];

  const isProtectedRoute = protectedRoutes.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );

  if (isProtectedRoute && !isAuthenticated) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("callbackUrl", encodeURI(request.url));
    return NextResponse.redirect(loginUrl);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/checkout", "/cart", "/api/:path*"],
};
