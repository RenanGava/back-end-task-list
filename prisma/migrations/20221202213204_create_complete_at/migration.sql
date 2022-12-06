-- AlterTable
ALTER TABLE "tasks" ADD COLUMN     "completed_at" TIMESTAMP(3),
ALTER COLUMN "updated_at" DROP DEFAULT;
