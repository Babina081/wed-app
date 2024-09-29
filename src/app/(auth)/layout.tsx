import wedImage from "@/assets/auth-wed-image.jpg";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineCancel } from "react-icons/md";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex h-screen items-center justify-center p-5 bg-gradient-to-br from-purple-200 to-white">
      <div className="flex h-full max-h-[40rem] w-full max-w-[64rem] overflow-hidden rounded-2xl bg-card shadow-2xl relative bg-white">
        {
          <div className="w-full space-y-10 overflow-y-auto p-10 md:w-1/2 relative">
            {children}
          </div>
        }

        <div className="w-1/2 relative hidden md:block">
          <Image
            src={wedImage}
            alt=""
            className=" object-cover  opacity-85  h-full "
          ></Image>
          <div className="absolute inset-0 bg-black opacity-40 " />

          <h2 className="z-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white  font-bold text-7xl cookie-regular w-full text-center">
            Connecting Hearts, <br />
            Creating Happiness!
          </h2>
        </div>
        <Link href="/" className="absolute top-3 right-3 ">
          <MdOutlineCancel className="size-8 text-gray-500 md:text-white  hover:text-red-400 cursor-pointer transition-all duration-300 ease-in-out " />
        </Link>
      </div>
    </main>
  );
};

export default AuthLayout;
