"use client";
import Link from "next/link";

function PrimaryButton({ href, children }) {
  return (
    <Link
      href={href}
      className=" group relative capitalize cursor-pointer border border-primary bg-primary text-stone-50 px-8 py-1.5 rounded-[0.3rem] duration-500 text-[0.8rem] flex items-center justify-center overflow-hidden"
    >
      <span
        className={`w-full absolute -left-6 group-hover:left-[80%] text-white duration-500 group-hover:text-white `}
      >
        →
      </span>
      <span className="">{children}</span>
    </Link>
  );
}

export default PrimaryButton;
