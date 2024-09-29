"use client";
import Heading from "@/components/Heading";
import { eventCompanies } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useState } from "react";

const ServicePage = () => {
  const { service } = useParams<{ service: string }>();

  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  const handleLocationSelect = (location: string | null) => {
    setSelectedLocation(location);
  };

  // Decode the URL-encoded service name and replace dashes with spaces
  const decodedService = decodeURIComponent(service.replace(/-/g, " "));

  // Capitalize each word
  const capitalizeWords = (text: string): string =>
    text.replace(/\b\w/g, (char) => char.toUpperCase());

  const displayService = capitalizeWords(decodedService);

  // Filter by the selected service and extract unique locations
  const uniqueLocations = Array.from(
    new Set(
      eventCompanies
        .filter(
          (company) =>
            company.category.toLowerCase() === decodedService.toLowerCase()
        )
        .map((company) => company.location)
    )
  );

  return (
    <section className="flex flex-col py-10 px-10 items-center justify-center gap-4 h-full">
      <Heading>Listing {displayService} in Nepal</Heading>
      <div className="flex gap-2 items-center justify-center">
        <h1 className="amiko-regular ">Location:</h1>
        <ul className="flex gap-2">
          <Link
            href={`/services/${service}`}
            onClick={() => handleLocationSelect(null)}
            className={`border rounded-lg list-none gap-2 py-1 px-4 hover:bg-gray-300 transition-all duration-300 ease-out cookie-regular text-xl  ${
              selectedLocation === null
                ? "bg-yellow-300 hover:bg-yellow-300"
                : ""
            }`}
          >
            All
          </Link>
          {uniqueLocations.map((location, index) => {
            return (
              <Link
                href={`/services/${service}/location/${location}`}
                key={index}
                className="border rounded-lg list-none gap-2 py-1 px-4 hover:bg-gray-300 transition-all duration-300 ease-out cookie-regular text-xl "
              >
                {location}
              </Link>
            );
          })}
        </ul>
      </div>

      <ul className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 w-full mt-4">
        {eventCompanies
          // Filter by dynamic service instead of hardcoded "Photographers"
          .filter(
            (company) =>
              company.category.toLowerCase() === decodedService.toLowerCase()
          )
          .map((company) => (
            <Link
              href={`/services/${service}/${company.name}`}
              key={company.name}
              className="border p-3 rounded-lg gap-2 flex items-center flex-col hover:bg-slate-500/15 transition-all duration-300 ease-in-out cursor-pointer relative  shadow-lg"
            >
              {company.isFeatured && (
                <div className="absolute top-5 left-0  bg-yellow-200 text-black p-2 rounded-r-full px-4 font-bold text-lg cookie-regular border-r border-yellow-700/20 drop-shadow-lg">
                  Featured
                </div>
              )}
              <Image
                height={200}
                width={200}
                src="https://picsum.photos/200"
                alt={company.name}
                className={`w-full h-full object-cover rounded-lg `}
              />
              <Heading>{company.name}</Heading>
              <p className="amiko-semibold">{company.location}</p>
            </Link>
          ))}
      </ul>
    </section>
  );
};

export default ServicePage;
