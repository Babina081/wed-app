"use client";
import Heading from "@/components/Heading";
import { invitationCard } from "@/data/data";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { IoBookmarkOutline } from "react-icons/io5";

const EInvitesPage = () => {
  const router = useRouter();

  const handleSelectTemplate = (id: number) => {
    router.push(`/e-invites/edit/${id}`);
  };

  return (
    <section className="max-w-7xl mx-auto h-full  flex flex-col items-center justify-center pb-20">
      <Heading>E-Invites</Heading>
      <div className="flex flex-col md:flex-row md:justify-between w-full  mb-6 gap-4 px-10 xl:px-0">
        <div className="flex flex-row justify-center   gap-4 ">
          {" "}
          <button className="border border-purple-400  p-2 rounded-xl text-purple-400 hover:border-none hover:text-white hover:bg-purple-400">
            Your saved card
          </button>
          <button className="border border-purple-400  p-2 rounded-xl text-purple-400 hover:border-none hover:text-white hover:bg-purple-400">
            Your customized card
          </button>
        </div>

        <button className="border border-purple-400  p-2 rounded-xl text-purple-400 hover:border-none hover:text-white hover:bg-purple-400">
          Search box
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 px-10 xl:px-0 w-full">
        {invitationCard.map((template) => (
          <div
            key={template.id}
            onClick={() => handleSelectTemplate(template.id)}
            className="relative group overflow-hidden rounded-lg border border-black/10"
          >
            <Image
              height={300}
              width={300}
              src={template.image}
              alt={template.name}
              className="h-full w-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
            <div className="absolute top-5 right-5 bg-black/40 text-white p-2 rounded-full  cursor-pointer  z-10 font-bold">
              <IoBookmarkOutline className="size-5 cursor-pointer" />
            </div>
            {/* Overlay with Text and Button */}
            <div className="absolute inset-0 bg-gradient-to-t from-purple-700 via-purple-200/50 to-transparent opacity-0 group-hover:opacity-100 flex flex-col justify-end items-center transition-opacity duration-500 ease-in-out pb-20 ">
              <h1 className="text-white text-2xl font-bold mb-4">
                {template.name}
              </h1>
              <button className="border border-white hover:bg-purple-400 hover:border-purple-400 text-white px-4 py-2 rounded-xl duration-300 transition-all ease-in-out font-bold ">
                Customize
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EInvitesPage;
