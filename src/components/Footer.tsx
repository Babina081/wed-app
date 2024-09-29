import img1 from "@/assets/flower1.png";
import { socialMediaLinks } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

type ContactInfo = {
  email: string;
  address: string;
  phone: string;
};

const contact: ContactInfo = {
  email: "newroad.contact@example.com",
  address: "New Road, Pokhara",
  phone: "+977 9812345678",
};
const contactFields = [
  { key: "email", icon: <FaEnvelope /> },
  { key: "address", icon: <FaMapMarkerAlt /> },
  { key: "phone", icon: <FaPhone /> },
];

const Footer = () => {
  return (
    <footer className="bg-purple-200 flex flex-col gap-2 pb-10 px-10 items-center justify-center amiko-bold relative z-20">
      <div className=" w-full relative py-20 ">
        <Image
          src={img1}
          alt="img1"
          className="size-28 absolute top-0 -left-14 object-cover rotate-180 "
        ></Image>
        <Image
          src={img1}
          alt="img1"
          className="size-28 absolute bottom-0 -right-14 object-cover "
        ></Image>
        <div
          className=" grid grid-cols-1 sm:grid-cols-2 
         xl:grid-cols-4 max-w-5xl mx-auto gap-3  z-20 relative   "
        >
          <div className="flex flex-col items-center xl:items-start text-center xl:text-left">
            <Link
              href="/"
              className="tracking-tighter uppercase cookie-regular font-extrabold text-4xl text-purple-700  "
            >
              Wed App
            </Link>
            <p className="text-sm amiko-regular tracking-tighter mt-4">
              WedApp® is an easy-to-use wedding app for managing wedding
              planning tasks, payments and vendors.
            </p>
          </div>
          <div className=" flex flex-col items-center xl:items-start text-center xl:text-left">
            <h1 className="cookie-regular  text-xl underline mb-4">
              Navigation
            </h1>
            <ul className="text-sm amiko-regular tracking-tighter">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Favorites</li>
              <li>Testimonials</li>
              <li>Blogs</li>
            </ul>
          </div>
          <div className="flex flex-col items-center xl:items-start text-center xl:text-left">
            {" "}
            <h1 className="cookie-regular  text-xl underline mb-4">
              Quick Links
            </h1>
            <ul className="text-sm amiko-regular tracking-tighter">
              <li>Event Venues</li>
              <li>Our Offers</li>
              <li>Partners</li>
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
          <div className="flex flex-col items-center xl:items-start text-center xl:text-left ">
            <h1 className="cookie-regular text-xl underline mb-4">
              Contact Us
            </h1>
            <ul className="text-sm amiko-regular tracking-tighter ">
              {contactFields.map((field) => (
                <li
                  key={field.key}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "8px",
                  }}
                >
                  <span style={{ marginRight: "8px" }}>{field.icon}</span>
                  {contact[field.key as keyof ContactInfo]}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="h-0.5 w-full bg-purple-600/45 my-2"></div>
      <div className="flex justify-between items-center w-full">
        <div>&copy; 2023 Wed-App</div>
        <ul className="flex gap-2">
          {socialMediaLinks.map((social) => (
            <li
              key={social.platform}
              className="border p-2 rounded-lg border-gray-700 hover:border-gray-900"
            >
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.platform}
              >
                <social.icon
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
                  size={24}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
