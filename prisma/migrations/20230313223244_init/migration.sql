-- AlterTable
ALTER TABLE `Film` MODIFY `descriptions` TEXT NOT NULL;

-- CreateTable
CREATE TABLE `OscarFilm` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `descriptions` TEXT NOT NULL,
    `raiting` VARCHAR(191) NOT NULL,
    `img` VARCHAR(191) NOT NULL,
    `year` INTEGER NOT NULL,
    `nominations` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
