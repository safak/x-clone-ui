import { imagekit } from "@/utils";
import Image from "./Image";
import PostInfo from "./PostInfo";
import PostInteractions from "./PostInteractions";

const Post = () => {
  const getImage = async (id_photo: string) => {
    new Promise((resolve, reject) => {
      imagekit.getFileDetails(id_photo, function (error, result) {
        if (error) reject(error);
        else resolve(console.log(result));
      });
    });
  };

  const fileku = getImage("67a46902432c47641629c8ad");

  console.log("ISI FILE KU ADALAH :", fileku);

  return (
    <div className="p-4 border-y-[1px] border-borderGray">
      {/* TYPE POSTS */}
      <div className="text-textGray flex items-center gap-3 mb-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
        >
          <path
            className="fill-textGray"
            d="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z"
          />
        </svg>
        <span>zulnurdiana</span>
        <span>Reposted</span>
      </div>
      {/* POSTS */}
      <div className="flex gap-3 flex-col ">
        <div className="flex  gap-3">
          {/* PROFILE */}
          <div className="relative rounded-full overflow-hidden w-10 h-10">
            <Image
              path={"general/avatar.png"}
              alt="avatar"
              w={100}
              h={100}
              tr={true}
            />
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <div className="flex gap-2 justify-between">
              <div className="flex flex-wrap gap-2">
                <h1 className="font-bold text-base">Zulfikar Nurdiana</h1>
                <h2 className="text-textGray">@zulnurdiana</h2>
                <h2 className="text-textGray">1 day ago</h2>
              </div>

              <PostInfo />
            </div>

            {/* TEXT and MEDIA */}
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              quibusdam libero consequatur perspiciatis autem recusandae fugit
              quia. At quia modi accusamus, id perspiciatis doloribus, rem in
              iure dolorum, dolorem quibusdam.
            </p>
            <Image
              path={"general/post.jpeg"}
              alt="post"
              w={600}
              h={600}
              className="rounded-sm"
            />
            <PostInteractions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
