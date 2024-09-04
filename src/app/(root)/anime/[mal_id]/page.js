import Image from "next/image"
import { JikanApi } from "@/app/libs/api"
import CollectionButton from "@/components/AnimeList/CollectionButton"
import { Auth } from "@/app/libs/auth"
import prisma from "@/app/libs/prisma"
import CommentBox from "@/components/Comment/CommentBox"
import CommentList from "@/components/Comment/CommentList"

const SingleAnime = async ({ params: { mal_id } }) => {
    const { data } = await JikanApi(`anime/${mal_id}`)
    const user = await Auth();
    const collections = await prisma.collection.findFirst({
        where: {
            user_email: user?.email,
            mal_id: mal_id
        }
    });

    const comments = await prisma.comment.findMany({
        where: {
            mal_id: mal_id
        }
    });

    return (
        <div className="pt-4 px-4">
            <h3 className="text-2xl text-color-primary">
                {data.title}
            </h3>
            {
                user
                    ? !collections
                        ? <CollectionButton mal_id={mal_id} user_email={user?.email} judul_anime={data.title} img_anime={data.images.webp.image_url} />
                        : <p className="text-color-accent">Already in Collection</p>
                    : ''
            }
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
                        <iframe frameborder="0" allowfullscreen="allowfullscreen" allow="accelerometer; 
                        --autoplay; 
                        clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" title={data.title_japanese} width={'100%'} height={384} src={data.trailer.embed_url} />
                    </div>
                </div>
            </div>
            <div className="flex flex-col py-4 gap-2 ">
                <h3 className="text-xl text-color-primary">{data.duration} | {data.rating}</h3>
                <p className="text-color-primary">
                    {data.synopsis}
                </p>
                <a className="text-color-accent underline" href={data.url}>official website</a>
            </div>

            <div className="bg-color-primary rounded-md p-4 flex flex-col">
                <p className="text-xl">Comments</p>
                {/* <div className="border-t border-color-dark">
                    {comments.map((comment) => {
                        return (
                            <div className="bg-color-[#bbb] rounded-md p-4 mt-2">
                                <span className="flex justify-between">
                                    <p>{comment.username}</p>
                                    <p>{new Date(comment.created_at).toLocaleString()}</p>
                                </span>
                                <span>
                                    {comment.comment}
                                </span>
                            </div>
                        )
                    })}
                </div> */}
                <CommentList mal_id={mal_id} anime_title={data.title} anime_img={data.images.webp.image_url} user_email={user?.email} username={user?.name}/>
                
            </div>
        </div>
    )
}

export default SingleAnime