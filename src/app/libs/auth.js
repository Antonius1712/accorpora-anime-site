import { getServerSession } from "next-auth"
// import { AuthOptions } from "@/app/api/auth/[...nextauth]/route"
import githubAuth from "next-auth/providers/github"

const AuthOptions = {
    providers: [
        githubAuth({
            clientId: process.env.GITHUB_CLIENT,
            clientSecret: process.env.GITHUB_SECRET
        })
    ],
    secret: process.env.NEXT_AUTH_SECRET
}

export const Auth = async () => {
    const data = await getServerSession(AuthOptions)
    return data?.user
}