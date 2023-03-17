/*
  Warnings:

  - You are about to alter the column `nominations` on the `OscarFilm` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(0))`.

*/
-- AlterTable
ALTER TABLE `OscarFilm` MODIFY `nominations` ENUM('BEST_FILM', 'BEST_MULTFILM', 'BEST_VISUAL_EFFECTS', 'BEST_MONTAGE') NOT NULL;
