"use client";

import Image from "next/image";
import PrimaryButton from "./PrimaryButton";

function Home() {
  return (
    <div className=" relative w-full flex justify-center h-[90vh] items-center ">
      <div className=" absolute left-0 top-6">
        <Image
          alt="note"
          src={"/bg-1.png"}
          width={230}
          height={250}
          quality={100}
        />
      </div>
      <div className=" absolute right-0 top-10">
        <Image
          alt="note"
          src={"/bg-2.png"}
          width={250}
          height={250}
          quality={100}
        />
      </div>
      <div className=" absolute bottom-0 right-10">
        <Image
          alt="note"
          src={"/bg-4.png"}
          width={340}
          height={250}
          quality={100}
        />
      </div>
      <div className=" absolute bottom-0 left-10">
        <Image
          alt="note"
          src={"/bg-3.png"}
          width={340}
          height={250}
          quality={100}
        />
      </div>
      <div className=" flex flex-col items-center">
        <Image
          alt="logo"
          src={"/logo-v-1.png"}
          width={85}
          height={85}
          quality={100}
        />
        <h1 className=" text-4xl font-extrabold text-primary">SCRIBELY</h1>
        <h2 className=" text-xl -mt-2 tracking-wider ">
          Write while you watch
        </h2>
        <p className=" capitalize tracking-wide opacity-80 text-5xl text-center mt-6">
          think, plan, and track
        </p>
        <p className=" text-primary/60  text-4xl "> all in one place</p>
        <p className=" mt-10 text-[0.9rem] mb-6">
          Efficiently manage your tasks and boost productivity
        </p>
        <PrimaryButton href={"/"}>Start for free</PrimaryButton>
      </div>
    </div>
  );
}

export default Home;
