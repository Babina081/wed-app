"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaBars, FaCaretDown, FaTimes } from "react-icons/fa";
import Heading from "./Heading";
import { eventServices } from "../utils/data";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const favorites = useSelector(
    (state: RootState) => state.favorites.favoriteItems
  ); // Adjust based on your state shape
  const favoriteCount = favorites.length;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setDropdownOpen(false); // Ensure dropdown also closes
  };

  // Function to check if the link is active
  const isActive = (href: string) => {
    return pathname === href
      ? "text-white bg-purple-600 p-2 rounded-lg hover:no-underline"
      : "text-black";
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="sticky top-0 bg-purple-300 z-10 ">
      <div className="flex justify-between items-center relative bg-purple-300 py-4 px-10 z-20">
        <Heading>
          <Link href="/">Wed-App</Link>
        </Heading>
        <div
          className="cursor-pointer md:hidden border border-black text-black rounded-lg p-2 hover:text-white hover:border-white transition-all duration-300 ease-in-out"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        {isOpen && (
          <ul
            className=" absolute top-16 left-0 right-0  flex md:hidden flex-col gap-4 bg-purple-300 z-20 px-10 pb-4 amiko-bold 
          "
          >
            <li>
              <Link
                href="/"
                className={`${isActive(
                  "/"
                )} hover:underline underline-offset-4 transition-all duration-300 ease-in-out`}
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`${isActive(
                  "/about"
                )} hover:underline underline-offset-4 transition-all duration-300 ease-in-out`}
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li>
              <button
                onClick={handleDropdownToggle}
                className={`w-full text-left ${isActive(
                  "/services"
                )} flex items-center justify-start hover:underline underline-offset-4 transition-all duration-300 ease-in-out`}
              >
                Services
                <FaCaretDown
                  className={`ml-2 ${
                    dropdownOpen ? "rotate-180" : ""
                  } transition-transform duration-300`}
                />
              </button>
              {dropdownOpen && (
                <ul className="flex flex-col  mt-2 bg-white rounded-lg p-4 ">
                  {eventServices.map((service) => (
                    <li
                      key={service.name}
                      className="text-black hover:bg-slate-200 p-2 w-full cursor-pointer"
                    >
                      <Link
                        href={`/services/${service.name}`}
                        onClick={closeMenu}
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <Link
                href="/favorites"
                className={`${isActive("/favorites")}`}
                onClick={closeMenu}
              >
                <span className=" hover:underline underline-offset-4 transition-all duration-300 ease-in-out">
                  Favorites
                </span>
                {favoriteCount > 0 && (
                  <span className="px-2 py-1 bg-yellow-200 rounded-full ml-2 hover:no-underline">
                    {favoriteCount}
                  </span>
                )}
              </Link>
            </li>
            <li>
              <Link
                href="/blogs"
                className={`${isActive(
                  "/blogs"
                )} hover:underline underline-offset-4 transition-all duration-300 ease-in-out`}
                onClick={closeMenu}
              >
                Blogs
              </Link>
            </li>
          </ul>
        )}
        <ul className="hidden md:flex flex-row gap-4 bg-purple-300 justify-center items-center amiko-bold">
          <li>
            <Link
              href="/"
              className={`${isActive(
                "/"
              )} hover:underline underline-offset-4 transition-all duration-300 ease-in-out`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`${isActive(
                "/about"
              )}   hover:underline underline-offset-4 transition-all duration-300 ease-in-out`}
            >
              About
            </Link>
          </li>
          <li className="relative">
            <button
              onClick={handleDropdownToggle}
              className={`w-full text-left ${isActive(
                "/services"
              )} flex items-center justify-center hover:underline underline-offset-4 transition-all duration-300 ease-in-out`}
            >
              Services
              <FaCaretDown
                className={`ml-2 ${
                  dropdownOpen ? "rotate-180" : ""
                } transition-transform duration-300`}
              />
            </button>
            {dropdownOpen && (
              <ul className="flex flex-col  absolute left-0 w-40  rounded-lg bg-white justify-center overflow-hidden z-20 mt-2 border border-black/30">
                {eventServices.map((service) => (
                  <li
                    key={service.name}
                    className="text-black hover:bg-slate-200 p-2 cursor-pointer"
                  >
                    <Link href={`/services/${service.name}`}>
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li>
            <Link href="/favorites" className={`${isActive("/favorites")}`}>
              <span className=" hover:underline underline-offset-4 transition-all duration-300 ease-in-out">
                Favorites
              </span>
              {favoriteCount > 0 && (
                <span className="px-2 py-1 bg-yellow-200 rounded-full ml-2 hover:no-underline">
                  {favoriteCount}
                </span>
              )}
            </Link>
          </li>
          <li>
            <Link
              href="/blogs"
              className={`${isActive(
                "/blogs"
              )} hover:underline underline-offset-4 transition-all duration-300 ease-in-out`}
            >
              Blogs
            </Link>
          </li>
        </ul>
        {/* )} */}
      </div>
    </nav>
  );
};

export default Navbar;
