import { prismaClient } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const streams = await prismaClient.stream.findMany();
  return NextResponse.json({
    streams,
  });
}
