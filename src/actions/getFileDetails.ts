// src/app/api/media/[fileId]/route.ts
import { imagekitServer } from "@/utils/imagekit-server";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { fileId: string } }) {
  const details = await imagekitServer.getFileDetails(params.fileId);
  return NextResponse.json(details);
}
