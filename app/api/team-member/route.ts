import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const teamMembers = await prisma.teamMember.findMany();
    return NextResponse.json(teamMembers);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
