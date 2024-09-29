import Heading from "@/components/Heading";
import { blogs } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import { FaRegThumbsUp } from "react-icons/fa";

const BlogsPage = () => {
  return (
    <section className="flex flex-col py-10 px-10 items-center justify-center gap-4">
      <Heading>Blogs</Heading>
      <ul className="grid sm:grid-cols-2 gap-4 w-full pb-10">
        {blogs.map((blog, index) => (
          <li
            key={index}
            className=" flex  items-center justify-center border border-black rounded-lg p-2 gap-2 w-full"
          >
            <Image
              src={blog.imageUrl}
              alt={blog.altText}
              width={200}
              height={200}
              className="object- rounded-lg w-1/3 h-full object-cover shadow-sm border border-black/10"
            ></Image>
            <div className="flex flex-col h-full justify-between">
              {" "}
              <div>
                <h1 className="text-xl sintony-bold underline ">
                  {blog.title}
                </h1>
                <p className="sintony-regular mb-2">
                  <span className="text-purple-400 font-bold">
                    Published On
                  </span>{" "}
                  <span className="text-sm">{blog.publishedDate} </span>
                </p>
                <p className="text-sm text-gray-600 amiko-regular">
                  {blog.description}
                </p>
              </div>
              <div className="flex justify-between items-center">
                <Link
                  href="/"
                  className=" text-blue-600 cursor-pointer hover:underline transition-all duration-300 ease-in-out cookie-regular text-xl text-right"
                >
                  Read More
                </Link>
                <div className="flex items-center gap-2 ">
                  <FaRegThumbsUp className="cursor-pointer hover:text-purple-400 size-6" />
                  {/* <FaThumbsUp /> */}
                  <p className="text-2xl">{blog.likeCount}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BlogsPage;
