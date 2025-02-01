import Image from "next/image";
import React, { FC } from "react";
import { LikeIcon } from "../icons";
import { TImage } from "@/type/index.t";



const Card:FC<TImage> = (props) => {
  const{id,name,url,likes,shares}=props || {};

  return (
    <figure className="w-fit relative group overflow-hidden rounded mx-auto ">
      <Image
        alt={name}
        src={url}
        width={400}
        height={400}
        className="w-full h-auto max-w-sm group-hover:scale-105 transition-all duration-200"
      />
      <figcaption className="w-full absolute :-bottom-20 left-0 flex justify-between items-center bg-slate-900/30 text-white gap-1.5 p-3 invisible group-hover:visible group-hover:bottom-0 transition-all duration-200 ">
        <div className="space-y-1 sm:space-y-2">
          <p className="text-[10px] md:text-lg font-bold">{name}</p>
          <p className="text-[9px]">{likes} Likes | {shares} Shares</p>
        </div>
        <button>
          <LikeIcon />
        </button>
      </figcaption>
    </figure>
  );
};

export default Card;
