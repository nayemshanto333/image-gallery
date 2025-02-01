"use client";

import React from "react";
import Card from "./card";
import { data } from "@/data/db";
import { useSearchParams } from "next/navigation";

const Gallery = () => {
  const params = useSearchParams();
  const category = params.get("category");
  const search = params.get("search");

  const images = data.filter(
    (item) =>
      (search
        ? item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        : true) && (category ? item.category === category : true)
  );

  return (
    <div className="mt-3 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-6">
      {images.length > 0? images.map((item) => (
        <Card key={item.id} {...item} />
      )): <div><p className="text-slate-500 font-bold text-lg md:text-2xl text-center ">"Data Not Found"</p></div>}
    </div>
  );
};

export default Gallery;
