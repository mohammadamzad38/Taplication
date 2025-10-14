import React from "react";

export default function Error() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-7xl font-bold text-center mb-[200px] mt-[100px]">
        Page not found
      </h1>
      <a className="px-20 py-4 bg-green-400 text-black font-bold rounded-sm text-xl" href="/">Home page</a>
    </div>
  );
}
