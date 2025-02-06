"use client";

import { useState } from "react";
import Image from "./Image";
import NextImage from "next/image";
import { shareAction } from "@/action";
import ImageEditor from "./ImageEditor";

const Share = () => {
  const [media, setMedia] = useState<File | null>(null);
  const [isEditorOpen, setIsEditorOpen] = useState<boolean>(false);
  const [settings, setSettings] = useState<{
    type: "original" | "wide" | "square";
    sensitive: boolean;
  }>({
    type: "original",
    sensitive: false,
  });
  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setMedia(e.target.files[0]);
    }
  };

  const previewURL = media ? URL.createObjectURL(media) : "";

  return (
    <form className="flex p-4 gap-4 flex-wrap" action={shareAction}>
      {/* PHOTO */}
      <div className="relative rounded-full overflow-hidden w-10 h-10">
        <Image path={"general/avatar.png"} alt="avatar" w={120} h={120} />
      </div>
      <div className="flex flex-1 flex-col gap-4 flex-wrap">
        <input
          type="text"
          name="desc"
          placeholder="What is Happening ?"
          className="bg-transparent text-lg text-white font-bold outline-none placeholder:text-textGray "
        />

        {/* PREVIEW IMAGE */}
        {previewURL && (
          <div className="relative w-full overflow-hidden rounded-xl">
            <NextImage
              src={previewURL}
              alt="preview"
              width={600}
              height={600}
            />
            <div
              className="absolute top-2 left-2 bg-black bg-opacity-50 text-white px-3 py-1 text-sm cursor-pointer rounded-full font-bold"
              onClick={() => setIsEditorOpen(true)}
            >
              Edit
            </div>
          </div>
        )}
        {/* EDIT BUTTON IS OPEN */}
        {isEditorOpen && previewURL && (
          <ImageEditor
            onClose={() => setIsEditorOpen(false)}
            previewURL={previewURL}
            settings={settings}
            setSettings={setSettings}
          />
        )}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6 flex-wrap">
            <input
              name="file"
              type="file"
              onChange={handleImage}
              className="hidden"
              id="file"
            />
            <label htmlFor="file">
              <Image
                path={"icons/image.svg"}
                alt="image"
                h={20}
                w={20}
                className="cursor-pointer"
              />
            </label>

            <Image
              path={"icons/gif.svg"}
              alt="image"
              h={20}
              w={20}
              className="cursor-pointer"
            />
            <Image
              path={"icons/poll.svg"}
              alt="image"
              h={20}
              w={20}
              className="cursor-pointer"
            />
            <Image
              path={"icons/emoji.svg"}
              alt="image"
              h={20}
              w={20}
              className="cursor-pointer"
            />
            <Image
              path={"icons/schedule.svg"}
              alt="image"
              h={20}
              w={20}
              className="cursor-pointer"
            />
            <Image
              path={"icons/location.svg"}
              alt="image"
              h={20}
              w={20}
              className="cursor-pointer"
            />
          </div>
          <button className="font-bold rounded-full text-black bg-white py-2 px-4 ">
            Post
          </button>
        </div>
      </div>
    </form>
  );
};

export default Share;
