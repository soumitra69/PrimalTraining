import React from "react";
import { Link } from "react-router-dom";
import navimage from "../assets/Vector.png";

const Footer = () => {
  return (
    <footer
      className="bg-[#E9ECFF] border-t border-black"
      style={{ fontFamily: "Anek Tamil, sans-serif" }}
    >
      <div className="w-full px-6 py-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 w-full pb-8 border-b border-black/15">
          {/* IMAGE */}
          <Link
            to="/"
            className="group w-[160px] sm:w-[230px] h-[90px] sm:h-[137px] flex items-center"
          >
            <img
              src={navimage}
              alt="Logo"
              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* TEXT */}
          <div className="flex items-center sm:justify-end">
            <Link to="/">
              <h2 className="text-black font-bold text-3xl sm:text-[48px] leading-none hover:text-[#7B85FF] transition-colors duration-300">
                PrimalTraining
              </h2>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full pt-6">
          <div>
            <p className="font-bold tracking-wider mb-2">CONTACT</p>
            <p className="hover:text-[#7B85FF] hover:translate-x-1 transition-all duration-200 cursor-pointer">
              Email: hello@figma.com
            </p>
            <p className="hover:text-[#7B85FF] hover:translate-x-1 transition-all duration-200 cursor-pointer">
              Phone: 2224458
            </p>
          </div>

          <div>
            <p className="font-bold tracking-wider mb-2">OPENING HOURS</p>
            <p className="text-gray-800">Mon – Fri: 5:00 AM – 10:00 PM</p>
            <p className="text-gray-800">Sat – Sun: 7:00 AM – 8:00 PM</p>
          </div>

          <div>
            <p className="font-bold tracking-wider mb-2">SOCIAL</p>
            {["Instagram", "X", "Facebook", "Spotify"].map((platform) => (
              <p
                key={platform}
                className="hover:text-[#7B85FF] hover:translate-x-1.5 transition-all duration-200 cursor-pointer w-fit"
              >
                {platform}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
