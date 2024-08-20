import NextAuth from "next-auth/next";
import githubAuth from "next-auth/providers/github"

export const AuthOptions = {
    providers: [
        githubAuth({
            clientId: process.env.GITHUB_CLIENT,
            clientSecret: process.env.GITHUB_SECRET
        })
    ],
    secret: process.env.NEXT_AUTH_SECRET
}

const handler = NextAuth(AuthOptions)

export { handler as GET, handler as POST }