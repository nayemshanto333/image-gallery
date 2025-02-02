"use client";
import React, { useEffect, useState } from "react";
import { SearchIcon, UploadIcon } from "../icons";
import { useRouter } from "next/navigation";

const Header = () => {
  const [searchData, setSearchData] = useState("");
  const router = useRouter();

  useEffect(() => {
    router.push(searchData ? `/?search=${searchData}` : "/");
  }, [searchData, router]);

  const open = () => router.push("/?popup=true");

  return (
    <div className="flex justify-between items-center mt-5 mb-10 gap-4">
      <div className="flex justify-center items-center max-w-xl w-full">
        <input
          type="text"
          placeholder="Search here..."
          className="w-full inline-block px-4 py-1 md:py-2 pr-10 border bg-slate-200 border-slate-400 focus:outline-none text-slate-500 rounded"
          onChange={(e) => setSearchData(e.target.value)}
        />
        <button className="w-8 text-slate-500 -ml-8">
          <SearchIcon />
        </button>
      </div>

      <button
        onClick={open}
        className="flex justify-center items-center font-bold text-xs md:text-base  px-3 md:px-5 py-1 md:py-2 gap-2 uppercase text-white bg-slate-700 hover:bg-slate-600 active:translate-y-0.5 rounded"
      >
        Upload <UploadIcon />
      </button>
    </div>
  );
};

export default Header;
