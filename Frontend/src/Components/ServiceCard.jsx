import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div className="card rounded-xl">
      {/* Thumbnail */}
      <div className="thumbnail relative rounded-xl w-full h-48 overflow-hidden">
        <img
          loading="lazy"
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="imgOverlay bg-green-300/10 w-full h-48 absolute top-0 z-50"></div>
      </div>

      {/* Icon */}
      <div className="icon w-12 h-12 rounded-full bg-black/85 mt-3 flex items-center justify-center">
        {service.icon}
      </div>

      {/* Title */}
      <h4 className="text-start font-semibold mt-3">{service.title}</h4>

      {/* Description */}
      <p className="text-start text-black/75 mt-2 text-sm">
        {service.description}
      </p>
    </div>
  );
};

export default ServiceCard;
