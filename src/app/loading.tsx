import React from "react";

const loading = () => {
  return (
    <div
      className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-gray-700 border-t-transparent bg-white fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
      role="status"
    >
      <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">
        Loading...
      </span>
    </div>
  );
};

export default loading;
