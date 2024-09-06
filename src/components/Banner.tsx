import React from "react";
import Heading from "./Heading";

const Banner = () => {
  return (
    <section
      className="bg-purple-200 h-[60vh] py-4
   px-10 flex flex-col items-center justify-center text-center"
    >
      <Heading> Lets find a team for your events and celebrations</Heading>
      <p className="text-xl text-gray-600">
        Discover the best photographers, videographers, boutiques, make-up
        artists, event planners and more
      </p>
      {/* input search */}
    </section>
  );
};

export default Banner;
