import Heading from "@/components/Heading";
import Link from "next/link";
import React from "react";

const BlogsPage = () => {
  return (
    <section className="flex flex-col py-10 px-10 items-center justify-center gap-4">
      <Heading>Blogs</Heading>
      <ul className="grid sm:grid-cols-2 gap-4 w-full">
        <li className=" flex flex-col items-start justify-center border border-black rounded-lg p-2 gap-2">
          <Heading>Best Hair Styles By Face Shapes - Womens Edition</Heading>
          <p className="text-sm text-gray-600">
            Knowing your face shape is an important key when choosing the right
            hairstyle and knowing which hairstyles will best suit you. We have
            few tips and trick from top hair stylists for different face shapes.
          </p>
          <Link
            href="/"
            className="text-sm text-blue-600 cursor-pointer hover:underline transition-all duration-300 ease-in-out"
          >
            Read More
          </Link>
        </li>
        <li className=" flex flex-col items-start justify-center border border-black rounded-lg p-2 gap-2">
          <Heading>Best Hair Styles By Face Shapes - Womens Edition</Heading>
          <p className="text-sm text-gray-600">
            Knowing your face shape is an important key when choosing the right
            hairstyle and knowing which hairstyles will best suit you. We have
            few tips and trick from top hair stylists for different face shapes.
          </p>
          <Link
            href="/"
            className="text-sm text-blue-600 cursor-pointer hover:underline transition-all duration-300 ease-in-out"
          >
            Read More
          </Link>
        </li>
        <li className=" flex flex-col items-start justify-center border border-black rounded-lg p-2 gap-2">
          <Heading>Best Hair Styles By Face Shapes - Womens Edition</Heading>
          <p className="text-sm text-gray-600">
            Knowing your face shape is an important key when choosing the right
            hairstyle and knowing which hairstyles will best suit you. We have
            few tips and trick from top hair stylists for different face shapes.
          </p>
          <Link
            href="/"
            className="text-sm text-blue-600 cursor-pointer hover:underline transition-all duration-300 ease-in-out"
          >
            Read More
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default BlogsPage;
