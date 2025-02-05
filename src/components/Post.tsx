import Image from "./Image";
import PostInfo from "./PostInfo";

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
      <div className="flex gap-3 ">
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
        <div className="flex gap-2 flex-1 justify-between">
          <div className="flex flex-wrap  gap-2">
            <h1 className="font-bold text-base">Zulfikar Nurdiana</h1>
            <h2 className="text-textGray">@zulnurdiana</h2>
            <h2 className="text-textGray">1 day ago</h2>
          </div>

          <PostInfo />
        </div>
      </div>
    </div>
  );
};

export default Post;
