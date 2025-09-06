import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const Contact = () => {
  return (
    <div>
      <section className="contactHeaderSection relative bg-green-700 text-white py-30 mx-10 lg:mx-20 rounded-bl-xl rounded-br-xl text-center">
        <h1 className="font-semibold text-3xl md:text-5xl">Contact us</h1>
        <p className="mt-4 text-sm md:text-lg px-10 md:px-20 mlg:px-40 lg:px-60">
          We’re here to take care of your health. Fill out the form below or
          contact us directly
        </p>
      </section>

      <section className="inputForm bg-gradient-to-b from-transparent to-green-600/10 py-20 px-10 lg:px-20 flex flex-col md:flex-row gap-10">
        <div className="left w-full md:w-1/2">
          <h1 className="text-2xl font-medium pr-32 lg:pr-52">
            Get in Touch - We're Here to Help!
          </h1>
          <p className="text-sm text-gray-500 mt-4">
            Have questions or need assistance? Our team is always ready to guide
            you on your journey.
          </p>

          <div className="contactInfo grid grid-cols-1 mlg:grid-cols-2 grid-rows-2 gap-5 lg:gap-10 mt-10">
            <div className="phone">
              <h3 className="font-medium text-lg">Call Center</h3>
              <p className="text-sm text-gray-500">(208) 555-0112</p>
            </div>

            <div className="ourLocation">
              <h3 className="font-medium text-lg">Our Location</h3>
              <p className="text-sm text-gray-500">
                1901 Thornridge Cir. Shiloh, Hawaii
              </p>
            </div>

            <div className="socialNetwork">
              <h3 className="font-medium text-lg">Social Network</h3>
              <p className="text-sm text-gray-500">Nusa Penida, Indonesia</p>
            </div>

            <div className="email">
              <h3 className="font-medium text-lg">Email</h3>
              <p className="text-sm text-gray-500">
                nathan.roberts@example.com
              </p>
            </div>
          </div>

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

        <div className="right w-full md:w-1/2 bg-gray-300/40 rounded-xl p-4">
          <h3 className="font-medium text-2xl">Send us a Message</h3>
          <p className="text-sm text-gray-500 mt-4">
            Have questions or need assistance? Our team is always ready to guide
            you on your journey.
          </p>

          <form>
            <div className="inputFields flex flex-col gap-3 mt-10">
              <div className="fullName">
                <label className="text-gray-500" htmlFor="fullName">
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="Full Name"
                  className="p-3 bg-white w-full rounded-lg outline-none border border-gray-400"
                />
              </div>

              <div className="email">
                <label className="text-gray-500" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="text"
                  placeholder="yourwinzy@gmail.com"
                  className="p-3 w-full bg-white rounded-lg outline-none border border-gray-400"
                />
              </div>

              <div className="subject">
                <label className="text-gray-500" htmlFor="email">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Your Subject"
                  className="p-3 w-full bg-white rounded-lg outline-none border border-gray-400"
                />
              </div>

              <div className="message">
                <label className="text-gray-500" htmlFor="email">
                  Message
                </label>
                <input
                  id="message"
                  type="text"
                  placeholder="Your Message"
                  className="p-3 w-full bg-white rounded-lg outline-none border border-gray-400"
                />
              </div>

              <button className="bg-black w-full mt-3 py-3 rounded-lg cursor-pointer text-white font-medium hover:bg-gray-800 transition">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
