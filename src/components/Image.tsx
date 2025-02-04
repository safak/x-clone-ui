"use client";

import { IKImage } from "imagekitio-next";

type imageProps = {
  path: string;
  w?: number;
  h?: number;
  alt: string;
  className?: string;
};

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

const Image = ({ path, w, h, alt, className }: imageProps) => {
  return (
    <IKImage
      urlEndpoint={urlEndpoint}
      path={path}
      width={w}
      height={h}
      transformation={[{ width: `${w}`, height: `${h}` }]}
      alt={alt}
      className={className}
    />
  );
};

export default Image;
