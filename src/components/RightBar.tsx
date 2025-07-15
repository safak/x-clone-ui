import React from "react";
import Search from "./Search";
import PopularTags from "./PopularTags";
import Recommendations from "./Recommendations";
import Link from "next/link";
import Subscribe from "./Subscribe";

function RightBar() {
  return (
    <div className="pt-2 flex flex-col gap-4 sticky top-0 h-max">
      <Search />
      <Subscribe />
      <Recommendations />
      <PopularTags />
      {/* Footer */}
      <div className="text-textGray text-[12px] leading-[20px]">
        <div className="flex-1 flex flex-wrap items-center gap-x-4">
          <Link
            href="/"
            className="hover:underline border-r border-textGray pr-4 border-opacity-50"
          >
            Terms of Service
          </Link>
          <Link
            href="/"
            className="hover:underline border-r border-textGray pr-4 border-opacity-50"
          >
            Privacy Policy
          </Link>
          <Link
            href="/"
            className="hover:underline border-r border-textGray pr-4 border-opacity-50"
          >
            Cookie Policy
          </Link>
        </div>
        <div className="flex items-center gap-x-4">
          <div className="flex items-center gap-1 cursor-pointer">
            <button className="hover:underline ">More</button>
            <span className="text-lg mb-2">...</span>
          </div>
          <span>© 2025 X Corp.</span>
        </div>
      </div>
    </div>
  );
}

export default RightBar;
