import { MapPin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="bg-blue-500 text-white p-2 rounded-lg mr-3">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">DD Tours & Travels</h3>
                <p className="text-blue-400">Explore Beyond Boundaries</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted partner for unforgettable journeys across India's
              most spectacular destinations. Creating memories that last a
              lifetime.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a
                  href="#home"
                  className="hover:text-blue-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#destinations"
                  className="hover:text-blue-400 transition-colors"
                >
                  Destinations
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-blue-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-blue-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Popular Tours</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a
                  href="/destination/1"
                  className="hover:text-blue-400 transition-colors"
                >
                  Kashmir Package
                </a>
              </li>
              <li>
                <a
                  href="/destination/8"
                  className="hover:text-blue-400 transition-colors"
                >
                  Kerala Backwaters
                </a>
              </li>
              <li>
                <a
                  href="/destination/6"
                  className="hover:text-blue-400 transition-colors"
                >
                  Bhutan Tour
                </a>
              </li>
              <li>
                <a
                  href="/destination/10"
                  className="hover:text-blue-400 transition-colors"
                >
                  Char Dham Yatra
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>
            © 2025 DD Tours & Travels. All rights reserved. | Designed with ❤️
            for travelers
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
