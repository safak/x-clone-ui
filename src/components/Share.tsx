import Image from "./Image";

const Share = () => {
  return (
    <div className="flex p-4 gap-4 flex-wrap">
      {/* PHOTO */}
      <div className="relative rounded-full overflow-hidden w-10 h-10">
        <Image path={"general/avatar.png"} alt="avatar" w={120} h={120} />
      </div>
      <div className="flex flex-1 flex-col gap-4 flex-wrap">
        <input
          type="text"
          placeholder="What is Happening ?"
          className="bg-transparent text-lg text-white font-bold outline-none placeholder:text-textGray "
        />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6 flex-wrap">
            <Image
              path={"icons/image.svg"}
              alt="image"
              h={20}
              w={20}
              className="cursor-pointer"
            />
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
    </div>
  );
};

export default Share;
