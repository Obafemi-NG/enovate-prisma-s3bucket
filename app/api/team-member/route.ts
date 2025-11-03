import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const teamMembers = await prisma.teamMember.findMany();
  return NextResponse.json(teamMembers);
}
