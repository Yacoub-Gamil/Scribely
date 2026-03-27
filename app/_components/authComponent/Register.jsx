"use client";
import Image from "next/image";
import Input from "./Input";
import Link from "next/link";
import { IoIosEyeOff } from "react-icons/io";
import { IoIosEye } from "react-icons/io";
import { useState } from "react";

function Register() {
  const [showPassword, setShowPassword] = useState("password");
  const [showConfirmPassword, setShowConfirmPassword] = useState("password");

  return (
    <div className="flex h-full">
      <div className="relative w-full aspect-square rounded-xl mt-6">
        <Image
          src="/auth-bg.jpg"
          alt="auth background"
          fill
          quality={100}
          className="object-cover"
          priority
        />
      </div>
      <div className=" w-full h-full flex flex-col items-center">
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
            <Input type={"text"} required={true} placeholder={"name"} />
            <Input type={"email"} required={true} placeholder={"email"} />
            {/* Password  */}
            <div className=" relative w-full">
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
            {/* confirm password  */}
            <div className=" relative w-full">
              <Input
                type={showConfirmPassword}
                required={true}
                placeholder={"confirm password"}
              />
              {showConfirmPassword === "password" ? (
                <span
                  onClick={() => setShowConfirmPassword("text")}
                  className=" cursor-pointer absolute top-4 right-4"
                >
                  <IoIosEyeOff />
                </span>
              ) : (
                <span
                  onClick={() => setShowConfirmPassword("password")}
                  className=" cursor-pointer absolute top-4 right-4"
                >
                  <IoIosEye />
                </span>
              )}
            </div>
            <button
              type="submit"
              className=" bg-primary w-full text-white py-2 rounded-[0.3rem] cursor-pointer hover:bg-primary/95 transition-all duration-300"
            >
              Create new account
            </button>
          </form>
          {/* Or  */}
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
              className=""
            />

            <span className=" cursor-pointer w-full text-center capitalize text-primary ">
              continue with google
            </span>
          </button>

          <div className=" flex mt-6 text-[0.9rem] gap-1 bg-stone-100 w-full justify-center py-2 rounded-[0.3rem]">
            <p className=" opacity-50">Already have an account?</p>
            <Link
              href={"/auth/register"}
              className=" font-semibold text-primary"
            >
              {" "}
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
