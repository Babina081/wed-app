"use client";
import React, { useState } from "react";
import Heading from "./Heading";
import { eventCompanies } from "@/data/data";
import Button from "./Button";
import { useRouter } from "next/navigation";

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

  return (
    <section
      className="bg-gradient-to-b from-purple-200 to-white min-h-[60vh] py-4
   px-10 flex flex-col items-center justify-center text-center"
    >
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
    </section>
  );
};

export default Banner;
