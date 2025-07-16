import DestinationCard from "./DestinationCard";

function Destinations({ destinations }) {
  return (
    <section id="destinations" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Popular Destinations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Carefully curated travel packages to India's most beautiful and
            culturally rich destinations
          </p>
        </div>

        <div className="flex flex-row overflow-x-auto gap-4 pb-4 hide-scrollbar snap-x snap-mandatory md:flex-wrap md:grid md:grid-cols-2 lg:grid-cols-3 lg:overflow-x-visible">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="flex-shrink-0 w-[280px] snap-center md:w-auto"
            >
              <DestinationCard destination={destination} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Destinations;
