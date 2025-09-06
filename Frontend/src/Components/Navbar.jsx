import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenuLine } from "react-icons/ri";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar relative z-20 bg-white flex items-center justify-between px-10 lg:px-20 py-5 border-b border-gray-300">
        <h1 className="text-3xl font-bold text-green-700">
          <Link to={"/"}>Medico</Link>
        </h1>

        <ul className="hidden md:flex gap-8">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/services"}>Services</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>

        <div className="actionBtns flex items-center gap-4">
          <button className="cursor-pointer hidden xsm:block text-sm bg-green-700 hover:bg-green-700/75 w-44 px-2 py-3 rounded-full text-white font-medium transition-all duration-300">
            Book a Consultation
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="block md:hidden"
          >
            <RiMenuLine size={25} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`mobileMenu block md:hidden absolute top-19 left-0 z-10 bg-gray-100 h-screen w-full px-10 py-10 ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        } transition-all duration-300`}
      >
        <ul className="flex flex-col gap-8 py-10">
          <li className="border-b border-gray-500 py-3">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="border-b border-gray-500 py-3">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="border-b border-gray-500 py-3">
            <Link to={"/services"}>Services</Link>
          </li>
          <li className="border-b border-gray-500 py-3">
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>

        <button className="cursor-pointer text-sm bg-green-700 hover:bg-green-700/75 w-44 px-2 py-3 rounded-full text-white font-medium transition-all duration-300">
          Book a Consultation
        </button>
      </div>
    </>
  );
};

export default Navbar;
