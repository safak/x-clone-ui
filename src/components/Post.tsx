import React from "react";
import XImage from "./Image";
import PostInteraction from "./PostInteraction";
import { imagekit } from "@/utils";
import Video from "./Video";
import Link from "next/link";

interface FileDetailsResponse {
  width: number;
  height: number;
  filePath: string;
  url: string;
  fileType: string;
  customMetadata?: { sensitive?: boolean };
}

const Post = async () => {
  const getFileDetails = async (
    fileId: string
  ): Promise<FileDetailsResponse | null> => {
    return new Promise((resolve, reject) => {
      imagekit.getFileDetails(fileId, function (error, result) {
        if (error) {
          console.error("❌error: ", error);
          resolve(null);
        } else {
          resolve(result);
        }
      });
    });
  };

  const fileDetails = await getFileDetails("6874aad25c7cd75eb8c1df24");

  return (
    <div className="p-4 border-y border-borderGray">
      {/* Post Type */}
      <div className="flex items-center gap-2 text-sm text-textGray mb-2 font-bold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
        >
          <path
            fill="#71767b"
            d="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z"
          />
        </svg>
        <span>Mehran reposted</span>
      </div>

      {/* Post Content */}
      <div className="flex gap-4">
        {/* Avatar */}
        <Link
          href="/mehran"
          className="relative w-10 h-10 rounded-full overflow-hidden"
        >
          <XImage path="general/mehran.png" alt="avatar" w={100} h={100} />
        </Link>

        {/* Content */}
        <Link href="/mehran/status/112455641" className="flex-1 flex flex-col gap-2">
          {/* Header */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-md font-bold hover:underline cursor-pointer">
                Mehran
              </h1>
              <span className="text-textGray">@mehransoufi29</span>
              <span className="text-textGray">1 day ago</span>
            </div>
            <div className="flex items-center">
              <button className="outline-none border-none group flex items-center justify-center w-8 h-8 rounded-full hover:bg-iconBlue/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0,0,256,256"
                  width="18"
                  height="18"
                  fillRule="nonzero"
                >
                  <g
                    stroke="none"
                    className="fill-textGray group-hover:fill-iconBlue"
                  >
                    <g transform="scale(5.12,5.12)">
                      <path d="M47.6582,2.05664c-0.24312,0.00962 -0.48347,0.10652 -0.66797,0.29102l-6.10937,6.11719c-0.047,0.032 -0.09181,0.07033 -0.13281,0.11133l-21.60156,21.72852c-0.369,0.371 -0.39083,0.96142 -0.04883,1.35742c0.343,0.396 0.92956,0.46239 1.35156,0.15039l15.08008,-11.14453c0.128,-0.095 0.28883,-0.1278 0.42383,-0.0918c0.148,0.041 0.19203,0.14955 0.20703,0.18555c1.781,4.296 0.82169,9.18794 -2.44531,12.46094c-2.893,2.896 -6.8653,3.96374 -10.9043,2.92773c-0.235,-0.06 -0.48903,-0.03097 -0.70703,0.08203l-5.30859,2.75195c-0.327,0.169 -0.53502,0.50505 -0.54102,0.87305c-0.006,0.368 0.19172,0.70867 0.51172,0.88867c2.853,1.595 5.94133,2.37305 8.98633,2.37305c4.621,0 9.1428,-1.79305 12.5918,-5.24805c4.4,-4.404 6.19255,-10.6438 4.81055,-16.7168c-0.004,-0.04 -0.01149,-0.08109 -0.02148,-0.12109c-1.756,-7.564 0.37302,-10.49573 5.04102,-16.92773l0.33398,-0.46484c0.306,-0.423 0.23389,-1.00966 -0.16211,-1.34766c-0.198,-0.168 -0.44438,-0.24595 -0.6875,-0.23633zM25.99609,7.13672c-4.78937,-0.09693 -9.51855,1.73983 -13.06055,5.2832c-5.066,5.073 -6.64378,12.92602 -3.92578,19.54102c1.684,4.098 -1.05356,6.97455 -4.22656,10.31055c-1.132,1.189 -2.30272,2.42023 -3.26172,3.74023c-0.299,0.414 -0.24133,0.98708 0.13867,1.33008c0.19,0.172 0.42992,0.25781 0.66992,0.25781c0.238,0 0.47797,-0.08391 0.66797,-0.25391l14.33789,-12.82031c0.147,-0.109 0.26398,-0.25659 0.33398,-0.43359c0.153,-0.379 0.05867,-0.8137 -0.23633,-1.0957c-2.685,-2.567 -3.27583,-5.51225 -3.29883,-7.53125c-0.035,-3.106 1.22022,-6.16839 3.44922,-8.40039c2.497,-2.502 6.25259,-3.73298 9.80859,-3.20898c0.203,0.028 0.41747,-0.00456 0.60547,-0.10156l5.69141,-2.95312c0.335,-0.173 0.54306,-0.52239 0.53906,-0.90039c-0.004,-0.378 -0.2225,-0.72072 -0.5625,-0.88672c-0.397,-0.193 -0.80898,-0.37739 -1.20898,-0.52539c-2.09594,-0.86406 -4.28395,-1.3075 -6.46094,-1.35156z"></path>
                    </g>
                  </g>
                </svg>
              </button>
              <button className="outline-none border-none group flex items-center justify-center w-8 h-8 rounded-full hover:bg-iconBlue/20">
                <span className="text-textGray group-hover:text-iconBlue pb-2 text-xl">
                  ...
                </span>
              </button>
            </div>
          </div>

          {/* Text */}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            accusantium sint eligendi repellat laboriosam magnam provident vel
            et, eum fuga!
          </p>

          {/* Media */}
          {fileDetails ? (
            fileDetails.fileType === "image" ? (
              <XImage
                path={fileDetails.filePath}
                alt="post"
                w={fileDetails.width}
                h={fileDetails.height}
                className={
                  fileDetails.customMetadata?.sensitive ? "blur-lg" : ""
                }
              />
            ) : (
              <Video
                path={fileDetails.filePath}
                className={
                  fileDetails.customMetadata?.sensitive ? "blur-lg" : ""
                }
              />
            )
          ) : (
            <p className="text-red-500">
              File not found or connection failed. ⚠️
            </p>
          )}

          {/* Post Interactions */}
          <PostInteraction />
        </Link>
      </div>
    </div>
  );
};

export default Post;
