-- CreateTable
CREATE TABLE "TeamMember" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,

    CONSTRAINT "TeamMember_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "detail" TEXT NOT NULL,
    "tag" TEXT[],

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);
