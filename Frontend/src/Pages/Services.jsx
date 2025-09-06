import React from "react";
import {
  MdLocalHospital,
  MdFavorite,
  MdChildCare,
  MdPregnantWoman,
  MdHealing,
  MdPsychology,
  MdAccessibility,
  MdVisibility,
} from "react-icons/md";

import ServiceCard from "../Components/ServiceCard.jsx";

import ServiceImg1 from "../assets/serviceImg1.webp";
import ServiceImg2 from "../assets/serviceImg2.webp";
import ServiceImg3 from "../assets/serviceImg3.webp";
import ServiceImg4 from "../assets/serviceImg4.webp";
import ServiceImg5 from "../assets/serviceImg5.webp";
import ServiceImg6 from "../assets/serviceImg6.webp";
import ServiceImg7 from "../assets/serviceImg7.webp";
import ServiceImg8 from "../assets/serviceImg8.webp";

const Services = () => {
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
    {
      id: 5,
      title: "Neurology (Brain & Nerves)",
      description:
        "Specialized neurological care for conditions involving the brain, spinal cord, and nervous system.",
      image: ServiceImg5,
      icon: <MdPsychology className="text-white w-6 h-6" />,
    },
    {
      id: 6,
      title: "Orthopedics (Bone & Joint Care)",
      description:
        "Comprehensive treatment for bone, joint, and musculoskeletal issues to restore mobility and strength.",
      image: ServiceImg6,
      icon: <MdAccessibility className="text-white w-6 h-6" />,
    },
    {
      id: 7,
      title: "Ophthalmology (Eye Care)",
      description:
        "Expert eye care services, including vision correction, disease management, and surgical procedures.",
      image: ServiceImg7,
      icon: <MdVisibility className="text-white w-6 h-6" />,
    },
    {
      id: 8,
      title: "Dermatology (Skin Care)",
      description:
        "Our dermatologists diagnose and treat a variety of skin, hair, and nail conditions with advanced therapies.",
      image: ServiceImg8,
      icon: <MdHealing className="text-white w-6 h-6" />,
    },
  ];

  return (
    <div>
      <section className="headerSection relative text-white py-30 px-20 text-center">
        <h1 className="font-semibold text-5xl">Services</h1>
      </section>

      <section className="serviceCardsSection text-center py-20 px-10 lg:px-20">
        <p className="border border-black/50 inline px-4 py-1 rounded-full font-medium text-xs">
          Our Services
        </p>
        <h2 className="font-semibold text-4xl mt-4 mb-10">
          Our Mission is to Provide the <br /> Best Care Services to <br /> Our
          Patients
        </h2>

        <div
          className="serviceCards mt-8 grid grid-rows-2
         grid-cols-1 xxs:grid-cols-2 md:grid-cols-4 gap-7"
        >
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
