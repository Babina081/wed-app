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
    <section className="flex flex-col py-10 px-10 items-center justify-center  bg-gradient-to-t from-purple-200 to-white gap-10 sm:gap-0">
      <Heading>AboutPage</Heading>

      <div className="flex flex-col md:flex-row   gap-4 w-full mb-8 group h-[80vh] items-center justify-center">
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
            help users to navigate through the plethora of options and gather a
            team of vendors and service provider to make their moments
            memorable, in their budget and style.
          </p>
          <Link href="/">
            <Button color="green">Start Browsing</Button>
          </Link>
        </div>
        <Image
          src={wed1}
          alt="wed1"
          className="object-cover rounded-xl border border-black/10 w-full md:w-1/2 order-2 md:order-1 h-[50vh]"
          data-aos="zoom-in-left"
        ></Image>
      </div>
      <div className="flex flex-col md:flex-row gap-4 w-full h-[80vh]  items-center justify-center">
        <Image
          src={wed2}
          alt="wed2"
          className=" object-cover rounded-xl border border-black/10 w-full md:w-1/2 order-2  h-[50vh]"
          data-aos="zoom-in-right"
        />
        <div className="w-full md:w-1/2 text-left md:text-right order-1 md:order-2">
          <p className="text-gray-600 amiko-regular">
            To vendors and service providers, listing your company on
            CeremonyNepal gives your brand the online exposure and search engine
            optimizations it needs. Listing is and always will be free. Display
            your portfolio, contacts, packages, reviews, maps—everything in one
            place. Connect with the right customers and grow your business.
          </p>
          <p className="text-gray-600 amiko-regular mb-8">
            We set out to create Nepal’s most targeted, up-to-date, and
            comprehensive special events and weddings guide. We pride ourselves
            on working extra closely with vendors like you toward a shared goal
            of success.
          </p>
          <Button onClick={openDialog} color="green">
            Register
          </Button>
        </div>
        {isDialogOpen && <RegisterModal onClose={closeDialog} />}
      </div>
    </section>
  );
};

export default AboutPage;
