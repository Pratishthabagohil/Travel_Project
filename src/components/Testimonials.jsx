import { Star } from "lucide-react";

function Testimonials({ testimonials = [] }) {
  if (!testimonials || testimonials.length === 0) {
    return (
      <section id="testimonials" className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              What Our Travelers Say
            </h2>
            <p className="text-xl text-gray-600">
              No reviews available at the moment.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="testimonials" className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-xl text-gray-600">
            Real experiences from real travelers
          </p>
        </div>

        <div className="flex flex-row overflow-x-auto gap-4 pb-4 hide-scrollbar snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-x-visible">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[280px] snap-center md:w-auto"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg h-[240px] flex flex-col">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-500 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic line-clamp-3 flex-grow">
                  "{testimonial.text}"
                </p>
                <div className="mt-auto">
                  <h4 className="font-semibold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 text-sm">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
