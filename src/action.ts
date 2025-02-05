"use server";

import ImageKit from "imagekit";

const imagekit = new ImageKit({
  publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY!,
  privateKey: process.env.PRIVATE_KEY!,
  urlEndpoint: process.env.NEXT_PUBLIC_URL_ENDPOINT!,
});

export const shareAction = async (formData: FormData) => {
  const file = formData.get("file") as File;
  const desc = formData.get("desc") as string;

  console.log(file, desc);
};
