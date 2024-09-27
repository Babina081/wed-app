"use client";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import { eventCompaniesDetails } from "@/data/data";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaHeart, FaRegCheckSquare, FaRegHeart, FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { add, selectFavorites } from "@/redux/features/favoriteSlice";
import toast from "react-hot-toast";
import Review from "@/components/Review";

const ServiceIdPage = () => {
  const router = useRouter();
  const { serviceId, service } = useParams();
  console.log(service);

  const [isInFavorites, setIsInFavorites] = useState<boolean>(false);

  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites); // Assuming you have a selector for favorites

  // Ensure serviceId is treated as a string
  const decodedServiceId = decodeURIComponent(
    Array.isArray(serviceId) ? serviceId[0] : serviceId || ""
  );

  // Find the company from eventCompaniesDetails
  const company = eventCompaniesDetails.find(
    (company) => company.name.toLowerCase() === decodedServiceId.toLowerCase()
  );

  useEffect(() => {
    if (company) {
      setIsInFavorites(isFavorite(company.name));
    }
  }, [favorites, company]);

  // Check if the company is in favorites
  const isFavorite = (companyName: string) =>
    favorites.some((item) => item.name === companyName);

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

  const handleAddToFavorites = (company: {
    name: string;
    location: string;
  }) => {
    if (!isFavorite(company.name)) {
      dispatch(add({ ...company, service: service.toString() }));
      toast.success(`${company.name} has been added to favorites!`);
      setIsInFavorites(true);
    } else {
      toast.error(`${company.name} is already in your favorites.`);
    }
  };

  // Function to calculate average rating
  const calculateAverageRating = (reviews: Review[]) => {
    if (reviews.length === 0) return 0;
    const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
    return (totalRating / reviews.length).toFixed(1); // 1 decimal point
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
            <div className="w-full bg-gray-300  ">
              <Slider {...settings}>
                {company.images.map((image) => (
                  <img
                    key={image}
                    src={image}
                    alt={company.name}
                    className="w-full object-cover rounded-lg "
                  />
                ))}
              </Slider>
            </div>
            <div className="flex   justify-between items-center mt-7">
              <div className="flex flex-col ">
                <Heading>{company.name}</Heading>
                <p className="text-red-500 cookie-regular  text-2xl">
                  {company.category}
                </p>
              </div>
              <div className="flex flex-col md:flex-row gap-2 ">
                <Link href={`/services/${company.name}/${serviceId}/#reviews`}>
                  <Button color="white">View Reviews</Button>
                </Link>
                {isInFavorites ? (
                  <div className="flex flex-col md:flex-row gap-2">
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
                  <Button onClick={() => handleAddToFavorites(company)}>
                    <span className="flex gap-2 items-center justify-center">
                      <span>Add to Favorite</span> <FaRegHeart />{" "}
                    </span>
                  </Button>
                )}
              </div>
            </div>
            <div className="grid  grid-cols-3 gap-4 mt-4">
              <div className="col-span-3 md:col-span-2 gap-4">
                <div className="bg-slate-300/10 p-4 ">
                  <p className="tracking-wide mb-4 amiko-regular">
                    {company.description}
                  </p>
                  <Heading>Mission</Heading>
                  <p className="tracking-wide mb-4 amiko-regular">
                    {company.missionDescription}
                  </p>
                  <div className="w-full h-1 bg-slate-500 my-2"></div>
                  <ul className="flex flex-col md:flex-row gap-4 my-4 cookie-regular text-lg">
                    {company.services.map((service) => (
                      <li
                        key={service}
                        className="flex gap-2 items-center justify-center "
                      >
                        <FaRegCheckSquare />
                        {service}
                      </li>
                    ))}
                  </ul>
                  <div className="w-full h-1 bg-slate-500 my-2"></div>
                </div>
                <Review company={company}></Review>
              </div>
              <div className="col-span-3 md:col-span-1  bg-slate-300/10 p-4 flex flex-col items-center justify-start gap-2 h-min relative">
                <img
                  src="https://picsum.photos/200"
                  alt=""
                  className="rounded-full border border-black object-cover"
                />
                <Heading>{company.name}</Heading>
                <div className="bg-gray-600 px-2 rounded-lg flex items-center justify-center  gap-1 text-yellow-500 absolute top-4 right-4 drop-shadow-lg">
                  <span className=" font-bold">
                    {calculateAverageRating(company.reviews)}
                  </span>
                  <FaStar />
                </div>
                <p className="cookie-regular text-xl">{company.location}</p>
                <a
                  href={company.website}
                  className="text-blue-400 amiko-regular "
                >
                  {company.website}
                </a>
                <p className="amiko-regular ">Email:{company.email}</p>
                <p className="amiko-regular ">Phone: {company.phoneNumber}</p>
                <ul className="flex gap-2 mb-4">
                  {company.socials.map((social) => (
                    <li
                      key={social.type}
                      className="border p-1 rounded-lg border-gray-700 hover:border-gray-900"
                    >
                      <a
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.type}
                      >
                        <social.icon
                          className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
                          size={24}
                        />
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="border border-black/30 rounded-lg overflow-hidden flex  ">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.6815184257694!2d83.98369517544957!3d28.216987202829742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995944d76693d11%3A0xf1f006d89be13640!2sNew%20Rd%2C%20Pokhara%2033700!5e0!3m2!1sen!2snp!4v1725765119706!5m2!1sen!2snp"
                    title="Company Location"
                    className="w-full h-64 md:h-80"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        ))}
    </section>
  );
};

export default ServiceIdPage;
