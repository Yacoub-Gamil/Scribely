"use client";
import Image from "next/image";

function Logo() {
  return (
    <div className=" flex items-center gap-1">
      <div className="w-full">
        <Image
          alt="logo"
          src={"/logo-v-1.png"}
          width={40}
          height={40}
          quality={100}
        />
      </div>
      <h1 className=" font-extrabold uppercase text-[1.2rem] text-white">
        scribely
      </h1>
    </div>
  );
}

export default Logo;
