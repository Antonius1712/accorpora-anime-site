import { getServerSession } from "next-auth"
import { AuthOptions } from "@/app/api/auth/[...nextauth]/route"

export const Auth = async () => {
    const data = await getServerSession(AuthOptions)
    return data?.user
}