"use server";

import { imagekitServer } from "./utils/imagekit-server";




type AspectType = "original" | "wide" | "square";

const getTransformation = (type: AspectType) => {
  switch (type) {
    case "square":
      return "w-600,ar-1-1";
    case "wide":
      return "w-600,ar-16-9";
    default:
      return "w-600";
  }
};

export const shareAction = async (
  formData: FormData,
  settings: { type: AspectType; sensitive: boolean }
): Promise<{
  url: string;
  fileName: string;
  sensitive: boolean;
  aspect: AspectType;
}> => {
  const file = formData.get("file") as File;

  if (!file || !file.type.startsWith("image/")) {
    throw new Error("Invalid file type. Only images are supported.");
  }
  if (file.size > 5 * 1024 * 1024) {
    throw new Error("File too large. Max size is 5MB.");
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const transformation = getTransformation(settings.type);

  return new Promise((resolve, reject) => {
    imagekitServer.upload(
      {
        file: buffer,
        fileName: file.name,
        folder: "/posts",
        transformation: {
          pre: transformation,
        },
        customMetadata: {
          sensitive: settings.sensitive,
        },
      },
      function (error, result) {
        if (error || !result) {
          console.error("ImageKit upload error:", error);
          reject(new Error("Upload failed or returned null result"));
        } else {
          resolve({
            url: result.url,
            fileName: result.name,
            sensitive: settings.sensitive,
            aspect: settings.type,
          });
        }
      }
    );
  });
};
