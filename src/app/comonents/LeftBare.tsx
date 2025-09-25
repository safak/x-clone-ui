import Link from "next/link";
import React from "react";
import Image from "next/image";

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
		name: "Job",
		link: "/",
		icon: "job.svg",
	},
	{
		id: 7,
		name: "communities",
		link: "/",
		icon: "community.svg",
	},

	{
		id: 8,
		name: "premium",
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

export default function LeftBare() {
	return (
		<div className=" h-screen sticky top-0 flex flex-col justify-between pt-2 pb-8">
			{/* LOGO MENU BUTTON */}
			<div className=" flex flex-col gap-4 text-lg items-center xxl:items-start">
				{/**LOGO */}
				<Link href="/" className="p-2 rounded-full hover:bg-[#181818] ">
					<Image src="/icons/logo.svg" alt="Logo" width={24} height={24} />
				</Link>
				{/** MENU LIST */}
				<div className="flex flex-col gap-y-4">
					{menuList.map((item) => (
						<Link
							href={item.link}
							className=" rounded-full hover:bg-[#181818] flex items-center gap-4"
							key={item.id}
						>
							<Image
								src={`icons/${item.icon}`}
								alt={item.name}
								width={24}
								height={24}
							/>
							<span className=" hidden xxl:inline">{item.name}</span>
						</Link>
					))}
				</div>
			</div>
			{/**BUTON */}
			<Link
				href="/"
				className=" xxl:hidden justify-center items-center w-12 h-12 text-black bg-white rounded-full font-bold py-2"
			>
				<Image src="icons/post.svg" alt="new post " width={22} height={24} />
			</Link>
			<Link
				href="/"
				className=" hidden xxl:block text-black bg-white rounded-full font-bold py-2 px-20"
			>
				post
			</Link>
			{/* USER */}
			<div className="flex items-center justify-between">
				<div className=" flex items-center gap-2">
					<div className="w-10 h-10 relative rounded-full overflow-hidden">
						<Image src="/general/avatar.png" alt="lama dev" fill />
					</div>
					<div className=" hidden xxl:flex flex-col">
						<span className="font-bold">Adam</span>
						<span className="">iadam606</span>
					</div>
				</div>
				<div className=" hidden xxl:block font-bold cursor-pointer ">...</div>
			</div>
		</div>
	);
}
