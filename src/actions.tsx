"use server"

import ImageKit from "imagekit"

const imagekit = new ImageKit({
  publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY!,
  privateKey: process.env.PRIVATE_KEY!,
  urlEndpoint: process.env.NEXT_PUBLIC_URL_ENDPOINT!,
});

export const shareAction = async (formData: FormData) => {
  const desc = formData.get("desc") as string;
  const media = formData.get("media") as File | null;

  if (media) {
    const bytes = await media?.arrayBuffer();
    const buffer = Buffer.from(bytes);
    imagekit.upload({
      file: buffer,
      fileName: media.name,
      folder: "/posts",
      transformation: {
        pre: "w-600",
      }
    }).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    });
  }
};