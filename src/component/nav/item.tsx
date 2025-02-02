import Link from "next/link";
import { FC } from "react";

type TProps = { label: string; url: string };
export const Item: FC<TProps> = ({ url, label }) => (
  <Link
    href={url}
    className="inline-block p-2 px-2 sm:px-4 text-xs sm:text-lg  font-bold uppercase text-slate-800  active:translate-y-0.5"
  >
    {label}
  </Link>
);