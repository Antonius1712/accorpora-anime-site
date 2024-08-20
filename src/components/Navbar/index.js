import Link from "next/link"
import InputSearch from "@/components/Navbar/InputSearch"
const Navbar = () => {
    return (
        <header className="bg-yellow-500 w-full">
            <div className="p-6 md:flex-row flex-col gap-4 flex justify-between">
                <Link href="/" className="text-xl text-bold text-white sm:text-tencer">
                    Accorpora Anime
                </Link>
                <InputSearch/>
            </div>
        </header>
    )
}

export default Navbar