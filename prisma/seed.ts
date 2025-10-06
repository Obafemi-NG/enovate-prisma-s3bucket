import { PrismaClient, Prisma } from "../app/generated/prisma";

const prisma = new PrismaClient();

const teamMemberData: Prisma.TeamMemberCreateInput[] = [
  {
    name: "Obafemi Oludahunsi",
    position: "Software Engineer | Co-Founder",
    imageUrl: "some link",
    bio: "some info",
  },
  {
    name: "Tomilola shitta",
    position: "Product Designer | Co-Founder",
    imageUrl: "some link",
    bio: "some info",
  },
];

const projectData: Prisma.ProjectCreateInput[] = [
  {
    title: "AstroXtrade",
    imageUrl: "some link",
    detail: "some detail",
    link: "some link",
    tag: ["Product Design", "Mobile App Development"],
  },
  {
    title: "Mobishare",
    imageUrl: "some link",
    detail: "some detail",
    link: "some link",
    tag: ["Web App Development"],
  },
];

export async function main() {
  for (const t of teamMemberData) {
    await prisma.teamMember.create({ data: t });
  }
  for (const p of projectData) {
    await prisma.project.create({ data: p });
  }
}

main();
