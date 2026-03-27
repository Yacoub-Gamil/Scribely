"use client";
import Image from "next/image";
import Link from "next/link";

import logoImage from "@/public/logo-v-1.png";

function Logo() {
  return (
    <Link href={"/"} className=" flex items-center gap-1">
      <div className="w-full">
        <Image
          alt="logo"
          src={logoImage}
          width={150}
          height={35}
          quality={100}
          placeholder="blur"
          priority
        />
      </div>
      <h1 className=" font-extrabold uppercase text-[1.2rem] text-primary">
        scribely
      </h1>
    </Link>
  );
}

export default Logo;
