import React from "react";
import Heading from "./Heading";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { testimonials } from "@/data/data";

const Testimonials = () => {
  return (
    <section
      className=" py-10
px-10 flex items-center justify-center flex-col h-screen"
    >
      <Heading>Testimonials</Heading>
      <p className="text-2xl text-gray-600 cookie-regular">
        Hear from our happy clients
      </p>
      <div className=" rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  );
};

export default Testimonials;
