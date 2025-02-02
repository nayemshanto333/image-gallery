"use client";

import React, { useEffect, useState } from "react";
import Card from "./card";
import { data } from "@/data/db";
import { useRouter, useSearchParams } from "next/navigation";
import Popup from "./popup";
import { Tcategory, TImage } from "@/type/index.t";


const Gallery = () => {
  const [images, setImages] = useState<TImage[]>([]);
  const router = useRouter();
  const close = () => router.push("/");

  const params = useSearchParams();
  const category = params.get("category");
  const search = params.get("search");
  const popup = params.get("popup") ? true : false;

  useEffect(() => {
    const filtered = data.filter(
      (item) =>
        (search
          ? item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
          : true) && (category ? item.category === category : true)
    );
    setImages(filtered);
  }, [category, search]);

  const addNewImage = (name: string, category: Tcategory, file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const imgId = images.length.toString();
      const newImage = {
        id: imgId,
        name,
        category,
        url: e.target?.result as string,
        likes: 0,
        shares: 0,
      };
      setImages((prv) => [...prv, newImage]);
      close();
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="mt-3 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3  gap-2 sm:gap-3 md:gap-6 ">
      {popup && <Popup close={close} submit={addNewImage} />}
      {images.length > 0 ? (
        images.map((item) => <Card key={item.id} {...item} />)
      ) : (
        <div>
          <p className="text-slate-500 font-bold text-lg md:text-2xl text-center ">
            "Data Not Found"
          </p>
        </div>
      )}
    </div>
  );
};

export default Gallery;
