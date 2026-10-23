import React, { useState } from "react";
import navimage from "../assets/Vector.png";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `relative py-1 font-medium transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2.5px] after:bg-[#7B85FF] after:origin-left after:transition-transform after:duration-300 ${
      isActive
        ? "text-[#7B85FF] font-semibold after:scale-x-100"
        : "text-gray-800 hover:text-[#7B85FF] after:scale-x-0 hover:after:scale-x-100"
    }`;

  return (
    <header
      className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-black/10 shadow-sm transition-all duration-300"
      style={{ fontFamily: "Anek Tamil, sans-serif" }}
    >
      <nav className="mx-auto w-full px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className="group flex items-center gap-2.5 font-bold text-lg tracking-tight transition-colors duration-300 hover:text-[#7B85FF]"
          >
            <img
              src={navimage}
              alt="Logo"
              className="w-10 h-auto transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
            />
            <span>PrimalTraining</span>
          </NavLink>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 rounded-md text-gray-800 hover:bg-[#E9ECFF] hover:text-[#7B85FF] transition-all duration-200 cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <span className="text-xl leading-none">{open ? "✕" : "☰"}</span>
          </button>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-10">
            <li>
              <NavLink to="/" className={linkClass}>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" className={linkClass}>
                About
              </NavLink>
            </li>

            <li>
              <NavLink to="/spot">
                <button className="bg-[#808CFD] text-white font-semibold px-5 py-2 rounded-md hover:bg-black hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#808CFD]/40 active:translate-y-0 active:scale-95 transition-all duration-300 cursor-pointer">
                  Reserve Your Spot
                </button>
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Mobile Menu with Smooth Accordion Transition */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            open ? "max-h-64 opacity-100 pb-4" : "max-h-0 opacity-0 pb-0"
          }`}
        >
          <ul className="flex flex-col gap-3 pt-2 border-t border-gray-100">
            <li>
              <NavLink
                to="/"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md transition-all duration-200 ${
                    isActive
                      ? "bg-[#E9ECFF] text-[#7B85FF] font-semibold"
                      : "text-gray-700 hover:bg-[#E9ECFF]/60 hover:translate-x-1"
                  }`
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md transition-all duration-200 ${
                    isActive
                      ? "bg-[#E9ECFF] text-[#7B85FF] font-semibold"
                      : "text-gray-700 hover:bg-[#E9ECFF]/60 hover:translate-x-1"
                  }`
                }
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink to="/spot" onClick={() => setOpen(false)}>
                <button className="w-full bg-[#808CFD] text-white font-semibold py-2.5 rounded-md hover:bg-black transition-all duration-300 active:scale-95 cursor-pointer">
                  Reserve Your Spot
                </button>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
