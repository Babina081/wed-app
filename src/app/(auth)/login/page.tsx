import React from "react";
import LoginForm from "./LoginForm";
import Link from "next/link";

const LoginPage = () => {
  return (
    <>
      {" "}
      <h1 className="text-center text-3xl font-bold sintony-bold text-purple-700 flex items-center justify-center gap-2">
        Login to{" "}
        <span className=" border py-1 px-2 rounded-xl bg-gradient-to-b from-purple-400 to-white  tracking-tighter uppercase cookie-regular shadow-md font-extrabold ">
          Wed App
        </span>
      </h1>
      <div className="space-y-5">
        <LoginForm></LoginForm>
        <Link
          href="/signup"
          className="block text-center hover:underline amiko-regular "
        >
          Don&apos;t have an account? Sign Up
        </Link>
      </div>
    </>
  );
};

export default LoginPage;
