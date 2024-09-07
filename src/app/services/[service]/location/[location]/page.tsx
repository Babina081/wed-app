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
      <Heading>
        Listing {displayService} in {displayLocation} Nepal
      </Heading>
      <div className="absolute top-10 left-10 ">
        <Button color="red" onClick={() => router.push(`/services/${service}`)}>
          <span className="flex gap-2 items-center justify-center">
            <IoMdArrowRoundBack /> Show All {displayService}
          </span>
        </Button>
      </div>
      <div className="flex gap-2 items-center justify-center">
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
      </div>

      <ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 w-full mt-4">
        {filteredCompanies.length > 0 ? (
          filteredCompanies.map((company) => (
            <Link
              href={`/services/${service}/${company.name}`}
              key={company.name}
              className="border p-3 rounded-lg gap-2 flex items-center flex-col hover:bg-slate-500/15 transition-all duration-300 ease-in-out cursor-pointer"
            >
              <img
                src="https://picsum.photos/200"
                alt={company.name}
                className="w-full h-full object-cover rounded-lg"
              />
              <Heading>{company.name}</Heading>
              <p>{company.location}</p>
            </Link>
          ))
        ) : (
          <p>No companies found for this service in the selected location.</p>
        )}
      </ul>
    </section>
  );
};

export default LocationPage;
