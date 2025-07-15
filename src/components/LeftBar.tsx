import Link from "next/link";
import XImage from "./Image";

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
    name: "Grok",
    link: "/",
    icon: "xGrok.svg",
  },
  {
    id: 6,
    name: "Communities",
    link: "/",
    icon: "community.svg",
  },
  {
    id: 7,
    name: "Premium",
    link: "/",
    icon: "xLogo.svg",
  },
  {
    id: 8,
    name: "Profile",
    link: "/",
    icon: "profile.svg",
  },
  {
    id: 9,
    name: "More",
    link: "/",
    icon: "more.svg",
  },
];

const LeftBar = () => {
  return (
    <div className="h-screen sticky top-0 flex flex-col justify-between pt-2 pb-4">
      {/* LOGO MENU BUTTON */}
      <div className="flex flex-col gap-4 text-lg items-center xxl:items-start">
        {/* LOGO */}
        <Link href="/" className="p-2 rounded-full hover:bg-textHover ">
          <XImage path="icons/xLogo.svg" alt="logo" w={24} h={24} />
        </Link>
        {/* MENU LIST */}
        <div className="flex flex-col gap-1">
          {menuList.map((item) => (
            <Link
              href={item.link}
              className="p-2 rounded-full hover:bg-textHover flex items-center gap-4"
              key={item.id}
            >
              <XImage
                path={`icons/${item.icon}`}
                alt={item.name}
                w={24}
                h={24}
              />
              <span className="hidden xxl:inline">{item.name}</span>
            </Link>
          ))}
        </div>
        {/* BUTTON */}
        <Link
          href="/compose/post"
          className="bg-white text-black rounded-full w-12 h-12 flex items-center justify-center xxl:hidden hover:bg-white/90"
        >
          <XImage path="icons/post.svg" alt="new post" w={24} h={24} />
        </Link>
        <Link
          href="/compose/post"
          className="hidden xxl:block bg-white text-black rounded-full font-bold py-2 px-20  hover:bg-white/90"
        >
          Post
        </Link>
      </div>
      {/* USER */}
      <div className="p-2 rounded-full flex items-center justify-between cursor-pointer hover:bg-textHover">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 relative rounded-full overflow-hidden">
            <XImage path="/general/mehran.png" alt="Mehran" w={100} h={100} />
          </div>
          <div className="hidden xxl:flex flex-col">
            <span className="font-bold">Mehran</span>
            <span className="text-sm text-textGray">@mehransoufi29</span>
          </div>
        </div>
        <div className="hidden xxl:block font-bold">...</div>
      </div>
    </div>
  );
};

export default LeftBar;
