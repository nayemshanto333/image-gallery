import Gallery from "@/component/gallery";
import Card from "@/component/gallery/card";
import { LikeIcon, SearchIcon, UploadIcon } from "@/component/icons";
import Navbar from "@/component/nav";
import { Item } from "@/component/nav/item";
import { data } from "@/data/db";
import Image from "next/image";

import Link from "next/link";

const NavItems = [
  { url: "/?category=photo", label: "photo" },
  { url: "", label: "|" },
  { url: "/?category=vector", label: "vector" },
  
];

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-sky-100 px-5">
      <div className="w-full max-w-screen-2xl mx-auto p-20 bg-white rounded-lg shadow-lg ">
        {/* Navbar section */}
        <nav className="flex justify-end w-full mb-5 pb-4 border-b-2 border-slate-500 items-end gap-4">
          <Link
            href="/"
            className="text-5xl px-4 py-2 mr-auto text-slate-700 font-bold  uppercase tracking-widest visited:text-slate-700 border-4 border-slate-700 shadow-lg active:translate-y-0.5 transition-all duration-150 rounded"
          >
            Gellery
          </Link>
          {NavItems.map((items, i) => (
            <Item key={i} {...items} />
          ))}
        </nav>

        {/* Header section */}
        <div className="flex justify-between items-center mt-5 mb-10 gap-4">
          <div className="flex justify-center items-center max-w-xl w-full">
            <input
              type="text"
              placeholder="Search here..."
              className="w-full inline-block px-4 py-2 pr-10 border bg-slate-200 border-slate-400 focus:outline-none text-slate-500 rounded"
            />
            <button className="w-8 text-slate-500 -ml-8">
              <SearchIcon />
            </button>
          </div>

          <button className="flex justify-center items-center font-bold px-5 py-2 gap-2 uppercase text-white bg-slate-700 hover:bg-slate-600 active:translate-y-0.5 rounded">
            Upload <UploadIcon />
          </button>
        </div>

        {/* Gallery Section */}

        <Gallery />
        {/* <div className="mt-3 grid grid-cols-4 gap-6">
          {data.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div> */}
      </div>
    </main>
  );
}
