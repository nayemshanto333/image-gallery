import Image from "next/image";
import React, { FC, useEffect, useState } from "react";
import { TImage } from "@/type/index.t";
import {  LikeIcon, LikedIcon  } from "../icons";

const Card: FC<TImage> = (props) => {
  const { name, url, likes, shares } = props || {};
  const [totlaLikes, setTolatLikes] = useState(likes);
  const [save, setSave] = useState(false);

  const updateLikes = (issave: boolean) => {
    setSave(issave);
    setTolatLikes((prev) => (issave ? prev + 1 : prev - 1));
    
  };

  return (
    <figure className="w-full relative group overflow-hidden rounded mx-auto ">
      <Image
        alt={name}
        src={url}
        width={400}
        height={400}
        className="w-full object-cover h-[400px] max-w-md group-hover:scale-105 transition-all duration-200"
      />
      <figcaption className="w-full absolute :-bottom-20 left-0 flex justify-between items-center bg-slate-900/30 text-white gap-1.5 p-3 invisible group-hover:visible group-hover:bottom-0 transition-all duration-200 ">
        <div className="space-y-1 sm:space-y-2">
          <p className="text-lg font-bold">{name}</p>
          <p>
            {totlaLikes} Likes | {shares} Shares
          </p>
        </div>
        <button onClick={() => updateLikes(!save)}>
          {save ? <LikedIcon/> : <LikeIcon />}
        </button>
      </figcaption>
    </figure>
  );
};

export default Card;

