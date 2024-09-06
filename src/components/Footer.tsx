import { socialMediaLinks } from "@/utils/data";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-purple-300 flex flex-col gap-2 py-10 px-10 items-center justify-center">
      <div></div>
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
    </footer>
  );
};

export default Footer;
