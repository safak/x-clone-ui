import Feed from "@/components/Feed";
import Share from "@/components/Share";
import Link from "next/link";

const Homepage = () => {
  return (
    <div className="">
      <div
        className="flex justify-between border-b-[1px]
      border-borderGray text-textGray font-bold px-4 py-4 text-xs xsm:text-base"
      >
        <Link
          href={"/"}
          className="border-b-4 pb-3 flex items-center border-iconBlue"
        >
          For you
        </Link>
        <Link href={"/"} className="pb-3 flex items-center">
          Following
        </Link>
        <Link href={"/"} className="pb-3 flex items-center">
          Node JS
        </Link>
        <Link href={"/"} className="pb-3 flex items-center">
          Next JS
        </Link>
        <Link href={"/"} className="pb-3 flex items-center">
          Google
        </Link>
      </div>
      <Feed />
      <Share />
    </div>
  );
};

export default Homepage;
