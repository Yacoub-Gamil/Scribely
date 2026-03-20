"use client";
import Link from "next/link";
import Logo from "./Logo";
import { IoHome } from "react-icons/io5";
import { FaHandHoldingWater } from "react-icons/fa";
import { HiInformationCircle } from "react-icons/hi2";
import { MdOutlineArrowRight } from "react-icons/md";

const links = [
  { name: "home", href: "/", icon: <IoHome /> },
  { name: "features", href: "/features", icon: <FaHandHoldingWater /> },
  { name: "about", href: "/about", icon: <HiInformationCircle /> },
];

function Header() {
  return (
    <div className=" w-full bg-white py-1 flex items-center justify-between px-14">
      <div className=" -mx-8 flex items-center justify-between gap-20 bg-[#252947] px-10 py-2 rounded-xl overflow-hidden w-2/4">
        <Logo />

        <div className=" flex gap-6 capitalize text-stone-50 ">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className=" relative group flex flex-col items-center duration-300"
            >
              <span className=" top-1 group-hover:text-[#aaf7c2] duration-300 text-[1.2rem] group-hover:shadow-[0px_0px_4px_0px_#aaf7c2] rounded-lg ">
                {link.icon}
              </span>
              <span className=" text-[0.8rem] tracking-wider">{link.name}</span>
              <span className=" absolute -bottom-6.5 group-hover:-bottom-3.5 text-[#aaf7c2] rounded-full duration-300 -rotate-90 text-[1.4rem] ">
                <MdOutlineArrowRight />
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div className=" flex gap-4 items-center w-full justify-end -mx-8">
        <Link
          href={"/login"}
          className=" group relative capitalize border border-[#252947] rounded-lg px-6 py-2 text-[#252947] font-semibold tracking-wider text-[0.9rem] duration-500  flex items-center overflow-hidden "
        >
          <span className=" text-3xl absolute -left-[12.5px] group-hover:left-0 duration-400">
            <MdOutlineArrowRight />
          </span>

          <span className=" text-3xl absolute -right-[12.5px] group-hover:right-0 duration-300 rotate-180">
            <MdOutlineArrowRight />
          </span>

          <span className=" capitalize">log in</span>
        </Link>

        <Link
          href={"/sign up"}
          className=" group relative capitalize cursor-pointer border border-[#252947] bg-[#252947] text-stone-50 px-8 py-2 rounded-lg font-semibold duration-500 text-[0.9rem] flex items-center justify-center"
        >
          <span className=" text-2xl absolute -left-2.75 group-hover:left-3 duration-300">
            <MdOutlineArrowRight />
          </span>

          <span className=" text-2xl absolute -right-2.75 group-hover:right-3 duration-300 rotate-180">
            <MdOutlineArrowRight />
          </span>

          <span className="">sign up</span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
