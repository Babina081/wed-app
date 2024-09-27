"use client";
import wed1 from "@/assets/wed1.jpg";
import wed2 from "@/assets/wed2.jpeg";
import Button from "@/components/Button";
import { RegisterModal } from "@/components/ContactBanner";
import Heading from "@/components/Heading";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
// aos
import AOS from "aos";
import "aos/dist/aos.css";
const AboutPage = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <section className="flex flex-col items-center justify-center  bg-gradient-to-t from-purple-200 to-white gap-10 sm:gap-0 relative">
      <div className="h-[60vh] bg-pink-300 w-full flex flex-col items-center justify-center fixed top-0 left-0 z-10 overflow-hidden pt-[10vh]">
        <video
          autoPlay
          loop
          muted
          preload="auto"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-50 z-0" // Adjust opacity here
        >
          <source
            src="https://cdn.pixabay.com/video/2022/10/23/136134-764371502_large.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="flex flex-col items-center justify-center z-10 text-white">
          <Heading>AboutPage</Heading>
          <p className="text-2xl  cookie-regular ">
            Dive deep to get to know about us more closely.
          </p>
        </div>
      </div>
      <div className=" mt-[50vh] z-30 w-full bg-white">
        <div className="flex flex-col md:flex-row   gap-4 w-full mb-8  items-center justify-center sm:my-20  bg-white  py-10 sm:py-0 px-10">
          <div className="w-full md:w-1/2 ">
            <p className="text-gray-600 amiko-regular ">
              With a mission to help our users find the best vendor and service
              providers in the town, we aim to provide a highly responsive
              platform to browse the best wedding and event vendors,
              photographers, boutiques, makeup artists, event planners and more
              with photos, reviews and contact information at the click of a
              button.
            </p>
            <p className="text-gray-600 amiko-regular mb-8">
              Weddings and Events are stressful and we hope CeremonyNepal will
              help users to navigate through the plethora of options and gather
              a team of vendors and service provider to make their moments
              memorable, in their budget and style.
            </p>
            <Link href="/">
              <Button color="green">Start Browsing</Button>
            </Link>
          </div>
          <Image
            src={wed1}
            alt="wed1"
            className="object-cover rounded-xl border border-black/10 w-full md:w-1/2 order-2 md:order-1 my20"
            data-aos="zoom-in-left"
          ></Image>
        </div>
        <div className="flex flex-col md:flex-row gap-4 w-full items-center justify-center bg-white py-10 sm:py-0 px-10">
          <Image
            src={wed2}
            alt="wed2"
            className=" object-cover rounded-xl border border-black/10 w-full md:w-1/2 order-2  "
            data-aos="zoom-in-right"
          />
          <div className="w-full md:w-1/2 text-left md:text-right order-1 md:order-2">
            <p className="text-gray-600 amiko-regular">
              To vendors and service providers, listing your company on
              CeremonyNepal gives your brand the online exposure and search
              engine optimizations it needs. Listing is and always will be free.
              Display your portfolio, contacts, packages, reviews,
              maps—everything in one place. Connect with the right customers and
              grow your business.
            </p>
            <p className="text-gray-600 amiko-regular mb-8">
              We set out to create Nepal’s most targeted, up-to-date, and
              comprehensive special events and weddings guide. We pride
              ourselves on working extra closely with vendors like you toward a
              shared goal of success.
            </p>
            <Button onClick={openDialog} color="green">
              Register
            </Button>
          </div>
          {isDialogOpen && <RegisterModal onClose={closeDialog} />}
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
