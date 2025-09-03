import Link from "next/link";
import Image from "./Image";

const menuList = [
  { id: 1, name: "Homepage", link: "/", icon: "home.svg" },
  { id: 2, name: "Explore", link: "/", icon: "explore.svg" },
  { id: 3, name: "Notification", link: "/", icon: "notification.svg" },
  { id: 4, name: "Messages", link: "/", icon: "message.svg" },
  { id: 5, name: "Bookmarks", link: "/", icon: "bookmark.svg" },
  { id: 6, name: "Jobs", link: "/", icon: "job.svg" },
  { id: 7, name: "Communities", link: "/", icon: "community.svg" },
  { id: 8, name: "Premium", link: "/", icon: "logo.webp" },
  { id: 9, name: "Profile", link: "/", icon: "profile.svg" },
  { id: 10, name: "More", link: "/", icon: "more.svg" },
];

const MenuItem = ({
  name,
  link,
  icon,
}: {
  name: string;
  link: string;
  icon: string;
}) => (
  <Link
    href={link}
    className="p-2 rounded-full hover:bg-[#181818] flex items-center gap-4 transition-all duration-200"
    aria-label={name}
  >
    <Image path={`icons/${icon}`} alt={name} w={24} h={24} />
    <span className="hidden xxl:inline">{name}</span>
  </Link>
);

const LeftBar = () => {
  return (
    <div className="h-screen sticky top-0 flex flex-col justify-between pt-2 pb-8">
      {/* LOGO + MENU */}
      <div className="flex flex-col gap-4 text-lg items-center xxl:items-start">
        <Link
          href="/"
          className="p-2 rounded-full hover:bg-[#181818]"
          aria-label="Logo"
        >
          <Image path="icons/logo.webp" alt="logo" w={24} h={24} />
        </Link>

        <div className="flex flex-col gap-4">
          {menuList.map((item) => (
            <MenuItem key={item.id} {...item} />
          ))}
        </div>

        {/* POST BUTTON */}
        <Link
          href="/compose/post"
          className="bg-white text-black rounded-full w-12 h-12 flex items-center justify-center xxl:hidden"
          aria-label="New Post"
        >
          <Image path="icons/post.svg" alt="new post" w={24} h={24} />
        </Link>
        <Link
          href="/compose/post"
          className="hidden xxl:block bg-white text-black rounded-full font-bold py-2 px-20"
          aria-label="Compose Post"
        >
          Post
        </Link>
      </div>

      {/* USER SECTION */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 relative rounded-full overflow-hidden">
            <Image path="general/Avatar.jpg" alt="David Nix" w={100} h={100} />
          </div>
          <div className="hidden xxl:flex flex-col">
            <span className="font-bold">David Nix</span>
            <span className="text-sm text-textGray">@DavidNix</span>
          </div>
        </div>
        <div className="hidden xxl:block cursor-pointer font-bold">...</div>
      </div>
    </div>
  );
};

export default LeftBar;
