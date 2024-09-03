-- CreateTable
CREATE TABLE `Collection` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `mal_id` VARCHAR(191) NOT NULL,
    `judul_anime` VARCHAR(191) NOT NULL,
    `img_anime` VARCHAR(191) NOT NULL,
    `user_email` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Collection_user_email_mal_id_judul_anime_img_anime_key`(`user_email`, `mal_id`, `judul_anime`, `img_anime`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
