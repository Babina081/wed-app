"use client";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import { eventCompaniesDetails } from "@/utils/data";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
import { FaRegCheckSquare } from "react-icons/fa";

const ServiceIdPage = () => {
  const { serviceId } = useParams();
  // Ensure serviceId is treated as a string
  const decodedServiceId = decodeURIComponent(
    Array.isArray(serviceId) ? serviceId[0] : serviceId || ""
  );
  return (
    <section className="flex flex-col gap-2 justify-between">
      {eventCompaniesDetails
        .filter(
          (company) =>
            company.name.toLowerCase() === decodedServiceId.toLowerCase()
        )
        .map((company) => (
          <div key={company.name} className="py-10 px-10">
            <div className="flex justify-between items-center">
              <div className="flex flex-col ">
                <Heading>{company.name}</Heading>
                <p className="text-red-500">{company.category}</p>
              </div>
              <div className="flex gap-2">
                <Link href={`/services/${company.name}/${serviceId}/#reviews`}>
                  <Button>View Reviews</Button>
                </Link>
                <Button>Add to Favorite ❤️ </Button>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 mt-4">
              <div className="bg-slate-300 p-4 col-span-2">
                <p>{company.description}</p>
                <h2>Mission</h2>
                <p>{company.missionDescription}</p>
                <div className="w-full h-1 bg-slate-500 my-2"></div>
                <ul className="flex gap-4">
                  {company.services.map((service) => (
                    <li
                      key={service}
                      className="flex gap-2 items-center justify-center"
                    >
                      <FaRegCheckSquare />
                      {service}
                    </li>
                  ))}
                </ul>
                <div className="w-full h-1 bg-slate-500 my-2"></div>
                <div id="reviews">
                  <Heading>Recommendations and Reviews</Heading>
                  <Button>Write your own review</Button>
                </div>
              </div>
              <div className="col-span-1">
                <p>{company.description}</p>
              </div>
            </div>
          </div>
        ))}
    </section>
  );
};

export default ServiceIdPage;
