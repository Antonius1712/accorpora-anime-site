'use client'
import AnimeList from "@/components/AnimeList";
import Header from "@/components/Utils/Header";
import Pagination from "@/components/Utils/Pagination";
import { useEffect, useState } from "react";
import { JikanApi } from "@/app/libs/api"

const Page = () => {
    const [page, setPage] = useState(1)
    const [DataAnime, setDataAnime] = useState([])

    const fetchData = async () => {
        const data = await JikanApi(`top/anime`, `page=${page}`)
        setDataAnime(data)
    }


    useEffect(() => {
        fetchData()
    }, [page])

    return (
        <div className="p-4">
            <Header page={page} />
            <Pagination page={page} maxPage={DataAnime.pagination?.last_visible_page} setPage={setPage} />
            <AnimeList Anime={DataAnime} />
            <Pagination page={page} maxPage={DataAnime.pagination?.last_visible_page} setPage={setPage} />
        </div>
    )
}

export default Page