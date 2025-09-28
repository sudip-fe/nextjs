export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/protected/:path*"], // only protect these routes
};
