import Image from "./Image";
import PostInfo from "./PostInfo";
import PostInteractions from "./PostInteractions";

const Post = () => {
  return (
    <div className="p-4 border-y-[1px] border-borderGray">
      {/* TYPE POSTS */}
      <div className="text-textGray flex items-center gap-3 mb-3">
        icon
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
