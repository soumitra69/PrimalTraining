import React from "react";
import navimage from "../assets/Vector.png";

const Footer = () => {
  return (
    <div>
      <div className="gap-50" style={{ fontFamily: "Anek Tamil, sans-serif" }}>
        <div className="flex items-center justify-between w-full  px-6 py-2">
          {/* IMAGE */}
          <div className="w-[230px] h-[137px] flex items-center">
            <img
              src={navimage}
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </div>

          {/* TEXT */}
          <div className="w-[333px] h-[58px] flex items-center justify-end">
            <h2 className="text-black font-bold text-2xl text-[48px]">
              PrimalTraining
            </h2>
          </div>
        </div>
        <div className="flex justify-between w-full py-2 px-6">
          <div>
            <p className="font-bold">CONTACT</p>
            <p>Email:hello@figma.com</p>
            <p>Phone:2224458</p>
          </div>
          <div>
            <p className="font-bold">OPENING HOURS</p>
          </div>
          <div>
            <p className="font-bold">SOICAL</p>
            <p>Insagram</p>
            <p>X</p>
            <p>Facebook</p>
            <p>Sportify</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
