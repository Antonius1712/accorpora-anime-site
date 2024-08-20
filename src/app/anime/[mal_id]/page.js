import Image from "next/image"

const SingleAnime = async ({params}) => {
    const endpoint = process.env.NEXT_PUBLIC_ENDPOINT_JIKAN
    const response = await fetch(`${endpoint}/anime/${params.mal_id}`)
    const {data} = await response.json()
    return (
        <div className="flex justify-between p-2">
            <div className="">
                <Image src={data.images.webp.image_url} alt="..." width={1366} height={400}/>
                <h3 className="font-bold md:text-xl text-md p-4 text-center">{data.title}</h3>
            </div>
        </div>
    )
}

export default SingleAnime