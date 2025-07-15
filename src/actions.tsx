"use server";

import { imagekit } from "./utils";


export const shareAction = async (
  formData: FormData,
  setting: { type: "original" | "wide" | "square"; sensitive: boolean }
) => {
  const sendMedia = formData.get("sendMedia") as File | null;
  const desc = formData.get("desc") as string;

  if (!sendMedia) {
    console.log("No media uploaded");
    return;
  }

  const bytes = await sendMedia.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const transformationOptions = [
    {
      width: "600",
      crop: "maintain_ratio",
      quality: "80",
      ...(setting.type === "square"
        ? { aspectRatio: "1:1" }
        : setting.type === "wide"
        ? { aspectRatio: "16:9" }
        : {}),
    },
  ];

  try {
    const result = await imagekit.upload({
      file: buffer,
      fileName: sendMedia.name,
      folder: "/posts",
      customMetadata: {
        sensitive: setting.sensitive,
      },
    });

    const transformedUrl = imagekit.url({
      path: result.filePath,
      transformation: transformationOptions,
    });

    console.log("Transformed URL:", transformedUrl);
  } catch (error) {
    console.error("Upload failed:", error);
  }
};
