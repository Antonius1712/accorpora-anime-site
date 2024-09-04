import { Auth } from "@/app/libs/auth";
import Image from "next/image";
import Link from "next/link";

const page = async () => {
    const user = Auth();
    const comments = await prisma.comment.findMany({
        where: {
            user_email: user?.email
        }
    });

    return (
        <div className="mt-4">
            <h1 className="text-center text-2xl text-color-accent"> List Comments </h1>


            <div className="p-4 flex flex-col gap-4">
                {comments.map((comment, index) => {
                    return (
                        <Link key={index} href={`/anime/${comment.mal_id}`}>
                            <div className="bg-color-secondary text-color-accent px-6 py-8 rounded-md items-center flex">
                                <div className="px-4">
                                    <Image className="w-[100px] h-[100px] rounded-md" src={comment.anime_img} width={100} height={100} />
                                </div>
                                <div>
                                    <p className="text-2xl text-bold">
                                        {comment.anime_title}
                                    </p>
                                    <p className="text-color-primary">
                                        {comment.comment}
                                    </p>
                                    <p className="text-color-primary text-sm">
                                        {new Date(comment.created_at).toLocaleString()}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    )
                })}

                {/* <p className="bg-color-secondary text-color-accent px-6 py-8 rounded-md">
                    test komentar
                </p>

                <p className="bg-color-secondary text-color-accent px-6 py-8 rounded-md">
                    test komentar
                </p> */}
            </div>
        </div>
    )
}

export default page