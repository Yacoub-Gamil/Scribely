"use client";
import Image from "next/image";
import Input from "./Input";
import Link from "next/link";
import { IoIosEyeOff } from "react-icons/io";
import { IoIosEye } from "react-icons/io";

import authBg from "@/public/auth-bg.jpg";
import { useState } from "react";

function SignIn() {
  const [showPassword, setShowPassword] = useState("password");

  return (
    <div className="flex h-full">
      <div className="relative w-full aspect-square rounded-xl mt-6">
        <Image
          src={authBg}
          alt="auth background"
          fill
          quality={100}
          placeholder="blur"
          className="object-cover"
          priority
        />
      </div>
      <div className=" w-full h-full mt-14 flex flex-col items-center">
        <div className="relative w-15 h-15">
          <Image
            src="/logo-v-1.png"
            alt="auth background"
            fill
            quality={100}
            priority
          />
        </div>
        <div className=" w-[60%] flex flex-col items-center">
          <h1 className=" text-2xl tracking-wide max-w-[80%] text-center">
            Log in to continue your learning journey
          </h1>
          <form className=" w-full mt-6 flex  justify-center items-center flex-col gap-4">
            <Input type={"email"} required={true} placeholder={"email"} />
            <div className=" w-full relative">
              <Input
                type={showPassword}
                required={true}
                placeholder={"password"}
              />
              {showPassword === "password" ? (
                <span
                  onClick={() => setShowPassword("text")}
                  className=" cursor-pointer absolute top-4 right-4"
                >
                  <IoIosEyeOff />
                </span>
              ) : (
                <span
                  onClick={() => setShowPassword("password")}
                  className=" cursor-pointer absolute top-4 right-4"
                >
                  <IoIosEye />
                </span>
              )}
            </div>
            <Link
              href={"/forgot password"}
              className="self-start font-semibold text-xs text-primary"
            >
              Forgot password
            </Link>
            <button
              type="submit"
              className=" bg-primary w-full text-white py-2 rounded-[0.3rem] cursor-pointer hover:bg-primary/95 transition-all duration-300"
            >
              Log in
            </button>
          </form>

          <div className="w-full flex items-center mt-6 mb-4">
            <span className=" w-full h-px bg-stone-200"></span>
            <span className=" w-fit bg-white px-2 ">or</span>
            <span className=" w-full h-px bg-stone-200 "></span>
          </div>
          <button
            type="button"
            className=" w-full flex py-2 px-4 rounded-[0.3rem] border border-primary/50 transition-all duration-300 hover:bg-stone-50"
          >
            <Image
              alt="google-icon"
              src={"/google-icon.png"}
              width={25}
              height={0}
              priority
              className=""
            />

            <span className=" cursor-pointer w-full text-center capitalize text-primary ">
              continue with google
            </span>
          </button>

          <div className=" flex mt-6 text-[0.9rem] gap-1">
            <p className=" opacity-50">Don't have an account?</p>
            <Link
              href={"/auth/register"}
              className=" font-semibold text-primary"
            >
              {" "}
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
