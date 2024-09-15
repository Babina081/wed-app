"use client";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import { remove, selectFavorites } from "@/redux/features/favoriteSlice";
import { RootState } from "@/redux/store/store";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const FavoritePage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  // Get favorite items from the Redux store
  const favorites = useSelector((state: RootState) => selectFavorites(state));

  const handleRemove = (name: string) => {
    dispatch(remove(name));
    toast.success(`${name} has been removed from favorites!`);
  };
  return (
    <section
      className="py-10
   px-10 flex items-center justify-center flex-col  gap-4 h-full"
    >
      <Heading>My Favorite Shortlisted</Heading>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-auto w-full  ">
        {favorites.length > 0 ? (
          favorites.map((favorite, index) => (
            <li
              key={index}
              className="flex flex-col items-start justify-center border border-black rounded-lg p-2 gap-1"
            >
              <img
                src="https://picsum.photos/200/200"
                alt={favorite.name} // Placeholder image, replace with actual image source if available
                className="rounded-lg w-full object-cover"
              />
              <Heading>{favorite.name}</Heading>
              <p className=" text-red-600 cookie-regular text-xl">
                {" "}
                {decodeURIComponent(favorite.service)}
              </p>{" "}
              {/* Replace with actual data if available */}
              <p className="text-sm text-gray-600 amiko-regular">
                {favorite.location}
              </p>
              {/* Replace with actual data if available */}
              <div className="flex gap-2 justify-center items-center w-full mt-2">
                <Button
                  color="green"
                  onClick={() => {
                    router.push(
                      `/services/${favorite.service}/${favorite.name}`
                    );
                  }}
                >
                  View
                </Button>
                <Button onClick={() => handleRemove(favorite.name)}>
                  Remove
                </Button>
              </div>
            </li>
          ))
        ) : (
          <div className="col-span-4 text-center ">
            <div className="m-10 ">
              <span className="text-red-200 border p-2 rounded-lg ">
                No favorites yet.
              </span>
            </div>
          </div>
        )}
      </ul>
    </section>
  );
};

export default FavoritePage;
