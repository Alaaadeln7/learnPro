/*
  Warnings:

  - A unique constraint covering the columns `[courseId]` on the table `Announcements` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Course" ALTER COLUMN "students" DROP NOT NULL,
ALTER COLUMN "rating" DROP NOT NULL,
ALTER COLUMN "rating" SET DEFAULT 0;

-- CreateIndex
CREATE UNIQUE INDEX "Announcements_courseId_key" ON "Announcements"("courseId");
