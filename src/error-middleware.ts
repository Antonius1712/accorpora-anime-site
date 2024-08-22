export { default } from "next-auth/middleware"

export const config = {
    matcher: ['/user', '/user/:path*'], // Adjust this to match your routes
};