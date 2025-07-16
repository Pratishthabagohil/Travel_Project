import { Phone, Mail, MapPin } from "lucide-react";

function Contact({ destinations }) {
  return (
    <section id="contact" className="py-20 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Ready for Your Next Adventure?
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              Get in touch with our travel experts to plan your perfect getaway
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-blue-400 mr-4" />
                <div>
                  <p className="font-semibold">Call Us</p>
                  <p className="text-gray-300">+91 8732992113</p>
                </div>
              </div>

              <div className="flex items-center">
                <Mail className="w-6 h-6 text-blue-400 mr-4" />
                <div>
                  <p className="font-semibold">Email Us</p>
                  <p className="text-gray-300">ddgohil1@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-blue-400 mr-4" />
                <div>
                  <p className="font-semibold">Visit Us</p>
                  <p className="text-gray-300">
                    71-72, Street no.1, Vijayrajnagar, bharatnagar, Gujarat
                    364002
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white text-gray-800 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6">Get a Free Quote</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Select Destination</option>
                {destinations.map((dest) => (
                  <option key={dest.id} value={dest.name}>
                    {dest.name}
                  </option>
                ))}
              </select>
              <textarea
                placeholder="Tell us about your travel plans..."
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              ></textarea>
              <button className="w-full bg-blue-500 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                Get My Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
