"use client"

import { shareAction } from "@/actions";
import Image from "@/components/Image";
import React, { useState } from "react";
import NextImage from "next/image";
import ImageEditor from "@/components/ImageEditor";

const Share = () => {
  const [media, setMedia] = useState<File | null>(null);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [settings, setSettings] = useState<{
    type: "original" | "wide" | "square";
    sensitive: boolean;
  }>({
    type: "original",
    sensitive: false,
  });

  const handleMediaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.[0]) {
      setMedia(event.target.files[0]);
    }
  };

  const previewURL = media ? URL.createObjectURL(media) : null;

  return (
    <form className="p-4 flex gap-4" action={shareAction}>
      {/* AVATAR */}
      <div className="relative w-10 h-10 rounded-full overflow-hidden">
        <Image path="general/avatar.png" alt="lama dev" width={100} height={100} tr />
        
      </div>
      {/* OTHERS */}
      <div className="flex-1">
        <input 
          name="desc" 
          type="text" 
          placeholder="What is happening?" 
          className="bg-transparent outline-none placeholder:text-textGray text-xl"
        />
        {previewURL && (
          <div className="relative rounded-xl overflow-hidden">
            <NextImage 
              className={`w-full ${
                settings.type === "original" 
                  ? "h-full object-cover" 
                  : settings.type === "square" 
                  ? "aspect-square object-cover" 
                  : "aspect-video object-cover"
              }`} 
              src={previewURL} alt="" width={600} height={600} 
            />
            <div onClick={() => setIsEditorOpen(true)} className="absolute top-2 left-2 bg-black/50 text-white py-1 px-4 rounded-full font-bold text-sm cursor-pointer">Edit</div>
          </div>
        )}
        {isEditorOpen && previewURL && (
          <ImageEditor 
            onClose={() => setIsEditorOpen(false)} 
            previewURL={previewURL} 
            settings={settings}
            onSettingsChange={setSettings}
          />
        )}
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex gap-4 flex-wrap">
            <input 
              name="media" 
              type="file" 
              onChange={handleMediaChange} 
              className="hidden" 
              id="media"
            />
            <label htmlFor="media" className="cursor-pointer">
              <Image path="icons/image.svg" alt="lama dev" width={20} height={20} className="cursor-pointer" />
            </label>
            <Image path="icons/gif.svg" alt="lama dev" width={20} height={20} className="cursor-pointer" />
            <Image path="icons/poll.svg" alt="lama dev" width={20} height={20} className="cursor-pointer" />
            <Image path="icons/emoji.svg" alt="lama dev" width={20} height={20} className="cursor-pointer" />
            <Image path="icons/schedule.svg" alt="lama dev" width={20} height={20} className="cursor-pointer" />
            <Image path="icons/location.svg" alt="lama dev" width={20} height={20} className="cursor-pointer" />
          </div>
          <button className="bg-white text-black rounded-full font-bold py-2 px-4">Post</button>
        </div>
      </div>
    </form>
  )
}

export default Share
