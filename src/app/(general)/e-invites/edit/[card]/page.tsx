"use client";
import Heading from "@/components/Heading";
import { invitationCard } from "@/data/data";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Example using jsPDF to generate a PDF
// import jsPDF from "jspdf";

interface FormData {
  invitation: string;
  spouseName: string;
  brideName: string;
  andText: string;
  month: string;
  day: string;
  date: string;
  time: string;
  slash: string;
  slash2: string;
  addressName: string;
  message?: string;
  color: string;
}

// Define the Zod schema
const schema = z.object({
  invitation: z.string().nonempty("Invitation is required"),
  spouseName: z.string().nonempty("Spouse Name is required"),
  brideName: z.string().nonempty("Bride Name is required"),
  andText: z.string().nonempty("This field is required"),
  month: z.string().nonempty("Month is required"),
  day: z.string().nonempty("Day is required"),
  date: z.string().nonempty("Date is required"),
  time: z.string().nonempty("Time is required"),
  slash: z.string().nonempty("Slash is required"),
  slash2: z.string().nonempty("Slash 2 is required"),
  addressName: z.string().nonempty("Address is required"),
  message: z.string().optional(),
  color: z.string().nonempty("Color is required"),
});

// const generatePDF = (customData: FormData) => {
//   const doc = new jsPDF();
//   doc.text(customData.title, 10, 10);
//   doc.text(customData.date, 10, 20);
//   doc.text(customData.venue, 10, 30);
//   doc.text(customData.message, 10, 40);
//   doc.save("invitation.pdf");
// };

const EditCardPage = () => {
  const { card } = useParams();
  const router = useRouter();

  // Ensure card is a string (it could be an array)
  const cardId = Array.isArray(card) ? card[0] : card;

  // State to store form data dynamically
  const [formData, setFormData] = useState<FormData>({
    invitation: "",
    spouseName: "",
    brideName: "",
    andText: "",
    month: "",
    day: "",
    date: "",
    time: "",
    slash: "",
    slash2: "",
    addressName: "",
    message: "",
    color: "#000000",
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    const selectedTemplate = invitationCard.find(
      (template) => template.id === parseInt(cardId || "0")
    );
    if (selectedTemplate) {
      Object.entries(selectedTemplate).forEach(([key, value]) => {
        setValue(key as keyof FormData, value.toString());
        setFormData((prevData) => ({
          ...prevData,
          [key]: value,
        }));
      });
    }
  }, [cardId, setValue]);

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDownload = () => {
    // Functionality to download the invitation card
  };

  const handleShare = () => {
    // Functionality to share the invitation card
  };

  const handleCancel = () => {
    router.push("/e-invites"); // Redirect to home or another page
  };

  return (
    <section className="max-w-7xl mx-auto h-full  flex flex-col  items-center justify-center pb-20">
      <Heading>Customize Your Invitation</Heading>
      <div className="flex flex-col md:flex-row w-full gap-8 justify-center px-20 lg:px-0 ">
        <div className="w-full ">
          {" "}
          <Image
            height={300}
            width={300}
            src={
              invitationCard.find(
                (t) =>
                  t.id === parseInt(Array.isArray(card) ? card[0] : card || "0")
              )?.image || ""
            }
            alt="image"
            className="h-full w-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110 border border-black/10 rounded-lg"
          />
          {/* Overlay text */}
          <div className="absolute top-0 left-0 p-4 text-white">
            <h2 style={{ color: formData.color }}>{formData.invitation}</h2>
            <p>{formData.spouseName}</p>
            <p>{formData.brideName}</p>
            <p>{formData.andText}</p>
            <p>
              {formData.month} {formData.day}, {formData.date}
            </p>
            <p>{formData.time}</p>
            <p>{formData.addressName}</p>
            <p>{formData.message}</p>
          </div>
        </div>
        <div className="w-full ">
          {" "}
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Wedding Invitation", name: "invitation" },
                { label: "Spouse Name", name: "spouseName" },
                { label: "Bride Name", name: "brideName" },
                { label: "And", name: "andText" },
                { label: "Month", name: "month" },
                { label: "Day", name: "day" },
                { label: "Date", name: "date" },
                { label: "Time", name: "time" },
                { label: "Slash", name: "slash" },
                { label: "Slash 2", name: "slash2" },
                { label: "Address Name", name: "addressName" },
              ].map(({ label, name }) => (
                <div className="flex flex-col gap-2" key={name}>
                  <label className="font-bold">{label}:</label>
                  <input
                    {...register(name as keyof FormData)}
                    placeholder={`Enter ${label.toUpperCase()}`}
                    className="border p-2 rounded-lg placeholder:text-sm"
                    onChange={handleChange}
                  />
                  {errors[name as keyof FormData] && (
                    <span className="text-red-500">
                      {errors[name as keyof FormData]?.message}
                    </span>
                  )}
                </div>
              ))}

              <div className="flex flex-col gap-2">
                <label className="font-bold">Personal Message:</label>
                <textarea
                  {...register("message")}
                  placeholder="Enter your personal message"
                  className="border p-2 rounded-lg placeholder:text-sm"
                  onChange={handleChange}
                />
              </div>

              <div className="flex  gap-2">
                <label className="font-bold">Text Color:</label>
                <input
                  type="color"
                  {...register("color")}
                  className="border p-2 rounded-lg placeholder:text-sm"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex justify-between flex-wrap gap-2 mt-6">
              <button
                type="submit"
                className="bg-purple-800 p-2 rounded-lg text-white font-bold"
              >
                Save
              </button>
              <button
                type="button"
                onClick={handleDownload}
                className="bg-purple-400 p-2 rounded-lg text-white font-bold hover:bg-purple-700"
              >
                Download
              </button>
              <button
                type="button"
                onClick={handleShare}
                className="bg-purple-400 p-2 rounded-lg text-white font-bold hover:bg-purple-700"
              >
                Share
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="bg-rose-400 p-2 rounded-lg text-white font-bold"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EditCardPage;
