import Link from "next/link";
import Image from "./Image";

const LeftBar = () => {
  const menuList = [
    {
      id: 1,
      name: "Homepage",
      link: "/",
      icon: "home.svg",
    },
    {
      id: 2,
      name: "Explore",
      link: "/",
      icon: "explore.svg",
    },
    {
      id: 3,
      name: "Notification",
      link: "/",
      icon: "notification.svg",
    },
    {
      id: 4,
      name: "Messages",
      link: "/",
      icon: "message.svg",
    },
    {
      id: 5,
      name: "Bookmarks",
      link: "/",
      icon: "bookmark.svg",
    },
    {
      id: 6,
      name: "Jobs",
      link: "/",
      icon: "job.svg",
    },
    {
      id: 7,
      name: "Communities",
      link: "/",
      icon: "community.svg",
    },
    {
      id: 8,
      name: "Premium",
      link: "/",
      icon: "logo.svg",
    },
    {
      id: 9,
      name: "Profile",
      link: "/",
      icon: "profile.svg",
    },
    {
      id: 10,
      name: "More",
      link: "/",
      icon: "more.svg",
    },
  ];
  return (
    <div className="h-screen flex flex-col justify-between sticky top-0 pt-2 pb-8 gap-4">
      {/* Logo & Menu */}
      <div className="flex flex-col gap-4 text-lg items-center xxl:items-start">
        {/* lOGO */}
        <Link href={"/"} className="p-2 rounded-full hover:bg-[#181818]">
          <Image path={"icons/logo.svg"} w={24} h={24} alt="logo" />
        </Link>

        {/* Menu */}
        <div className="flex gap-4 flex-col">
          {menuList.map((item) => (
            <Link
              href={item.link}
              key={item.id}
              className="p-2 rounded-full hover:bg-[#181818] flex items-center gap-4"
            >
              <Image
                path={`icons/${item.icon}`}
                key={item.id}
                w={24}
                h={24}
                alt={item.name}
              />
              <span className="hidden xxl:inline">{item.name}</span>
            </Link>
          ))}
        </div>
        {/* BUTTON */}
        <Link
          href={"/"}
          className="xxl:hidden bg-white text-black font-bold w-12 h-12 flex items-center justify-center rounded-full"
        >
          <Image path={"icons/post.svg"} w={24} h={24} alt="tweet" />
        </Link>
        <Link
          href={"/"}
          className="hidden xxl:block bg-white text-black font-bold py-2 px-20 rounded-full"
        >
          Post
        </Link>
      </div>
    {/* USER */}
      <div className="flex items-center justify-between px-1 ">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <Image
              path={"/general/avatar.png"}
              alt="avatar"
              w={100}
              h={100}
              tr={true}
            />
          </div>
          <div className="hidden xxl:flex flex-col">
            <span className="font-bold text-sm">Zulfikar Nurdiana</span>
            <span className="text-sm text-textGray cursor-pointer">
              @zulnurdiana
            </span>
          </div>
        </div>
        <div className="hidden xxl:block cursor-pointer font-bold">...</div>
      </div>
    </div>
  );
};

export default LeftBar;
