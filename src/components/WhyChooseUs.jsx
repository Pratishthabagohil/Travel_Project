import { MapPin, Calendar, Users, Clock } from "lucide-react";

function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Why Choose DD Tours?
          </h2>
          <p className="text-xl text-gray-600">
            Your trusted travel partner for over a decade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="bg-sky-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500 transition-colors">
              <MapPin className="w-10 h-10 text-blue-400  group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert Local Guides</h3>
            <p className="text-gray-600">
              Knowledgeable guides who know every hidden gem and local secret
            </p>
          </div>

          <div className="text-center group">
            <div className="bg-sky-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500 transition-colors">
              <Calendar className="w-10 h-10 text-blue-400  group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Flexible Booking</h3>
            <p className="text-gray-600 ">
              Easy booking process with flexible cancellation policies
            </p>
          </div>

          <div className="text-center group">
            <div className="bg-sky-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500 transition-colors">
              <Users className="w-10 h-10 text-blue-400  group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Small Groups</h3>
            <p className="text-gray-600">
              Intimate group sizes for personalized attention and better
              experiences
            </p>
          </div>

          <div className="text-center group">
            <div className="bg-sky-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500 transition-colors">
              <Clock className="w-10 h-10 text-blue-400  group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600">
              Round-the-clock customer support for peace of mind during your
              travels
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
