import ImageKit from "imagekit";

export const imagekit = new ImageKit({
  publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY!,
  urlEndpoint: process.env.NEXT_PUBLIC_URL_ENDPOINT!,
  privateKey: process.env.PRIVATE_KEY!,
});
