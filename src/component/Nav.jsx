import React, { useState } from "react";
import navimage from "../assets/Vector.png";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="w-full bg-white shadow"
      style={{ fontFamily: "Anek Tamil, sans-serif" }}
    >
      <nav className=" mx-auto w-full px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 font-bold text-lg">
            <img src={navimage} alt="Logo" className="w-10 h-auto" />
            PrimalTraining
          </a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 focus:outline-none"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-10">
            <li>
              <a href="#" className="text-gray-700 hover:text-indigo-500">
                Home
              </a>
              
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-indigo-500">
                About
              </a>

            </li>
            
            <li>
              <button className="bg-[#808CFD] text-white px-4 py-2 rounded-md hover:opacity-90">
                Reserve Your Spot
              </button>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        {open && (
          <ul className="lg:hidden flex flex-col gap-4 pb-4">
            <li>
              <a href="#" className="block text-gray-700">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block text-gray-700">
                About
              </a>
            </li>
            <li>
              <button className="w-full bg-[#808CFD] text-white py-2 rounded-md ">
                Reserve Your Spot
              </button>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Nav;
