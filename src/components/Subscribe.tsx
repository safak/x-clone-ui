import React from "react";

function Subscribe() {
  return (
    <div className="bg-transparent border border-borderGray py-2 px-4 flex rounded-2xl flex-col items-start gap-4">
      <h1 className="text-xl font-bold text-textGrayLight">
        Subscribe to Premium
      </h1>
      <p className="text-sm text-textGrayLight text-wrap">
        Subscribe to unlock new features and if eligible, receive a share of
        revenue.
      </p>
      <button className="rounded-full bg-iconBlue text-white py-2 px-4 hover:bg-iconBlue/90">Subscribe</button>
    </div>
  );
}

export default Subscribe;
