import React from "react";
import { SearchIcon, UploadIcon } from "../icons";

const Header = () => {
  return (
    <div className="flex justify-between items-center mt-4 gap-4">
      <div className="flex justify-center items-center max-w-xl w-full">
        <input
          type="text"
          placeholder="Search here..."
          className="w-full inline-block px-4 py-2  border bg-slate-200 border-slate-400 focus:outline-none text-slate-500 rounded"
        />
        <button className="w-8 text-slate-500 -ml-8">
          <SearchIcon />
        </button>
      </div>

      <button className="flex justify-center items-center font-bold px-8 py-2 text-white bg-slate-600">
        Upload <UploadIcon />
      </button>
    </div>
  );
};

export default Header;
