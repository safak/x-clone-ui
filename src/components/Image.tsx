import React from "react";
import { Image } from "@imagekit/next";

interface ImageType {
  path: string;
  w?: number;
  h?: number;
  alt: string;
  className?: string;
  tr?: boolean;
}

function XImage({ path, w, h, alt, className, tr }: ImageType) {
  const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

  return (
    <Image
      urlEndpoint={urlEndpoint}
      src={path}
      {...(tr
        ? { transformation: [{ width: `${w}`, height: `${h}` }] }
        : { width: w, height: h })}
      alt={alt}
      className={className}
    />
  );
}

export default XImage;
