import React from "react";
import Heading from "./Heading";
import { eventCompanies } from "@/data/data";
import Link from "next/link";

const Featured = () => {
  return (
    <section
      className=" py-10
 px-10 flex items-center justify-center flex-col h-screen"
    >
      <Heading>Featured</Heading>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 w-full mt-4">
        {eventCompanies
          .filter((company) => company.isFeatured)
          .slice(0, 4)
          .map((company) => (
            <Link
              href={`/services/${company.category}/${company.name}`}
              key={company.name}
              className="border p-3 rounded-lg gap-2 flex items-center flex-col hover:bg-slate-500/15 transition-all duration-300 ease-in-out cursor-pointer relative  shadow-lg"
            >
              {company.isFeatured && (
                <div className="absolute top-5 left-0  bg-yellow-200 text-black p-2 rounded-r-full px-4 font-bold text-lg cookie-regular border-r border-yellow-700/20 drop-shadow-lg">
                  Featured
                </div>
              )}
              <img
                src="https://picsum.photos/200"
                alt={company.name}
                className="w-full h-full object-cover rounded-lg"
              />
              <Heading>{company.name}</Heading>
              <p className="text-sm text-gray-600 amiko-regular">
                {company.location}
              </p>
            </Link>
          ))}
      </div>
    </section>
  );
};

export default Featured;
