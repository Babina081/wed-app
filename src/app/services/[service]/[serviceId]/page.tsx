"use client";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import { eventCompaniesDetails } from "@/utils/data";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import { FaHeart, FaRegCheckSquare, FaRegHeart } from "react-icons/fa";

const ServiceIdPage = () => {
  const router = useRouter();
  const { serviceId } = useParams();
  // Ensure serviceId is treated as a string
  const decodedServiceId = decodeURIComponent(
    Array.isArray(serviceId) ? serviceId[0] : serviceId || ""
  );

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="flex flex-col gap-2 justify-between">
      {eventCompaniesDetails
        .filter(
          (company) =>
            company.name.toLowerCase() === decodedServiceId.toLowerCase()
        )
        .map((company) => (
          <div key={company.name} className="py-10 px-10">
            <div className="w-full bg-gray-300 ">
              <Slider {...settings}>
                {company.images.map((image) => (
                  <img
                    key={image}
                    src={image}
                    alt={company.name}
                    className="w-full object-cover rounded-lg"
                  />
                ))}
              </Slider>
            </div>
            <div className="flex flex-col md:flex-row  justify-between items-center mt-7">
              <div className="flex flex-col ">
                <Heading>{company.name}</Heading>
                <p className="text-red-500">{company.category}</p>
              </div>
              <div className="flex gap-2 ">
                <Link href={`/services/${company.name}/${serviceId}/#reviews`}>
                  <Button color="white">View Reviews</Button>
                </Link>
                {company.isFav === true ? (
                  <div className="flex gap-2">
                    <Button color="yellow" disabled>
                      <span className="flex gap-2 items-center justify-center ">
                        <span>In Favorite</span>{" "}
                        <span>
                          <FaHeart />
                        </span>
                      </span>
                    </Button>
                    <Button
                      color="green"
                      onClick={() => {
                        router.push("/favorites");
                      }}
                    >
                      View Favorites
                    </Button>
                  </div>
                ) : (
                  <Button>
                    <span className="flex gap-2 items-center justify-center">
                      <span>Add to Favorite</span> <FaRegHeart />{" "}
                    </span>
                  </Button>
                )}
              </div>
            </div>
            <div className="grid  grid-cols-3 gap-4 mt-4">
              <div className="bg-slate-300/10 p-4 col-span-3 md:col-span-2">
                <p className="tracking-wide mb-4">{company.description}</p>
                <Heading>Mission</Heading>
                <p className="tracking-wide mb-4">
                  {company.missionDescription}
                </p>
                <div className="w-full h-1 bg-slate-500 my-2"></div>
                <ul className="flex gap-4 my-4">
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
                <div id="reviews" className="flex flex-col gap-4">
                  <Heading>Recommendations and Reviews</Heading>
                  <Button>Write your own review</Button>
                </div>
              </div>
              <div className="col-span-1 bg-slate-300/10 p-4 hidden md:flex flex-col items-center justify-start gap-2 h-min">
                <img
                  src="https://picsum.photos/200"
                  alt=""
                  className="rounded-full border border-black object-cover"
                />
                <Heading>{company.name}</Heading>
                <p>{company.location}</p>
                <a href={company.website} className="text-blue-400">
                  {company.website}
                </a>
                <p>Email:{company.email}</p>
                <p>Phone: {company.phoneNumber}</p>
              </div>
            </div>
          </div>
        ))}
    </section>
  );
};

export default ServiceIdPage;
