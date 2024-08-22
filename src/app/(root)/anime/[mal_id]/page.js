import Image from "next/image"
import { JikanApi } from "@/app/libs/api"

const SingleAnime = async ({ params: { mal_id } }) => {
    const { data } = await JikanApi(`anime/${mal_id}`)
    console.log({ data });
    return (
        <div className="pt-4 px-4">
            <h3 className="text-2xl text-color-primary">
                {data.title}
            </h3>
            <div className="grid md:grid-cols-2 gap-4 grid-cols-1 py-4">
                <div className="flex flex-col justify-center items-center">
                    <Image className="w-full rounded object-cover max-h-96" src={data.images.webp.image_url} layout="responsive" width={1600} height={900} />
                    <div className="flex justify-start items-center text-color-secondary gap-4 py-4">
                        <p className="badge-accent">Score {data.score}</p>
                        <p className="badge-accent">Rank #{data.rank}</p>
                        <p className="badge-accent">Popularity #{data.popularity}</p>
                    </div>
                </div>
                <div>
                    <div>
                        <iframe frameborder="0" allowfullscreen="allowfullscreen" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" title={data.title_japanese} width={'100%'} height={384} src={data.trailer.embed_url} />
                    </div>
                </div>
            </div>
            <div class="flex flex-col py-4 gap-2 ">
                <h3 class="text-xl text-color-primary">{data.duration} | {data.rating}</h3>
                <p class="text-color-primary">
                    {data.synopsis}
                </p>
                <a class="text-color-accent underline" href={data.url}>official website</a>
            </div>
        </div>
    )
}

export default SingleAnime