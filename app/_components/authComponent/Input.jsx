"use client";
import { IoIosEyeOff } from "react-icons/io";

function Input({ type, placeholder, required }) {
  return (
    <div className="w-full">
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        className="  relative border border-primary/50 outline-0 w-full px-6 py-3 rounded-[0.3rem] placeholder:font-semibold placeholder:text-black placeholder:capitalize placeholder:text-[0.8rem]"
      />
    </div>
  );
}

export default Input;
