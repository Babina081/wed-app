import React from "react";
import Heading from "./Heading";
import Button from "./Button";

const ContactBanner = () => {
  return (
    <section
      className=" h-[40vh] py-4
 px-10 flex flex-col items-center justify-center text-center"
    >
      <Heading>Are you a Service Provider?</Heading>{" "}
      <p className="text-xl text-gray-600 mb-4">
        Contact us to include your service in our listing.
      </p>
      <Button>Register</Button>
    </section>
  );
};

export default ContactBanner;
