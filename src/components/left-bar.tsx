import Link from "next/link";
import ImageKit from "./image-kit";

const menuList = [
  {
    id: 1,
    name: "Home",
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

const LeftBar = () => {
  return (
    <div className="h-screen sticky top-0 flex flex-col justify-between pt-2 pb-4">
      {/* Logo, Menu, Button */}
      <div className="flex flex-col gap-4 text-lg items-center xxl:items-start">
        <Link href="/" className="p-2 rounded-full hover:bg-[#181818]">
          <ImageKit path="icons/logo.svg" alt="logo" width={24} height={24} />
        </Link>

        {/* Menu */}
        <div className="flex flex-col gap-[6px] w-full">
          {menuList.map((item) => (
            <Link href={item.link} key={item.id}>
              <div className="p-2 rounded-full hover:bg-[#181818] duration-300 ease-in-out flex items-center gap-4 max-w-fit">
                <ImageKit
                  path={`icons/${item.icon}`}
                  alt={item.name}
                  width={24}
                  height={24}
                />
                <span className="hidden xxl:inline">{item.name}</span>
              </div>
            </Link>
          ))}
        </div>
        {/* Button */}
        <Link
          href="/"
          className="xxl:hidden p-2 rounded-full bg-white w-12 h-12 flex items-center justify-center"
        >
          <ImageKit path="icons/post.svg" alt="plus" width={24} height={24} />
        </Link>
        <Link
          href="/"
          className="hidden xxl:block bg-white text-gray-800 font-bold rounded-full py-2 px-24"
        >
          Post
        </Link>
      </div>
      {/* User */}
      <div className="flex items-center justify-between cursor-pointer hover:bg-[#181818] p-2 duration-300 ease-in-out rounded-full">
        <div className="flex space-x-2 items-center">
          <div className="w-10 h-10 relative overflow-hidden rounded-full">
            <ImageKit
              path="/general/avatar.png"
              alt="logo"
              width={100}
              height={100}
              tr={true}
            />
          </div>
          <div className="hidden xxl:flex flex-col">
            <span className="font-bold">Nosa Cikal</span>
            <span className="text-sm text-textGray">@nosacikal</span>
          </div>
        </div>
        <div className="hidden xxl:block font-bold">...</div>
      </div>
    </div>
  );
};

export default LeftBar;
