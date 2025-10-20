import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const project = await prisma.project.findMany();
  return NextResponse.json(project);
}
