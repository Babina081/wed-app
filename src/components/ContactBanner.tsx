"use client";
import React, { useState } from "react";
import Heading from "./Heading";
import Button from "./Button";
import { ImCancelCircle } from "react-icons/im";

export const RegisterModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
        <h2 className="text-2xl mb-4">Register With Us</h2>
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 flex items-center justify-center"
          onClick={onClose}
        >
          <ImCancelCircle size={24} />
        </button>
        <form>
          <div className="mb-4">
            <label htmlFor="companyName" className="block text-gray-700 mb-1">
              Service/Company Name*
            </label>
            <input
              type="text"
              id="companyName"
              required
              className="border border-gray-300 p-2 w-full rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="yourName" className="block text-gray-700 mb-1">
              Your Name*
            </label>
            <input
              type="text"
              id="yourName"
              required
              className="border border-gray-300 p-2 w-full rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-1">
              Contact Email*
            </label>
            <input
              type="email"
              id="email"
              required
              className="border border-gray-300 p-2 w-full rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="facebookPage" className="block text-gray-700 mb-1">
              Facebook Page
            </label>
            <input
              type="url"
              id="facebookPage"
              className="border border-gray-300 p-2 w-full rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="details" className="block text-gray-700 mb-1">
              Details*
            </label>
            <textarea
              id="details"
              required
              rows={4}
              className="border border-gray-300 p-2 w-full rounded-lg"
            ></textarea>
          </div>
          <Button>Submit</Button>
        </form>
      </div>
    </div>
  );
};

const ContactBanner = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  return (
    <section className="h-[40vh] py-4 px-10 flex flex-col items-center justify-center text-center">
      <Heading>Are you a Service Provider?</Heading>
      <p className="text-xl text-gray-600 mb-4">
        Contact us to include your service in our listing.
      </p>
      <Button onClick={openDialog}>Register</Button>
      {isDialogOpen && <RegisterModal onClose={closeDialog} />}
    </section>
  );
};

export default ContactBanner;
