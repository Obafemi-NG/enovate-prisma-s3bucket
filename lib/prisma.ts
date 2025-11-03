import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

const globalForPrisma = global as unknown as {
  prisma: PrismaClient;
};

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = new PrismaClient();
  }
  prisma = globalForPrisma.prisma;
}

// const prisma = new PrismaClient();

// if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
