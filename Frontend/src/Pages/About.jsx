import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaKitMedical } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
import { FaPhoneAlt, FaLinkedin } from "react-icons/fa";

import MissionImg1 from "../assets/missionImg1.png";
import MissionImg2 from "../assets/missionImg2.svg";
import MissionImg3 from "../assets/missionImg3.png";
import AboutImg1 from "../assets/aboutImg1.webp";
import AboutImg2 from "../assets/aboutImg2.webp";
import AboutImg3 from "../assets/aboutImg3.webp";
import AboutImg4 from "../assets/aboutImg4.webp";
import AboutImg5 from "../assets/aboutImg5.webp";
import AboutImg6 from "../assets/aboutImg6.webp";
import AboutImg7 from "../assets/aboutImg7.webp";

const About = () => {
  return (
    <div>
      <section className="aboutHeroSection relative z-10 py-36 px-10 lg:px-20 text-white">
        <p className="border border-white/50 inline px-4 py-1 rounded-full font-medium text-xs">
          About Us
        </p>

        <div className="aboutInfo flex flex-col md:flex-row justify-between gap-10 mt-5">
          <h1 className="w-full pr-20 md:w-2/3 text-4xl lg:text-5xl font-medium leading-16">
            Caring for Your Family’s <br />{" "}
            <span className="text-black">Health</span> Since 2001
          </h1>
          <p className="w-full pr-20 md:w-1/3 text-sm text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
            dolor assumenda quos illo consequatur porro, dolore minima
            cupiditate,
          </p>
        </div>

        <div className="stats grid grid-cols-1 xms:grid-cols-3 gap-10 mt-20">
          <div className="successfullDeliveries">
            <h3 className="font-medium text-4xl xsm:text-5xl sm:text-6xl mlg:text-7xl">
              +3K
            </h3>
            <p className="text-white mt-3">Successfull Deliveries</p>
          </div>
          <div className="patientsServed">
            <h3 className="font-medium text-4xl xsm:text-5xl sm:text-6xl mlg:text-7xl">
              +50M
            </h3>
            <p className="text-white mt-3">Patients Served</p>
          </div>
          <div className="branchesWorldwide">
            <h3 className="font-medium text-4xl xsm:text-5xl sm:text-6xl mlg:text-7xl">
              +1.2K
            </h3>
            <p className="text-white mt-3">Branches Worldwide</p>
          </div>
        </div>

        <div className="overlay absolute top-0 left-0 -z-10 w-full h-full bg-green-700/15"></div>
      </section>

      <section className="ourMissionSection px-10 lg:px-20 py-20 flex flex-col items-center gap-16">
        <div className="aboutNavbar flex flex-col items-center gap-5">
          <h3 className="text-5xl font-medium">About Medico</h3>
          <ul className="flex items-center gap-5 text-sm text-gray-600">
            <li>Our Mission</li>
            <li>Our Values</li>
            <li>Our Story</li>
            <li>Our Team</li>
          </ul>
        </div>

        <div className="block1 w-full flex flex-col mlg:flex-row justify-around items-center gap-5">
          <div className="illustration1 w-72 mlg:w-96 h-72 mlg:h-96 overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={MissionImg1}
              alt="Mission Image"
            />
          </div>
          <div className="text w-full mlg:w-1/2">
            <h4 className="text-sm font-medium text-green-700">WHAT</h4>
            <h3 className="text-3xl font-medium">
              We're on a mission to free people from the hassle of paying costs
              for healthcare.
            </h3>
          </div>
        </div>

        <div className="block2 w-full flex flex-col-reverse mlg:flex-row justify-around items-center gap-5">
          <div className="text w-full mlg:w-1/2">
            <h4 className="text-sm font-medium text-green-700">WHY</h4>
            <h3 className="text-3xl font-medium">
              Trust + Control = Peace of Mind, We believe everyone should have
              both
            </h3>
            <p className="text-sm text-gray-600 mt-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatem eveniet illum modi doloremque vero a vel voluptatibus
              saepe, debitis id tenetur alias aperiam atque molestias? Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Doloremque,
              possimus.
            </p>
          </div>
          <div className="illustration1 w-72 mlg:w-96 h-72 overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={MissionImg2}
              alt="Mission Image"
            />
          </div>
        </div>

        <div className="block3 w-full flex flex-col mlg:flex-row justify-around items-center gap-5">
          <div className="illustration1 w-72 mlg:w-96 h-72 overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={MissionImg3}
              alt="Mission Image"
            />
          </div>
          <div className="text w-full mlg:w-1/2">
            <h4 className="text-sm font-medium text-green-700">HOW</h4>
            <h3 className="text-3xl font-medium">
              By building one single solution that combines insurance, billing,
              and care.
            </h3>
            <p className="text-sm text-gray-600 mt-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatem eveniet illum modi doloremque vero a vel voluptatibus
              saepe, debitis id tenetur alias aperiam atque molestias? Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Doloremque,
              possimus.
            </p>
          </div>
        </div>
      </section>

      <section className="teamSection py-20 px-10 lg:px-20 bg-gradient-to-r from-transparent to-green-700/10">
        <p className="border border-black/50 inline px-4 py-1 rounded-full font-medium text-xs">
          Our Team
        </p>

        <div className="about flex flex-col mlg:flex-row text-start mlg:items-end justify-between gap-7">
          <h2 className="text-5xl leading-14 font-semibold mt-5">
            The Team Behind Your <br />
            <span className="text-green-700">Good Health</span>
          </h2>
          <button className="cursor-pointer flex items-center justify-center gap-3 text-sm bg-green-700 hover:bg-green-700/75 w-36 py-3 rounded-full text-white font-medium transition-all duration-300">
            <FaPhoneAlt size={20} color="white" />
            Book a Call
          </button>
        </div>

        <div className="imageCarousel grid grid-cols-1 sm:grid-cols-2 mlg:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center gap-4 mt-16">
          <div className="column1">
            <div className="card1 w-52 h-52 rounded-bl-full rounded-tl-full overflow-hidden">
              <img
                className="w-full h-full object-cover grayscale-100"
                src={AboutImg1}
                alt="About Image"
              />
            </div>

            <h4 className="font-medium mt-2">Dr. Akhtar</h4>
            <p className="text-sm flex items-center gap-2 text-black/75">
              Child Doctor <FaLinkedin />
            </p>
          </div>

          <div className="column2 flex flex-col gap-5">
            <div className="card2">
              <div className="image1 w-52 h-52 rounded-tl-full rounded-tr-full overflow-hidden">
                <img
                  className="w-full h-full object-cover grayscale-100"
                  src={AboutImg2}
                  alt="About Image"
                />
              </div>
              <h4 className="font-medium mt-2">Dr. Mubashir</h4>
              <p className="text-sm flex items-center gap-2 text-black/75">
                Homeopathic <FaLinkedin />
              </p>
            </div>

            <div className="card3">
              <div className="image2 w-52 h-52 rounded-full overflow-hidden">
                <img
                  className="w-full h-full object-cover grayscale-100"
                  src={AboutImg3}
                  alt="About Image"
                />
              </div>

              <h4 className="font-medium mt-2">Dr. Aleena</h4>
              <p className="text-sm flex items-center gap-2 text-black/75">
                Physio Therapist <FaLinkedin />
              </p>
            </div>
          </div>

          <div className="column3">
            <div className="card4 w-52 h-52 rounded-bl-full rounded-tl-full overflow-hidden">
              <img
                className="w-full h-full object-cover grayscale-100"
                src={AboutImg4}
                alt="About Image"
              />
            </div>
            <h4 className="font-medium mt-2">Dr. Shafiq</h4>
            <p className="text-sm flex items-center gap-2 text-black/75">
              Child Doctor <FaLinkedin />
            </p>
          </div>

          <div className="column4 hidden lg:flex flex-col gap-5">
            <div className="card5">
              <div className="image1 w-52 h-52 rounded-full overflow-hidden">
                <img
                  className="w-full h-full object-cover grayscale-100"
                  src={AboutImg5}
                  alt="About Image"
                />
              </div>
              <h4 className="font-medium mt-2">Dr. PaliGemma</h4>
              <p className="text-sm flex items-center gap-2 text-black/75">
                Gynacologist <FaLinkedin />
              </p>
            </div>

            <div className="card6">
              <div className="image2 w-52 h-52 rounded-bl-full rounded-br-full overflow-hidden">
                <img
                  className="w-full h-full object-cover grayscale-100"
                  src={AboutImg6}
                  alt="About Image"
                />
              </div>
              <h4 className="font-medium mt-2">Dr. Kashif</h4>
              <p className="text-sm flex items-center gap-2 text-black/75">
                Dentist <FaLinkedin />
              </p>
            </div>
          </div>

          <div className="column5 hidden xl:block">
            <div className="card7 w-52 h-52 rounded-br-full rounded-tr-full overflow-hidden">
              <img
                className="w-full h-full object-cover grayscale-100"
                src={AboutImg7}
                alt="About Image"
              />
            </div>
            <h4 className="font-medium mt-2">Dr. Amin</h4>
            <p className="text-sm flex items-center gap-2 text-black/75">
              Heart Specialist <FaLinkedin />
            </p>
          </div>
        </div>
      </section>

      <section className="relatedLinks px-10 lg:px-20 py-20 text-center">
        <h2 className="font-semibold text-3xl">Related Link</h2>

        <div className="boxes flex flex-col mlg:flex-row items-center justify-between gap-10 mt-10">
          <div className="box1 text-start">
            <div className="icon w-52 h-52">
              <FaSearch size={150} fill="#008236" />
            </div>
            <h3 className="font-semibold text-lg">Open Positions</h3>
            <button className="border-b-2 py-1">Check out</button>
          </div>

          <div className="bg-gray-500/50 w-[1px]"></div>

          <div className="box2 text-start">
            <div className="icon w-52 h-52">
              <FaKitMedical size={150} fill="#008236" />
            </div>
            <h3 className="font-semibold text-lg">Press Kit</h3>
            <button className="border-b-2 py-1">Browse kit</button>
          </div>

          <div className="bg-gray-500/50 w-[1px]"></div>

          <div className="box3 text-start">
            <div className="icon w-52 h-52">
              <CgWebsite size={150} color="#008236" />
            </div>
            <h3 className="font-semibold text-lg">CFO Connect</h3>
            <button className="border-b-2 py-1">Visit website</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
