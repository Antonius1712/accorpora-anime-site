'use client'

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = () => {
    const searchRef = useRef()
    const router = useRouter()

    const handleSearch = (event) => {
        event.preventDefault();
        if (event.key === 'Enter' || event.type === 'click') {
            if (searchRef.current.value !== '') {
                router.push(`/search/${searchRef.current.value}`)
            }
        }
    }

    return (
        <div className="w-full flex items-center justify-center">
            <input className="p-2 rounded-md text-sm w-full" onKeyUp={handleSearch} placeholder="cari anime.." ref={searchRef} />
            <button className="absolute top-3 end-2 opacity-50" onClick={handleSearch}>
                <MagnifyingGlass size={16} />
            </button>
        </div>
    )
}

export default InputSearch