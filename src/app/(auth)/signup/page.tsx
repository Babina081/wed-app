import Link from "next/link";
import React from "react";
import SignupForm from "./SignupForm";

const SignUpPage = () => {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold sintony-bold text-purple-700 flex items-center justify-center gap-2">
        Sign up to{" "}
        <span className=" border py-1 px-2 rounded-xl bg-gradient-to-b from-purple-400 to-white  tracking-tighter uppercase cookie-regular shadow-md font-extrabold ">
          Wed App
        </span>
      </h1>
      {/* <p className="text-muted-foreground cookie-regular text-lg text-center">
        A place where <span className="italic">you</span> can bring your dream
        to reality.
      </p> */}
      <div className="space-y-5">
        <SignupForm></SignupForm>
        <Link
          href="/login"
          className="block text-center hover:underline amiko-regular "
        >
          Already have an account? Log in
        </Link>
      </div>
    </div>
  );
};

export default SignUpPage;
