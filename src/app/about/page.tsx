import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Link from "next/link";
import React from "react";

const AboutPage = () => {
  return (
    <section className="flex flex-col py-10 px-10 items-center justify-center gap-4">
      <Heading>AboutPage</Heading>
      <p className="text-gray-600 ">
        With a mission to help our users find the best vendor and service
        providers in the town, we aim to provide a highly responsive platform to
        browse the best wedding and event vendors, photographers, boutiques,
        makeup artists, event planners and more with photos, reviews and contact
        information at the click of a button.
      </p>
      <p className="text-gray-600 ">
        Weddings and Events are stressful and we hope CeremonyNepal will help
        users to navigate through the plethora of options and gather a team of
        vendors and service provider to make their moments memorable, in their
        budget and style.
      </p>
      <Link href="/">
        <Button>Start Browsing</Button>
      </Link>
      <p className="text-gray-600 ">
        To vendors and service provider, listing your company on CeremonyNepal
        gives your brand the online exposure and search engine optimizations it
        needs. Listing is and always be free. Display your portfolio, contacts,
        packages, reviews, maps everything in one place. Connect with the right
        customers and grow your business.
      </p>
      <p className="text-gray-600 ">
        We set out to create Nepal’s most targeted, up-to-date, and
        comprehensive special events and weddings guide. We pride ourselves on
        working extra close with vendors like you toward a shared goal of
        success.
      </p>
      <Link href="/register">
        <Button>Register With Us</Button>
      </Link>
    </section>
  );
};

export default AboutPage;
