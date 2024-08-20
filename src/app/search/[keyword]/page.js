import AnimeList from "@/components/AnimeList"
import { JikanApi } from "@/app/libs/api"

const SearchPage = async ({ params }) => {
    const data = await JikanApi(`anime`, `q=${params.keyword}`)
    return (
        <AnimeList Anime={data} />
    )
}

export default SearchPage