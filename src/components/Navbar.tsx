"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaBars, FaCaretDown, FaTimes } from "react-icons/fa";
import Heading from "./Heading";
import { eventServices } from "../utils/data";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  // Function to check if the link is active
  const isActive = (href: string) => {
    return pathname === href
      ? "text-white bg-black p-2 rounded-lg"
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
            className=" absolute top-16 left-0 right-0  flex md:hidden flex-col gap-4 bg-purple-300 z-20 px-10 pb-4 
          "
          >
            <li>
              <Link href="/" className={isActive("/")}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className={isActive("/about")}>
                About
              </Link>
            </li>
            <li>
              <button
                onClick={handleDropdownToggle}
                className={`w-full text-left ${isActive(
                  "/services"
                )} flex items-center justify-start`}
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
                      <Link href={`/services/${service.name}`}>
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <Link href="/favorites" className={isActive("/favorites")}>
                Favorites
              </Link>
            </li>
            <li>
              <Link href="/blogs" className={isActive("/blogs")}>
                Blogs
              </Link>
            </li>
          </ul>
        )}
        <ul className="hidden md:flex flex-row gap-4 bg-purple-300 justify-center items-center">
          <li>
            <Link href="/" className={isActive("/")}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className={isActive("/about")}>
              About
            </Link>
          </li>
          <li className="relative">
            <button
              onClick={handleDropdownToggle}
              className={`w-full text-left ${isActive(
                "/services"
              )} flex items-center justify-center`}
            >
              Services
              <FaCaretDown
                className={`ml-2 ${
                  dropdownOpen ? "rotate-180" : ""
                } transition-transform duration-300`}
              />
            </button>
            {dropdownOpen && (
              <ul className="flex flex-col  absolute left-0 w-40  rounded-lg bg-white justify-center overflow-hidden z-20 mt-2">
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
            <Link href="/favorites" className={isActive("/favorites")}>
              Favorites
              <span className="px-2 py-1 bg-yellow-200  rounded-full  ml-0.5">
                1
              </span>
            </Link>
          </li>
          <li>
            <Link href="/blogs" className={isActive("/blogs")}>
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
