import Feed from "@/components/Feed";
import Share from "@/components/Share";
import Link from "next/link";

const Homepage = () => {
  return (
    <div className="">
      <div className="flex justify-between font-bold border-b border-borderGray">
        <Link
          className="w-1/2 py-3 flex items-center justify-center hover:bg-textHover relative text-white"
          href="/"
        >
          For you
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/4 h-1 rounded-full bg-iconBlue"></span>
        </Link>
        <Link
          className="w-1/2 py-3 flex items-center justify-center hover:bg-textHover text-textGray"
          href="/"
        >
          Following
        </Link>
      </div>
      <Share />
      <Feed />
    </div>
  );
};

export default Homepage;
