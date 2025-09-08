import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

import FooterImg from "../assets/footerImg.webp";

const Footer = () => {
  return (
    <footer className="px-10 lg:px-20">
      <div className="CTA flex flex-col mlg:flex-row justify-between items-center gap-16 py-10">
        <div className="getConsultation w-full mlg:w-1/2">
          <p className="border border-black/50 inline px-4 py-1 rounded-full font-medium text-xs">
            Consultation
          </p>
          <h2 className="text-3xl font-semibold mt-6">Book a Consultation</h2>
          <div className="emailInput mt-6 p-2 rounded-full flex items-center border border-gray-300 bg-white">
            <input
              className="flex-1 px-2 xsm:px-4 py-2 bg-transparent outline-none text-gray-700 placeholder-gray-400"
              type="email"
              placeholder="Enter your email"
              name="email"
              id="email"
            />
            <button className="bg-green-700 text-white px-2 xms:px-6 py-2 rounded-full hover:bg-green-800 cursor-pointer transition duration-300">
              Subscribe
            </button>
          </div>
        </div>

        <div className="footerimg w-full mlg:w-1/2 rounded-xl overflow-hidden">
          <img
            loading="lazy"
            className="object-cover w-full h-full"
            src={FooterImg}
            alt="Footer Image"
          />
        </div>
      </div>

      <div className="footerLinks pb-16 flex flex-col mlg:flex-row justify-between gap-20">
        <div className="leftSection w-full mlg:w-1/2">
          <h2 className="text-3xl font-bold mt-6 text-green-700">Medico</h2>
          <p className="mt-4 text-black/75 text-sm">
            Quality healthcare made accessible with expert doctors, facilities,
            modern and round-the-clock support
          </p>
          <div className="socialIcons flex gap-2 mt-6">
            <div className="twitter border border-gray-400 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer hover:bg-black/75 transition duration-300">
              <BsTwitterX color="black" size={20} />
            </div>
            <div className="linkedIn border border-gray-400 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer hover:bg-black/75 transition duration-300">
              <FaLinkedin color="black" size={20} />
            </div>
            <div className="facebook border border-gray-400 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer hover:bg-black/75 transition duration-300">
              <FaFacebook color="black" size={20} />
            </div>
            <div className="instagram border border-gray-400 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer hover:bg-black/75 transition duration-300">
              <AiFillInstagram color="black" size={20} />
            </div>
          </div>
        </div>

        <div className="rightSection w-full mlg:w-1/2 grid grid-cols-1 xxs:grid-cols-2 xms:grid-cols-3 gap-7">
          <div className="column1">
            <h4 className="font-medium">Explore</h4>
            <ul className="mt-4 text-black/75 text-sm space-y-1">
              <li>What We Offer</li>
              <li>Case Studies</li>
              <li>Blog & Insights</li>
              <li>Resources</li>
              <li>FAQs</li>
            </ul>
          </div>

          <div className="column2">
            <h4 className="font-medium">Company</h4>
            <ul className="mt-4 text-black/75 text-sm space-y-1">
              <li>Home</li>
              <li>About</li>
              <li>Service</li>
              <li>Testimonials</li>
              <li>Pricing</li>
              <li>Career</li>
            </ul>
          </div>

          <div className="column3">
            <h4 className="font-medium">Legal Links</h4>
            <ul className="mt-4 text-black/75 text-sm space-y-1">
              <li>What We Offer</li>
              <li>Case Studies</li>
              <li>Blog & Insights</li>
              <li>Resources</li>
              <li>FAQs</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="Copyright border-t border-gray-300 py-7 text-center">
        <p className="text-sm text-gray-600">
          &copy; Medico Inc. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
