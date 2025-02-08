"use server";

import { imagekit } from "./utils";

export const shareAction = async (
  formData: FormData,
  settings: { type: "original" | "wide" | "square"; sensitive: boolean }
) => {
  const file = formData.get("file") as File;
  // const desc = formData.get("desc") as string;

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const transformation = `w-600 ${
    settings.type === "square"
      ? "tr-1-1"
      : settings.type === "wide"
      ? "tr-16-9"
      : ""
  }`;

  imagekit.upload(
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
      if (error) console.log(error);
      else console.log(result);
    }
  );
};
