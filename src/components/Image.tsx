"use client"

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

const Image = ({ path, width, height, alt, className, tr }: ImageProps) => {
  return (
    <IKImage 
      urlEndpoint={urlEndpoint} 
      path={path} 
      {...(tr
        ? {transformation: [{ height: `${height}`, width: `${width}` }]}
        : {height, width})}
      alt={alt} 
      className={className}
    />
  );
};

export default Image;
