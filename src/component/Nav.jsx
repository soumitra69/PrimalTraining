import React, { useState } from "react";
import navimage from "../assets/Vector.png";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="w-full bg-white shadow"
      style={{ fontFamily: "Anek Tamil, sans-serif" }}
    >
      <nav className="mx-auto w-full px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 font-bold text-lg">
            <img src={navimage} alt="Logo" className="w-10 h-auto" />
            PrimalTraining
          </NavLink>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-10">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-indigo-600 font-semibold"
                    : "text-gray-700 hover:text-indigo-500"
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-indigo-600 font-semibold"
                    : "text-gray-700 hover:text-indigo-500"
                }
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink to="./spot  ">
                <button className="bg-[#808CFD] text-white px-4 py-2 rounded-md hover:opacity-90">
                  Reserve Your Spot
                </button>
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        {open && (
          <ul className="lg:hidden flex flex-col gap-4 pb-4">
            <li>
              <NavLink
                to="/"
                onClick={() => setOpen(false)}
                className="block text-gray-700"
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                onClick={() => setOpen(false)}
                className="block text-gray-700"
              >
                About
              </NavLink>
            </li>

            <li>
              <button className="w-full bg-[#808CFD] text-white py-2 rounded-md">
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
