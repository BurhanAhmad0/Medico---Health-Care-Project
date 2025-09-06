import React from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  return (
    <div id={review.id} className="reviewCard snap-center shrink-0 w-96">
      <FaQuoteLeft size={30} color="#008236" />
      <p className="my-4 text-gray-700 h-20">
        {review.text || "This is a sample review text."}
      </p>
      <div className="userImg w-16 h-16 rounded-full mb-4 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={review.image}
          alt="Review Image"
          loading="lazy"
        />
      </div>
      <h4 className="font-medium mb-1">{review.name}</h4>
      <p className="text-gray-600/75 text-sm mb-1">{review.role}</p>

      <div className="starRating flex space-x-1 text-yellow-400 mt-2">
        {[...Array(review.rating)].map((_, index) => (
          <FaStar key={index} />
        ))}
      </div>
    </div>
  );
};

export default ReviewCard;
