import Link from "next/link"
import InputSearch from "@/components/Navbar/InputSearch"
import GithubLogin from "@/components/Navbar/GithubLogin"
import { Auth } from "@/app/libs/auth"

const Navbar = async () => {
    const user = await Auth()
    return (
        <header className="w-full bg-color-accent">
            <div className="p-6 md:flex-row flex-col gap-4 flex justify-between md:items-center">
                <Link href="/" className="text-xl text-bold text-white sm:text-tencer">
                    Accorpora Anime
                </Link>
                <InputSearch />
                <GithubLogin user={user} />
            </div>
        </header>
    )
}

export default Navbar