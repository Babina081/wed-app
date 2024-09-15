"use client";
import React, { useEffect, useState } from "react";
import Heading from "./Heading";
import { spotlightServices } from "@/data/data";
import Link from "next/link";
import LoadingSpinner from "./LoadingSpinner";

const Spotlight = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <section
      className="py-20
   px-10 flex items-center justify-center flex-col bg-purple-100/40 "
    >
      <Heading>In the Spotlight</Heading>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 w-full mt-4">
        {spotlightServices.map((spotlight) => (
          <Link
            href={`/services/${spotlight.category}/${spotlight.name}`}
            key={spotlight.name}
            className="border p-3 rounded-lg gap-2 flex items-center  flex-col hover:bg-slate-500/15  transition-all duration-300 ease-in-out cursor-pointer "
          >
            {loading ? (
              <LoadingSpinner />
            ) : (
              <>
                <div className="relative mb-4">
                  <img
                    src={spotlight.image}
                    alt={spotlight.name}
                    className="w-full h-full   object-cover rounded-lg"
                  />
                  <div className="h-10 w-10 rounded-full p-2 bg-white border-2  border-black flex items-center justify-center absolute right-5 -bottom-5 z-0 cookie-regular">
                    {spotlight.rank}
                  </div>
                </div>
                <Heading>{spotlight.name}</Heading>
                <p className="text-xl text-red-600 cookie-regular">
                  {spotlight.category}
                </p>
                <p className="text-sm text-gray-600 amiko-regular">
                  {spotlight.location}
                </p>
                <ul className="w-full grid  grid-cols-2 gap-2 amiko-regular">
                  {spotlight.tags.map((tag) => (
                    <li
                      key={tag.label}
                      className="flex flex-col items-center justify-start border rounded-lg p-2 text-center gap-1"
                    >
                      <tag.icon className="inline-block mr-2 h-5 w-5" />
                      <div className="text-xs">{tag.label}</div>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Spotlight;
