import Button from "@/components/Button";
import Heading from "@/components/Heading";
import React from "react";

const FavoritePage = () => {
  return (
    <section
      className="py-20
   px-10 flex items-center justify-center flex-col bg-purple-100/40"
    >
      <Heading>My Favorite Shortlisted</Heading>
      <ul className="grid grid-cols-4 gap-4 ">
        <li className=" flex flex-col items-start justify-center border border-black rounded-lg p-2 gap-2">
          <img
            src="https://picsum.photos/200/200"
            alt="fav"
            className="rounded-lg w-full object-cover"
          />
          <Heading>Fots Factory</Heading>
          <p className="text-sm text-red-600">Photographers & Videographers</p>
          <p className="text-sm text-gray-600">Dhalku, Kathmandu</p>
          <div className="flex gap-2">
            <Button>View</Button>
            <Button>Remove</Button>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default FavoritePage;
