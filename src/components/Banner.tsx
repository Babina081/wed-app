"use client";
import img1 from "@/assets/flower1.png";
import img2 from "@/assets/flower2.png";
import img3 from "@/assets/flower3.png";
import { eventCompanies } from "@/data/data";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "./Button";
import Heading from "./Heading";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const Banner = () => {
  const router = useRouter(); // Initialize useRouter hook
  // Extract unique categories and locations for dropdowns
  const categories = Array.from(
    new Set(eventCompanies.map((company) => company.category))
  );
  const locations = Array.from(
    new Set(eventCompanies.map((company) => company.location))
  );

  // Initialize state with the first item from the arrays, if available
  const [selectedCategory, setSelectedCategory] = useState(categories[0] || "");
  const [selectedLocation, setSelectedLocation] = useState(locations[0] || "");

  // Handle search button click
  const handleSearch = () => {
    // Redirect to the desired URL
    router.push(`/services/${selectedCategory}/location/${selectedLocation}`);
  };

  // Framer Motion: Parallax effect
  const { scrollY } = useScroll();
  // Adjusted values for more dramatic downward scroll
  const y1 = useTransform(scrollY, [0, 1500], [0, -400]); // Increased downward movement
  const y2 = useTransform(scrollY, [0, 1500], [0, -300]); // Increased downward movement

  // Define rotation effect with faster rotation
  const rotate1 = useTransform(scrollY, [0, 600], [0, 720]); // Rotate two full circles (720 degrees) quickly
  const rotate2 = useTransform(scrollY, [0, 600], [0, 360]); // Rotate one full circle (360 degrees) quickly

  return (
    <section
      className="bg-gradient-to-b from-purple-200 to-white min-h-[60vh] py-4
   px-10 flex flex-col items-center justify-center text-center relative"
    >
      <Image
        src={img1}
        alt="img1"
        className="size-28 absolute top-0 right-0 object-cover "
      ></Image>
      <motion.img
        src={img2.src}
        alt="img1"
        style={{ y: y1, rotate: rotate1 }}
        className="size-16 absolute -bottom-10 left-1/3 object-cover "
      ></motion.img>
      <motion.img
        src={img2.src}
        alt="img2"
        style={{ y: y2, rotate: rotate2 }}
        className="size-16 absolute bottom-16 right-1/3 object-cover"
      />
      <motion.img
        src={img2.src}
        alt="img2"
        style={{ y: y1, rotate: rotate1 }}
        className="size-16 absolute top-14 left-1/2 object-cover"
      />
      <Image
        src={img3}
        alt="img1"
        className="size-28 absolute top-0 left-0 object-cover "
      ></Image>
      <Image
        src={img1}
        alt="img1"
        className="size-28 absolute bottom-0 left-0 object-cover rotate-180 "
      ></Image>
      <Image
        src={img3}
        alt="img1"
        className="size-28 absolute bottom-0 right-0 object-cover rotate-180 "
      ></Image>
      <div className="z-10 flex items-center flex-col justify-center">
        <Heading> Lets find a team for your events and celebrations</Heading>
        <p className="text-2xl text-gray-600 cookie-regular">
          Discover the best photographers, videographers, boutiques, make-up
          artists, event planners and more
        </p>
        {/* Search bar */}
        <div className="mt-4 flex flex-col md:flex-row gap-2 amiko-semibold">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border p-2  rounded-lg  border-black/10 shadow-sm  "
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="border p-2 rounded-lg border-black/10 shadow-sm "
          >
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
          <Button onClick={handleSearch}>Search</Button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
