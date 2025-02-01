import Link from "next/link";
import { Item } from "./item";


const Navbar = () => (
  <nav className="flex justify-end w-full mb-10 pb-4 border-b-2 border-slate-500 items-end ">
    <Link
      href="/"
      className=" text-2xl md:text-4xl lg:text-5xl px-2 sm:px-4 py-1 sm:py-2 mr-auto text-slate-700 font-bold  uppercase tracking-widest visited:text-slate-700 border-4 border-slate-700 shadow-lg active:translate-y-0.5 transition-all duration-150 rounded"
    >
      Gellery
    </Link>
    {NavItems.map((items, i) => (
      <Item key={i} {...items} />
    ))}
  </nav>
);

export default Navbar;

const NavItems = [
  { url: "/?category=photo", label: "photo" },
  { url: "", label: "|" },
  { url: "/?category=vector", label: "vector" },
];
