"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  // const [activeLink, setActiveLink] = useState("Home");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  // Function to check if the link is active
  const isActive = (href: string) => {
    return pathname === href
      ? "text-white bg-black p-2 rounded-lg"
      : "text-black";
  };

  return (
    <nav className="sticky top-0 bg-purple-300 ">
      <div className="flex justify-between items-center relative bg-purple-300 py-4 px-10 ">
        <h1 className="text-2xl font-bold text-black">Wed-App</h1>
        <div
          className="cursor-pointer md:hidden border border-black text-black rounded-lg p-2 hover:text-white hover:border-white transition-all duration-300 ease-in-out"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        {isOpen && (
          <ul
            className=" absolute top-16 left-0 right-0  flex md:hidden flex-col gap-4 bg-purple-300 z-10 px-10 pb-4 
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
              <Link href="/services" className={isActive("/services")}>
                Services
              </Link>
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
        <ul className="hidden md:flex flex-row gap-4 bg-purple-300 ">
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
            <Link href="/services" className={isActive("/services")}>
              Services
            </Link>
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
        {/* )} */}
      </div>
    </nav>
  );
};

export default Navbar;
