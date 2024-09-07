"use client";
import React, { useEffect, useState } from "react";
import Heading from "./Heading";
import { eventServices } from "@/utils/data";
import Link from "next/link";
import LoadingSpinner from "./LoadingSpinner";

const Categories = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);
  
  return (
    <section
      className=" py-10
   px-10 flex items-center justify-center flex-col"
    >
      <Heading>Categories</Heading>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 w-full mt-4">
        {eventServices.map((category) => (
          <Link
            href={`/services/${category.name}`}
            key={category.name}
            className="border p-3 rounded-lg gap-2 flex items-center flex-col hover:bg-slate-500/15  transition-all duration-300 ease-in-out cursor-pointer"
          >
            {loading ? (
              <LoadingSpinner />
            ) : (
              <>
                <img
                  src={category.imageUrl}
                  alt={category.name}
                  className="w-full h-full object-cover rounded-lg"
                />
                <span>{category.name}</span>
              </>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
