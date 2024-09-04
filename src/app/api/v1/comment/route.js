import prisma from "@/app/libs/prisma"
export async function POST(request) {
    const { mal_id, anime_title, anime_img, user_email, username, created_at, comment } = await request.json();

    const data = { mal_id, anime_title, anime_img, user_email, username, created_at, comment };

    // console.log(data);


    const createComment = await prisma.comment.create({ data });
    if (!createComment) {
        return Response.json({ status: 500, isCreated: false });
    }

    return Response.json({ status: 200, isCreated: true });
}

export async function GET(request) {
    // const {mal_id} = await request.json();
    const url = new URL(request.url);
    const mal_id = url.searchParams.get('mal_id');

    const comments = await prisma.comment.findMany({
        where: {
            mal_id: mal_id
        }
    });
    
    return Response.json({data: comments})
}