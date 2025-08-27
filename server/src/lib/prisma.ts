import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

// optional: tidy shutdown
process.on("SIGINT", async () => { await prisma.$disconnect(); process.exit(0); });
process.on("SIGTERM", async () => { await prisma.$disconnect(); process.exit(0); });
