import prisma from "@/app/libs/prisma"
export async function POST(request) {
    const { mal_id, user_email, username, created_at, comment } = await request.json();

    const data = { mal_id, user_email, username, created_at, comment };

    console.log(data);


    const createCollection = await prisma.collection.create({ data });
    if (!createCollection) {
        return Response.json({ status: 500, isCreated: false });
    }

    return Response.json({ status: 200, isCreated: true });
}