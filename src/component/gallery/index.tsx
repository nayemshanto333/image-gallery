'use client'

import React from "react";
import Card from "./card";
import { data } from "@/data/db";
import {  useSearchParams } from "next/navigation";


const Gallery = () => {
    const params = useSearchParams();
    const category = params.get('category')

    const images = data.filter((item)=>category ? item.category===category : item)
    


    return (
    <div className="mt-3 grid grid-cols-4 gap-6">
      {images.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Gallery;
