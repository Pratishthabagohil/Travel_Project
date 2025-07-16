import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Star, ArrowRight } from "lucide-react";

function DestinationCard({ destination }) {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => setIsLiked(!isLiked);

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
      <div className="relative overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <button
          className="absolute top-4 right-4 bg-white/90 rounded-full p-2 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={toggleLike}
          aria-label={
            isLiked ? `Unlike ${destination.name}` : `Like ${destination.name}`
          }
        >
          <Heart
            className={`w-5 h-5 transition-colors ${
              isLiked
                ? "text-red-500 fill-red-500"
                : "text-gray-600 hover:text-red-500"
            }`}
          />
        </button>
        <div className="absolute bottom-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {destination.duration}
        </div>
      </div>

      <div className="p-6 flex flex-col h-[260px]">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-xl font-bold text-gray-800">
              {destination.name}
            </h3>
            <p className="text-blue-400 font-medium">{destination.title}</p>
          </div>
          <div className="flex items-center bg-yellow-100 px-2 py-1 rounded-full">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="text-sm font-semibold ml-1">
              {destination.rating}
            </span>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow-0">
          {destination.description}
        </p>

        <div className="mb-4 flex-grow">
          <div className="flex flex-wrap gap-2">
            {destination.highlights.slice(0, 3).map((highlight, idx) => (
              <span
                key={idx}
                className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs border border-gray-200"
              >
                {highlight}
              </span>
            ))}
            {destination.highlights.length > 3 && (
              <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs border border-gray-200">
                +{destination.highlights.length - 3} more
              </span>
            )}
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <span className="text-2xl font-bold text-blue-400">
              {destination.price}
            </span>
            <span className="text-gray-500 text-sm">/person</span>
          </div>
          <Link
            to={`/destination/${destination.id}`}
            className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold flex items-center gap-2 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 md:px-6 md:py-2 md:gap-2 px-3 py-1"
            aria-label={`Book a trip to ${destination.name}`}
          >
            <span className="hidden md:inline">Book Now</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DestinationCard;
