"use client";

import { IKImage } from "imagekitio-next";

type ImageProps = {
  path: string;
  width?: number;
  height?: number;
  alt: string;
  className?: string;
  tr?: boolean;
};

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

if (!urlEndpoint) {
  throw new Error("Error: Please add urlEndpoint to .env or .env.local");
}

const ImageKit = ({ path, width, height, alt, className, tr }: ImageProps) => {
  return (
    <IKImage
      urlEndpoint={urlEndpoint}
      path={path}
      {...(tr
        ? { transformation: [{ width: `${width}`, height: `${height}` }] }
        : { width: width, height: height })}
      alt={alt}
      className={className}
    />
  );
};

export default ImageKit;
