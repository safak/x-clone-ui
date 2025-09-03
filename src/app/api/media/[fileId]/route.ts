import { NextResponse } from "next/server"
import { imagekitServer } from "@/utils/imagekit-server"

type ImageKitFileDetails = {
  fileId: string
  name: string
  url: string
  size: number
  height?: number
  width?: number
  format?: string
  tags?: string[]
  createdAt?: string
  updatedAt?: string
}

const getImageKitDetails = (fileId: string): Promise<ImageKitFileDetails> =>
  new Promise((resolve, reject) => {
    imagekitServer.getFileDetails(fileId, (error, result) => {
      if (error) reject(error)
      else resolve(result as ImageKitFileDetails)
    })
  })

// ⚠️ Workaround: use `any` to satisfy Next.js type system
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function GET(_req: Request, context: any) {
  const fileId = context.params?.fileId as string

  if (!fileId || !/^[\w\-]+$/.test(fileId)) {
    console.warn("Invalid fileId:", fileId)
    return NextResponse.json({ error: "Invalid fileId" }, { status: 400 })
  }

  try {
    const details = await getImageKitDetails(fileId)
    return NextResponse.json(details)
  } catch (err: unknown) {
    console.error("ImageKit fetch failed:", err)
    return NextResponse.json({ error: "Media not found" }, { status: 404 })
  }
}
