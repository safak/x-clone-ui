"use client";
import React, { useState } from "react";
import XImage from "@/components/Image";
import { useRouter } from "next/navigation";
import ImageEditor from "@/components/ImageEditor";
import { shareAction } from "@/actions";
import Image from "next/image";

function PostModal() {
  const router = useRouter();

  const closeModal = () => {
    router.back();
  };

  const [media, setMedia] = useState<File | null>(null);
  const [isEditorOpen, setIsEditorOpen] = useState<boolean>(false);
  const [setting, setSetting] = useState<{
    type: "original" | "wide" | "square";
    sensitive: boolean;
  }>({
    type: "original",
    sensitive: false,
  });

  const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setMedia(e.target.files[0]);
    }
  };

  const previewURL = media ? URL.createObjectURL(media) : null;

  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-[#5b708366] z-10 flex justify-center">
      <div className="flex flex-col gap-1 mt-8 w-11/12 lg:max-w-[600px] h-fit bg-black rounded-2xl overflow-y-visible">
        <div className="flex items-center justify-between w-full px-4 py-2">
          <button
            className="outline-none p-1 block rounded-full text-white hover:bg-white/20 w-8 h-8"
            onClick={closeModal}
          >
            X
          </button>
          <button className="outline-none py-2 px-4 rounded-full text-iconBlue hover:bg-iconBlue/20 font-bold">
            Drafts
          </button>
        </div>
        <form
          className="p-4 flex gap-4 w-full"
          action={(formData) => shareAction(formData, setting)}
        >
          {/* Avatar */}
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <XImage path="general/mehran.png" alt="avatar" w={100} h={100} />
          </div>
          {/* Others */}
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex flex-col">
              <input
                type="text"
                name="desc"
                id="text"
                placeholder="Whats happening?"
                className="bg-transparent outline-none placeholder:text-textGray text-xl text-wrap pb-10"
              />
              {/* Preview image */}
              {media?.type.includes("image") && previewURL && (
                <div className="relative my-4 rounded-xl overflow-hidden ">
                  <Image
                    width={600}
                    height={600}
                    src={previewURL}
                    alt=""
                    className={`w-full max-h[450px] ${
                      setting.type === "original"
                        ? "h-full object-cover"
                        : setting.type === "square"
                        ? "aspect-square object-cover"
                        : "aspect-video object-cover"
                    }`}
                  />
                  <button
                    className="border-none outline-none absolute top-2 left-2 bg-black/70 text-white py-1 px-3 rounded-full font-bold text-sm cursor-pointer hover:bg-textHover/70"
                    onClick={() => setIsEditorOpen(true)}
                  >
                    Edit
                  </button>
                  <button
                    className="border-none outline-none absolute top-2 right-2 bg-black/70 text-white w-8 h-8 rounded-full text-sm cursor-pointer hover:bg-textHover/70"
                    onClick={() => setMedia(null)}
                  >
                    X
                  </button>
                </div>
              )}
              {media?.type.includes("video") && previewURL && (
                <div className="relative">
                  <video src={previewURL} controls></video>
                  <button
                    className="border-none outline-none absolute top-2 right-2 bg-black/70 text-white w-8 h-8 rounded-full text-sm cursor-pointer hover:bg-textHover/70"
                    onClick={() => setMedia(null)}
                  >
                    X
                  </button>
                </div>
              )}
              {isEditorOpen && previewURL && (
                <ImageEditor
                  onClose={() => setIsEditorOpen(false)}
                  previewURL={previewURL}
                  setting={setting}
                  setSetting={setSetting}
                />
              )}
              <button className="text-iconBlue text-sm font-bold mt-4 cursor-pointer border-none outline-none flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                >
                  <path
                    className="fill-iconBlue"
                    d="M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-.25 10.48L10.5 17.5l-2-1.5v-3.5L7.5 9 5.03 7.59c1.42-2.24 3.89-3.75 6.72-3.84L11 6l-2 .5L8.5 9l5 1.5-1.75 1.73zM17 14v-3l-1.5-3 2.88-1.23c1.17 1.42 1.87 3.24 1.87 5.23 0 1.3-.3 2.52-.83 3.61L17 14z"
                  />
                </svg>
                <span>Everyone can reply</span>
              </button>
            </div>
            <div className="flex items-center justify-between gap-4 flex-wrap border-t border-textGray pt-4">
              <div className="flex gap-4 flex-wrap">
                <input
                  type="file"
                  name="sendMedia"
                  id="media"
                  onChange={handleMediaChange}
                  className="hidden"
                  accept="image/*,video/*"
                />
                <label htmlFor="media">
                  <XImage
                    path="icons/image.svg"
                    alt=""
                    w={20}
                    h={20}
                    className="cursor-pointer"
                  />
                </label>
                <XImage
                  path="icons/gif.svg"
                  alt=""
                  w={20}
                  h={20}
                  className="cursor-pointer"
                />
                <XImage
                  path="icons/shareGrok.svg"
                  alt=""
                  w={20}
                  h={20}
                  className="cursor-pointer"
                />
                <XImage
                  path="icons/poll.svg"
                  alt=""
                  w={20}
                  h={20}
                  className="cursor-pointer"
                />
                <XImage
                  path="icons/emoji.svg"
                  alt=""
                  w={20}
                  h={20}
                  className="cursor-pointer"
                />
                <XImage
                  path="icons/schedule.svg"
                  alt=""
                  w={20}
                  h={20}
                  className="cursor-pointer"
                />
                <XImage
                  path="icons/location.svg"
                  alt=""
                  w={20}
                  h={20}
                  className="cursor-pointer"
                />
              </div>
              <button
                type="submit"
                className="bg-white text-black font-bold rounded-full py-2 px-4 hover:bg-white/90"
              >
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PostModal;
