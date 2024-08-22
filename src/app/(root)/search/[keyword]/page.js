import AnimeList from "@/components/AnimeList"
import { JikanApi } from "@/app/libs/api"

const SearchPage = async ({ params }) => {
    const data = await JikanApi(`anime`, `q=${params.keyword}`)
    return (
        <div className="py-4">
            <b className="text-2xl text-color-accent p-4">
                Hasil pencarian untuk {params.keyword} ...
            </b>
            <AnimeList Anime={data} />
        </div>
    )
}

export default SearchPage