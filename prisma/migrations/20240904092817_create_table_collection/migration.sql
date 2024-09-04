-- CreateTable
CREATE TABLE "Collection" (
    "id" SERIAL NOT NULL,
    "mal_id" TEXT NOT NULL,
    "judul_anime" TEXT NOT NULL,
    "img_anime" TEXT NOT NULL,
    "user_email" TEXT NOT NULL,

    CONSTRAINT "Collection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "mal_id" TEXT NOT NULL,
    "anime_title" TEXT NOT NULL,
    "anime_img" TEXT NOT NULL,
    "user_email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "comment" TEXT NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rating" (
    "id" SERIAL NOT NULL,
    "mal_id" TEXT NOT NULL,
    "user_email" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,

    CONSTRAINT "Rating_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Collection_user_email_mal_id_judul_anime_img_anime_key" ON "Collection"("user_email", "mal_id", "judul_anime", "img_anime");

-- CreateIndex
CREATE UNIQUE INDEX "Rating_user_email_mal_id_key" ON "Rating"("user_email", "mal_id");
