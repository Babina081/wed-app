"use client";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { ImCancelCircle } from "react-icons/im";
import Button from "./Button";
import Heading from "./Heading";

// Define the type for the form data
interface FormData {
  companyName: string;
  yourName: string;
  email: string;
  facebookPage?: string;
  details: string;
}

export const RegisterModal = ({ onClose }: { onClose: () => void }) => {
  // Use React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  // Handle form submission
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data); // Replace this with your form submission logic
    toast.success("Thank you for registering!");
    onClose();
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
        <h2 className="text-xl  mb-4 text-center">Register With Us</h2>
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 flex items-center justify-center"
          onClick={onClose}
        >
          <ImCancelCircle size={24} />
        </button>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-sm  mb-1 text-left">
              Service/Company Name*
            </label>
            <input
              type="text"
              {...register("companyName", {
                required: "Company name is required",
              })}
              className="border border-gray-300 p-2 w-full rounded-lg"
            />
            {errors.companyName && (
              <p className="text-red-500 text-xs mt-1 text-right">
                {errors.companyName.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-sm  mb-1 text-left">Your Name*</label>
            <input
              type="text"
              {...register("yourName", { required: "Your name is required" })}
              className="border border-gray-300 p-2 w-full rounded-lg"
            />
            {errors.yourName && (
              <p className="text-red-500 text-xs mt-1 text-right">
                {errors.yourName.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-sm  mb-1 text-left">
              Contact Email*
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              className="border border-gray-300 p-2 w-full rounded-lg"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1 text-right">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-sm  mb-1 text-left">
              Facebook Page
            </label>
            <input
              type="url"
              {...register("facebookPage")}
              className="border border-gray-300 p-2 w-full rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm  mb-1 text-left">Details*</label>
            <textarea
              {...register("details", { required: "Details are required" })}
              rows={4}
              className="border border-gray-300 p-2 w-full rounded-lg"
            ></textarea>
            {errors.details && (
              <p className="text-red-500 text-xs mt-1 text-right">
                {errors.details.message}
              </p>
            )}
          </div>
          <div className="flex justify-end gap-2">
            <Button color="blue">Submit</Button>
            <Button onClick={onClose} color="red">
              Cancel
            </Button>
          </div>
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
    <section className="h-[60vh] py-4 px-10 flex flex-col items-center justify-center text-center sintony-bold bg-gradient-to-t from-purple-200 to-white">
      <Heading>Are you a Service Provider?</Heading>
      <p className="text-2xl text-gray-600 mb-4 cookie-regular ">
        Contact us to include your service in our listing.
      </p>
      <Button onClick={openDialog}>Register</Button>
      {isDialogOpen && <RegisterModal onClose={closeDialog} />}
    </section>
  );
};

export default ContactBanner;
