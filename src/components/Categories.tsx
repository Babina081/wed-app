"use client";
import { eventServices } from "@/data/data";
import Link from "next/link";
import { useEffect, useState } from "react";
import Heading from "./Heading";

// Define the type for the event services (assuming it has name and imageUrl)
interface EventService {
  name: string;
  imageUrl: string;
}

const SkeletonCard = () => {
  return (
    <div className="border rounded-lg flex items-center flex-col animate-pulse bg-gray-200 h-48 w-full relative shadow-xl border-black/10">
      <div className="w-full h-full object-cover rounded-lg bg-gray-300"></div>
      <span className="absolute bottom-5 right-5 bg-gray-300 w-24 h-6 rounded-md"></span>
    </div>
  );
};

const Categories = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [imageLoaded, setImageLoaded] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Simulate loading delay
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleImageLoad = (categoryName: string) => {
    setImageLoaded((prevState) => ({
      ...prevState,
      [categoryName]: true,
    }));
  };

  return (
    <section
      className=" py-10
   px-10 flex items-center justify-center flex-col"
    >
      <Heading>Categories</Heading>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 w-full mt-4">
        {loading ? (
          // Show skeleton cards while loading
          Array(8)
            .fill(null)
            .map((_, index) => <SkeletonCard key={index} />)
        ) : (
          <>
            {eventServices.map((category: EventService) => (
              <Link
                href={`/services/${category.name}`}
                key={category.name}
                className="border rounded-lg gap-2 flex items-center flex-col hover:bg-slate-500/15  transition-all duration-300 ease-in-out cursor-pointer relative shadow-xl border-black/10 hover:scale-110  "
              >
                <img
                  src={category.imageUrl}
                  alt={category.name}
                  className={`w-full h-full object-cover rounded-lg bgCat ${
                    imageLoaded[category.name] ? "visible" : "invisible"
                  }`}
                  onLoad={() => handleImageLoad(category.name)}
                  style={{ transitionDelay: "0.2s" }}
                />

                {imageLoaded[category.name] && !loading && (
                  <span className="absolute bottom-2 right-2 sm:bottom-5  sm:right-5 text-gray-900 rounded-r-lg font-bold text-sm md:text-lg drop-shadow-lg amiko-bold">
                    {category.name}
                  </span>
                )}
              </Link>
            ))}
          </>
        )}
      </div>
    </section>
  );
};

export default Categories;
