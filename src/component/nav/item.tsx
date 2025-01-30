import Link from "next/link";
import { FC } from "react";

type TProps = { label: string; url: string };
export const Item: FC<TProps> = ({ url, label }) => (
  <Link
    href={url}
    className="inline-block p-2 text-lg uppercase text-slate-800  active:translate-y-0.5"
  >
    {label}
  </Link>
);