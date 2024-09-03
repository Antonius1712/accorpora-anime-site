import Link from "next/link"
import InputSearch from "@/components/Navbar/InputSearch"
import GithubLogin from "@/components/Navbar/GithubLogin"
import { Auth } from "@/app/libs/auth"

const Navbar = async () => {
    const user = await Auth()
    return (
        <header className="w-full bg-color-accent">
            <div className="px-6 py-2 md:flex-row flex-col gap-4 flex justify-between md:items-center">
                <Link href="/" className="text-xl text-bold text-white sm:text-center">
                    Accorpora Anime
                </Link>
                {/* <div className="flex flex-col md:flex-row md:items-end gap-8 items-center justify-between sm:justify-start"> */}
                <div className="flex gap-8 items-center justify-center">
                    <InputSearch />
                    <GithubLogin user={user} />
                </div>
            </div>
        </header>
    )
}

export default Navbar