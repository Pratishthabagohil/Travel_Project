import { useParams, Link } from "react-router-dom";
import { MapPin, Calendar, Star, ArrowLeft } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

function DestinationDetail({ destinations }) {
  const { id } = useParams();
  const destination = destinations.find((dest) => dest.id === parseInt(id));
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [formData, setFormData] = useState({
    passengers: 1,
    phone: "",
    email: "",
  });
  const [message, setMessage] = useState("");

  const handleBookingClick = () => {
    setShowBookingForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingData = {
      packageName: destination.name,
      price: destination.price,
      duration: destination.duration,
      date: destination.date,
      passengers: formData.passengers,
      phone: formData.phone,
      email: formData.email || "Not provided",
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        bookingData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setMessage("Booking email sent successfully!");
          setShowBookingForm(false);
        },
        (error) => {
          setMessage("Failed to send booking email. Try again.");
          console.error("EmailJS error:", error);
        }
      );
  };

  if (!destination) {
    return (
      <section className="py-8 bg-gray-50 sm:py-20">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Destination Not Found
          </h2>
          <Link
            to="/"
            className="text-blue-500 hover:text-blue-700 font-semibold flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" /> Back to Home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 bg-gray-50 sm:py-20">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="text-blue-500 hover:text-blue-700 font-semibold flex items-center gap-2 mb-6"
        >
          <ArrowLeft className="w-5 h-5" /> Back to Home
        </Link>

        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {destination.name}
          </h1>
          <p className="text-xl text-blue-400 mb-6">{destination.title}</p>

          {/* Photos Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {destination.photos.map((photo, idx) => (
              <img
                key={idx}
                src={photo}
                alt={`${destination.name} photo ${idx + 1}`}
                className="w-full h-48 object-cover rounded-lg"
              />
            ))}
          </div>

          {/* Details Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-blue-400" />
                <h3 className="text-xl font-semibold">Overview</h3>
              </div>
              <p className="text-gray-600 mb-4">{destination.description}</p>
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-5 h-5 text-blue-400" />
                <span className="text-gray-700">
                  Duration: {destination.duration}
                </span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-5 h-5 text-blue-400" />
                <span className="text-gray-700">Date: {destination.date}</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <span className="text-gray-700">
                  Rating: {destination.rating}
                </span>
              </div>
              <p className="text-2xl font-bold text-blue-400 mt-4">
                {destination.price} /person
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Places to Visit</h3>
              <ul className="list-disc pl-5 text-gray-600">
                {destination.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Itinerary Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Itinerary</h3>
            <div className="space-y-4">
              {destination.itinerary.map((item) => (
                <div key={item.day} className="border-l-4 border-blue-500 pl-4">
                  <h4 className="text-lg font-medium text-gray-800">
                    Day {item.day}
                  </h4>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Booking Form */}
          {showBookingForm && (
            <div className="mt-8 bg-gray-100 p-4 sm:p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Book Your Adventure
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {/* Left Part: Static Photo */}
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1636382903005-67a3835a1e0e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGJvYXQlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D"
                    alt="Travel adventure"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg flex items-end">
                    <p className="text-white font-semibold p-4">
                      Start Your Journey
                    </p>
                  </div>
                </div>

                {/* Right Part: Form */}
                <div>
                  <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
                    <p className="text-gray-700 mb-1">
                      <strong>Package:</strong> {destination.name}
                    </p>
                    <p className="text-gray-700 mb-1">
                      <strong>Price:</strong> {destination.price} /person
                    </p>
                    <p className="text-gray-700 mb-1">
                      <strong>Duration:</strong> {destination.duration}
                    </p>
                    <p className="text-gray-700">
                      <strong>Date:</strong> {destination.date}
                    </p>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium mb-2">
                        Total Passengers
                      </label>
                      <input
                        type="number"
                        name="passengers"
                        value={formData.passengers}
                        onChange={handleInputChange}
                        min="1"
                        className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                        required
                      />
                    </div>
                    <div className="mb-6">
                      <label className="block text-gray-700 font-medium mb-2">
                        Email (Optional)
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                      />
                    </div>
                    <div className="flex gap-4 justify-center">
                      <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold transition-colors duration-200"
                      >
                        Submit Booking
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowBookingForm(false)}
                        className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold transition-colors duration-200"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                  {message && (
                    <p className="mt-4 text-center text-gray-700 font-medium">
                      {message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Book Now Button */}
          {!showBookingForm && (
            <div className="mt-8 text-center">
              <button
                onClick={handleBookingClick}
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors duration-200"
              >
                Confirm Booking
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default DestinationDetail;
