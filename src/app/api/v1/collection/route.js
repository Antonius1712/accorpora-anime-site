import prisma from "@/app/libs/prisma"
export async function POST(request) {
    const { mal_id, user_email, judul_anime, img_anime } = await request.json();

    const data = { mal_id, user_email, judul_anime, img_anime };

    const createCollection = await prisma.collection.create({ data });
    if (!createCollection) {
        return Response.json({ status: 500, isCreated: false });
    }

    return Response.json({ status: 200, isCreated: true });
}