"use client";
import Link from "next/link";
import Logo from "./Logo";
import PrimaryButton from "../PrimaryButton";

const links = [
  { name: "home", href: "/" },
  { name: "features", href: "/features" },
  { name: "about", href: "/about" },
];

function Header() {
  return (
    <div className=" flex justify-between px-6 py-1">
      <div className="flex gap-8 px-10 py-2">
        <Logo />

        <div className=" flex capitalize overflow-hidden w-full justify-center items-center text-primary  rounded-xl px-10 ">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className=" relative group flex flex-col items-center hover:bg-stone-100 py-1.5 px-5 rounded-[0.3rem]"
            >
              <span className=" group-hover:text-[#6d28d2]">
                {link.name}
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div className=" flex gap-4 items-center rounded-xl justify-end w-full">
        <Link
          href={"/auth/login"}
          className=" group relative capitalize border border-primary rounded-lg px-6 py-1.5 text-primary tracking-wider text-[0.8rem] duration-500 flex items-center overflow-hidden "
        >
          <span className=" capitalize">log in</span>
          <span className=" absolute -left-6 group-hover:left-17 text-primary duration-500 ">
            →
          </span>
        </Link>

        <PrimaryButton href={"/auth/register"}>sign up</PrimaryButton>
      </div>
    </div>
  );
}

export default Header;
