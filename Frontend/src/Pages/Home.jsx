import React from "react";
import {
  MdLocalHospital,
  MdFavorite,
  MdChildCare,
  MdPregnantWoman,
} from "react-icons/md";
import { FaPhoneAlt, FaLinkedin } from "react-icons/fa";

import HeroImg1 from "../assets/heroImg1.webp";
import HeroImg2 from "../assets/heroImg2.webp";
import ServiceImg1 from "../assets/serviceImg1.webp";
import ServiceImg2 from "../assets/serviceImg2.webp";
import ServiceImg3 from "../assets/serviceImg3.webp";
import ServiceImg4 from "../assets/serviceImg4.webp";
import ReviewImg1 from "../assets/reviewImg1.webp";
import ReviewImg2 from "../assets/reviewImg2.webp";
import ReviewImg3 from "../assets/reviewImg3.webp";
import AboutImg1 from "../assets/aboutImg1.webp";
import AboutImg2 from "../assets/aboutImg2.webp";
import AboutImg3 from "../assets/aboutImg3.webp";
import AboutImg4 from "../assets/aboutImg4.webp";
import AboutImg5 from "../assets/aboutImg5.webp";
import AboutImg6 from "../assets/aboutImg6.webp";
import AboutImg7 from "../assets/aboutImg7.webp";

import ServiceCard from "../Components/ServiceCard.jsx";
import ReviewCard from "../Components/ReviewCard.jsx";

const Home = () => {
  const services = [
    {
      id: 1,
      title: "General / Primary Care",
      description:
        "Our primary care physicians provide comprehensive medical care for patients of all ages.",
      image: ServiceImg1,
      icon: <MdLocalHospital className="text-white w-6 h-6" />,
    },
    {
      id: 2,
      title: "Cardiology (Heart Care)",
      description:
        "Our cardiology specialists diagnose, treat, and prevent a wide range of heart-related conditions.",
      image: ServiceImg2,
      icon: <MdFavorite className="text-white w-6 h-6" />,
    },
    {
      id: 3,
      title: "Pediatrics (Child Care)",
      description:
        "We offer complete healthcare services for infants, children, and adolescents.",
      image: ServiceImg3,
      icon: <MdChildCare className="text-white w-6 h-6" />,
    },
    {
      id: 4,
      title: "Gynecology & Obstetrics",
      description:
        "Our gynecology and obstetrics department supports women’s health at every stage of life.",
      image: ServiceImg4,
      icon: <MdPregnantWoman className="text-white w-6 h-6" />,
    },
  ];

  const reviews = [
    {
      id: 1,
      text: "The doctors and staff were incredibly caring. They explained everything and made me feel at ease.",
      name: "Emily Carter",
      role: "Patient",
      rating: 2,
      image: ReviewImg1,
    },
    {
      id: 2,
      text: "Very professional team and a clean clinic. My appointment was on time and smooth.",
      name: "James Wilson",
      role: "Patient",
      rating: 4,
      image: ReviewImg2,
    },
    {
      id: 3,
      text: "Excellent care and attention. Highly recommend this clinic to anyone looking for quality service.",
      name: "Sophia Martinez",
      role: "Patient",
      rating: 5,
      image: ReviewImg3,
    },
  ];

  return (
    <div>
      <section className="heroSection relative text-center py-20">
        <h1 className="text-5xl font-semibold leading-16 mb-7">
          Choose the Right <br />
          Doctor for{" "}
          <span className="border-b-4 border-yellow-300">Your Health</span>
        </h1>
        <p className="text-black/75">
          Quality healthcare made accessible with expert doctors, facilities,{" "}
          <br />
          modern and round-the-clock support
        </p>
        <button className="cursor-pointer text-sm bg-green-700 hover:bg-green-700/75 w-44 px-2 py-3 mt-12 rounded-full text-white font-medium transition-all duration-300">
          Book a Consultation
        </button>

        <div className="images hidden sm:flex justify-between px-10 lg:px-20 mt-10 mlg:-mt-16">
          {/* Left Image */}
          <div className="leftImg w-52 h-52 rounded-3xl rounded-tl-none overflow-hidden">
            <img
              loading="lazy"
              className="w-full h-full object-cover"
              src={HeroImg1}
              alt="Hero Image 1"
            />
          </div>

          {/* Right Image */}
          <div className="rightImg w-52 h-52 rounded-3xl rounded-bl-none overflow-hidden">
            <img
              loading="lazy"
              className="w-full h-full object-cover"
              src={HeroImg2}
              alt="Hero Image 2"
            />
          </div>
        </div>
      </section>

      <section className="servicesSection text-center py-20 bg-green-100">
        <p className="border border-black/50 inline px-4 py-1 rounded-full font-medium text-xs">
          Our Services
        </p>
        <h2 className="text-3xl lg:text-4xl font-semibold mt-5">
          Our Marketing Solutions
        </h2>
        <p className="mt-3 text-black/75 text-sm px-12">
          We deliver tailored marketing solutions designed to scale your brand
          and drive measurable <br /> results from brand building to data-led
          campaigns.
        </p>

        <div className="serviceCards mt-8 grid grid-cols-1 xxs:grid-cols-2 md:grid-cols-4 gap-7 px-10 lg:px-20">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      <section className="aboutSection py-20 px-10 lg:px-20">
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
                loading="lazy"
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
                  loading="lazy"
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
                  loading="lazy"
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
                loading="lazy"
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
                  loading="lazy"
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
                  loading="lazy"
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
                loading="lazy"
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

      <section className="testimonialsSection px-10 lg:px-20 py-20 flex flex-col mlg:flex-row gap-10">
        <div className="leftSection w-full mlg:w-1/3">
          <p className="border border-black/50 inline px-4 py-1 rounded-full font-medium text-xs">
            Our Testimonials
          </p>
          <h2 className="text-4xl lg:text-5xl font-semibold mt-6">
            Trusted By Many
          </h2>
          <p className="mt-4 text-black/75 text-sm">
            Trusted by leading brands to deliver real impact — and their words
            speak for themselves.
          </p>
          <div className="arrowBtns flex gap-1 mt-6">
            {/* Left Arrow */}
            <button className="leftArrowBtn cursor-pointer border border-gray-400/50 w-12 h-12 rounded-full flex items-center justify-center mr-3 hover:bg-black/5 transition-all duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            {/* Right Arrow */}
            <button className="rightArrowBtn cursor-pointer bg-green-700 w-12 h-12 rounded-full flex items-center justify-center hover:bg-green-700/75 transition-all duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="rightSection relative w-full mlg:w-2/3">
          {/* Scrollable reviews */}
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbarHide">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>

          {/* Fixed Right Gradient Overlay */}
          <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
