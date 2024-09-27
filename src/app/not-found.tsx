"use client";
import Image from "next/image";
import React from "react";
import emptyImage from "../assets/not-found.svg";
const NotFound = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Image src={emptyImage} alt="not found" className="size-64"></Image>
    </div>
  );
};

export default NotFound;
