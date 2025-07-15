import React from "react";
import XImage from "./Image";

function Search() {
  return (
    <div className="bg-transparent border border-borderGray py-2 px-4 flex items-center gap-4 rounded-full">
      <XImage path="icons/explore.svg" alt="search" w={16} h={16} />
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent outline-none placeholder:text-white"
      />
    </div>
  );
}

export default Search;
