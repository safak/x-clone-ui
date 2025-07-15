import Feed from "@/components/Feed";
import XImage from "@/components/Image";
import Link from "next/link";

const UserPage = () => {
  return (
    <div className="">
      {/* PROFILE TITLE */}
      <div className="flex items-center justify-between sticky top-0 backdrop-blur-md px-4 p-1 z-10 bg-[#00000084]">
        <div className="flex items-center gap-8">
          <Link href="/">
            <XImage path="icons/back.svg" alt="back" w={20} h={20} />
          </Link>
          <div className="flex flex-col">
            <h1 className="font-bold text-lg">Mehran</h1>
            <span className="text-sm text-textGray">12 posts</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0,0,256,256"
            width="20"
            hanging="20"
            fillRule="nonzero"
          >
            <g stroke="none" className="fill-white cursor-pointer">
              <g transform="scale(5.12,5.12)">
                <path d="M47.6582,2.05664c-0.24312,0.00962 -0.48347,0.10652 -0.66797,0.29102l-6.10937,6.11719c-0.047,0.032 -0.09181,0.07033 -0.13281,0.11133l-21.60156,21.72852c-0.369,0.371 -0.39083,0.96142 -0.04883,1.35742c0.343,0.396 0.92956,0.46239 1.35156,0.15039l15.08008,-11.14453c0.128,-0.095 0.28883,-0.1278 0.42383,-0.0918c0.148,0.041 0.19203,0.14955 0.20703,0.18555c1.781,4.296 0.82169,9.18794 -2.44531,12.46094c-2.893,2.896 -6.8653,3.96374 -10.9043,2.92773c-0.235,-0.06 -0.48903,-0.03097 -0.70703,0.08203l-5.30859,2.75195c-0.327,0.169 -0.53502,0.50505 -0.54102,0.87305c-0.006,0.368 0.19172,0.70867 0.51172,0.88867c2.853,1.595 5.94133,2.37305 8.98633,2.37305c4.621,0 9.1428,-1.79305 12.5918,-5.24805c4.4,-4.404 6.19255,-10.6438 4.81055,-16.7168c-0.004,-0.04 -0.01149,-0.08109 -0.02148,-0.12109c-1.756,-7.564 0.37302,-10.49573 5.04102,-16.92773l0.33398,-0.46484c0.306,-0.423 0.23389,-1.00966 -0.16211,-1.34766c-0.198,-0.168 -0.44438,-0.24595 -0.6875,-0.23633zM25.99609,7.13672c-4.78937,-0.09693 -9.51855,1.73983 -13.06055,5.2832c-5.066,5.073 -6.64378,12.92602 -3.92578,19.54102c1.684,4.098 -1.05356,6.97455 -4.22656,10.31055c-1.132,1.189 -2.30272,2.42023 -3.26172,3.74023c-0.299,0.414 -0.24133,0.98708 0.13867,1.33008c0.19,0.172 0.42992,0.25781 0.66992,0.25781c0.238,0 0.47797,-0.08391 0.66797,-0.25391l14.33789,-12.82031c0.147,-0.109 0.26398,-0.25659 0.33398,-0.43359c0.153,-0.379 0.05867,-0.8137 -0.23633,-1.0957c-2.685,-2.567 -3.27583,-5.51225 -3.29883,-7.53125c-0.035,-3.106 1.22022,-6.16839 3.44922,-8.40039c2.497,-2.502 6.25259,-3.73298 9.80859,-3.20898c0.203,0.028 0.41747,-0.00456 0.60547,-0.10156l5.69141,-2.95312c0.335,-0.173 0.54306,-0.52239 0.53906,-0.90039c-0.004,-0.378 -0.2225,-0.72072 -0.5625,-0.88672c-0.397,-0.193 -0.80898,-0.37739 -1.20898,-0.52539c-2.09594,-0.86406 -4.28395,-1.3075 -6.46094,-1.35156z"></path>
              </g>
            </g>
          </svg>
          <XImage path="icons/explore.svg" alt="back" w={20} h={20} className="cursor-pointer" />
        </div>
      </div>
      {/* INFO */}
      <div className="">
        {/* COVER & AVATAR CONTAINER */}
        <div className="relative w-full">
          {/* COVER */}
          <div className="w-full aspect-[3/1] relative h-[200px] ">
            <XImage path="general/xCover.jpg" alt="" w={600} h={200} />
          </div>
          {/* AVATAR */}
          <div className="w-1/5 aspect-square rounded-full overflow-hidden border-4 border-black bg-gray-300 absolute left-4 -translate-y-1/2 flex justify-center items-center">
            <div className="w-[full] h-full flex justify-center items-center relative">
              <XImage path="general/mehran.png" alt="" w={200} h={200} />
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-end gap-2 p-2">
          <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                className="fill-white"
                d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
              />
            </svg>
          </div>
          <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
            <XImage path="icons/notify.svg" alt="more" w={20} h={20} />
          </div>
          <button className="py-2 px-4 bg-white text-black font-bold rounded-full hover:bg-white/90">
            Follow
          </button>
        </div>
        {/* USER DETAILS */}
        <div className="p-4 flex flex-col gap-2">
          {/* USERNAME & HANDLE */}
          <div className="">
            <h1 className="text-2xl font-bold">Mehran</h1>
            <span className="text-textGray text-sm">@mehransoufi29</span>
          </div>
          <div className="flex flex-col leading-5 text-sm">
            <p>Web programing</p>
            <p>Computer Engineering</p>
            <p>Winter🕸️❄️☃️</p>
          </div>
          {/* JOB & LOCATION & DATE */}
          <div className="flex gap-4 text-textGray text-[15px]">
            <div className="flex items-center gap-2">
              <XImage
                path="icons/userLocation.svg"
                alt="location"
                w={18}
                h={18}
              />
              <span>tehran</span>
            </div>
            <div className="flex items-center gap-2">
              <XImage path="icons/birthday.svg" alt="location" w={18} h={18} />
              <span>Born January 19, 2001</span>
            </div>
            <div className="flex items-center gap-2">
              <XImage path="icons/date.svg" alt="date" w={18} h={18} />
              <span>Joined October 2017</span>
            </div>
          </div>
          {/* FOLLOWINGS & FOLLOWERS */}
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <span className="font-bold">100</span>
              <span className="text-textGray text-[15px]">Followers</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold">100</span>
              <span className="text-textGray text-[15px]">Followings</span>
            </div>
          </div>
        </div>
      </div>
      {/* Other buttons */}
      <div className="flex justify-between font-bold border-b border-borderGray">
        <Link
          className="w-1/3 py-3 flex items-center justify-center hover:bg-textHover relative text-white"
          href="/"
        >
          Posts
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/4 h-1 rounded-full bg-iconBlue"></span>
        </Link>
        <Link
          className="w-1/3 py-3 flex items-center justify-center hover:bg-textHover text-textGray"
          href="/"
        >
          Replies
        </Link>
        <Link
          className="w-1/3 py-3 flex items-center justify-center hover:bg-textHover text-textGray"
          href="/"
        >
          Media
        </Link>
      </div>
      {/* FEED */}
      <Feed />
    </div>
  );
};

export default UserPage;
