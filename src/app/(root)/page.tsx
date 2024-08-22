import Image from "next/image";
import AnimeList from "@/components/AnimeList";
import Section from "@/components/Utils/Section"
import { JikanApi, NestedApi } from "@/app/libs/api"

export default async function Home() {
    const TopAnime = await JikanApi('top/anime', 'limit=10')
    const RecommendedAnime = { data: await NestedApi('recommendations/anime', 'limit=10') }

    // console.log(RecommendedAnime);

    return (
        <div className="p-4">
            <Section title={'Anime Populer'} routeTo={'/populer'} />
            <AnimeList Anime={TopAnime} />

            <Section title={'Anime Rekomendasi'} routeTo={null} />
            <AnimeList Anime={RecommendedAnime} />
        </div>
    );
}
