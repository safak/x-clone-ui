"use client";
import React from "react";
import { IKVideo } from "imagekitio-next";

type VideType = {
  path: string;
  className?: string;
};
const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

function Video({ path, className }: VideType) {
  return (
    <IKVideo
      urlEndpoint={urlEndpoint}
      controls
      path={path}
      className={className}
      transformation={[
        { width: "1920", height: "1080" },
        { raw: "l-text,i-XClone-soufi,fs-100,co-white,l-end" },
      ]}
    />
  );
}

export default Video;
