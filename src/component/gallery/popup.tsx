"use client";

import { Tcategory } from "@/type/index.t";
import { useRouter } from "next/navigation";
import React, { FC, useState } from "react";

interface Props {
  submit: (name: string, category: Tcategory, file: File) => void;
  close: () => void
}

const Popup: FC<Props> = ({ submit, close }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState<File | null>(null);
 

  const handleChange = () => {
    if (name && category && file) submit(name, category as Tcategory, file);
    setName('')
    setCategory('photo')
    setFile(null)
  };

  return (
    <div className="w-full h-screen flex justify-center items-center absolute top-0 left-0 bg-slate-900/50 z-50">
      <div className="w-full max-w-md p-5 bg-slate-100 rounded-sm space-y-3">
        <div className="flex justify-between items-center">
          <h1 className="text-slate-700 font-semibold">Add new Image</h1>
          <button onClick={close} className="active:translate-y-0.5 text-slate-800">
            ❌
          </button>
        </div>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Image Name"
          className="w-full px-4 py-2  border-2 border-slate-400 bg-slate-200 focus:outline-none  text-slate-500"
        />
        <input
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          type="file"
          className="w-full"
        />
        <select
          onChange={(e) => setCategory(e.target.value)}
          name=""
          id=""
          className="w-full px-4 py-2 bg-slate-200 border-2 border-slate-400 focus:outline-none "
        >
          <option value="photo">Photo</option>
          <option value="vector">Vector</option>
        </select>
        <button
          onClick={handleChange}
          className="w-full font-bold text-xs md:text-base  px-3 md:px-5 py-2 gap-2 uppercase text-white bg-slate-700 hover:bg-slate-600 active:translate-y-0.5 rounded"
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default Popup;
