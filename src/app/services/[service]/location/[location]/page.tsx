"use client";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import { eventCompanies } from "@/utils/data";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";

const LocationPage = () => {
  const router = useRouter();
  const { location } = useParams<{ location: string }>();
  const { service } = useParams<{ service: string }>();

  // Decode the URL-encoded service name and replace dashes with spaces
  const decodedService = decodeURIComponent(service.replace(/-/g, " "));
  const decodedLocation = decodeURIComponent(location.replace(/-/g, " "));

  // Capitalize each word
  const capitalizeWords = (text: string): string =>
    text.replace(/\b\w/g, (char) => char.toUpperCase());

  const displayService = capitalizeWords(decodedService);
  const displayLocation = capitalizeWords(decodedLocation);

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

  // Filter by the selected service and location
  const filteredCompanies = eventCompanies.filter(
    (company) =>
      company.category.toLowerCase() === decodedService.toLowerCase() &&
      company.location.toLowerCase() === decodedLocation.toLowerCase()
  );

  return (
    <section className="flex flex-col py-10 px-10 items-center justify-center gap-4 relative">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3  gap-4 w-full mt-4 text-center xl:text-left  ">
        <div className=" ">
          <Button
            color="red"
            onClick={() => router.push(`/services/${service}`)}
          >
            <span className="flex gap-2 items-center justify-center">
              <IoMdArrowRoundBack /> Show All {displayService}
            </span>
          </Button>
        </div>
        <Heading>
          Listing {displayService} in {displayLocation} Nepal
        </Heading>
        <div></div>
      </div>
      <div className="flex gap-2 items-center justify-center">
        {filteredCompanies.length > 0 ? (
          <>
            <h1>Location:</h1>
            <ul className="flex gap-2">
              {uniqueLocations.map((location, index) => {
                return (
                  <Link
                    href={`/services/${service}/location/${location}`}
                    key={index}
                    className="border rounded-lg list-none gap-2 py-1 px-4 hover:bg-gray-300 transition-all duration-300 ease-out"
                  >
                    {location}
                  </Link>
                );
              })}
            </ul>
          </>
        ) : (
          <></>
        )}
      </div>

      <ul className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 w-full mt-4">
        {filteredCompanies.length > 0 ? (
          filteredCompanies.map((company) => (
            <Link
              href={`/services/${service}/${company.name}`}
              key={company.name}
              className="border p-3 rounded-lg gap-2 flex items-center flex-col hover:bg-slate-500/15 transition-all duration-300 ease-in-out cursor-pointer relative"
            >
              {company.isFeatured && (
                <div className="absolute top-5 left-0  bg-yellow-200 text-black p-2 rounded-r-lg font-bold text-lg ">
                  Featured
                </div>
              )}
              <img
                src="https://picsum.photos/200"
                alt={company.name}
                className={`w-full h-full object-cover rounded-lg ${
                  company.isFeatured ? "border-4 border-yellow-300" : ""
                }`}
              />
              <Heading>{company.name}</Heading>
              <p>{company.location}</p>
            </Link>
          ))
        ) : (
          <div className="col-span-4 text-center  ">
            <div className="m-10 ">
              <span className="text-red-200 border p-2 rounded-lg ">
                No companies found for this service in the selected location.{" "}
              </span>
            </div>
          </div>
        )}
      </ul>
    </section>
  );
};

export default LocationPage;
