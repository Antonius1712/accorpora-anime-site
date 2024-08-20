import Image from "next/image"
import Link from "next/link"

const AnimeList = ({ Anime }) => {
    return (
        <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4">
            {Anime.data?.map(data => {
                return (
                    <div key={data.mal_id} className="shadow-xl p-2">
                        <Link href={`/anime/${data.mal_id}`} className="text-color-accent hover:text-color-primary">
                            <div className="max-h-{400} min-h-{400}">
                                <Image src={data.images?.webp.image_url} alt="..." width={600} height={400} />
                                <h3 className="font-bold md:text-xl text-md p-4 text-center">{data.title}</h3>
                            </div>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default AnimeList