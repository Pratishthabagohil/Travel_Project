import { MapPin, Menu, X } from "lucide-react";

function Header({ isMenuOpen, setIsMenuOpen }) {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-3">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="text-white p-1 sm:p-2 rounded-lg mr-3">
              <img src="/logo.png" alt="Logo" width={60} height={20} />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-800">
                DD Tours & Travels
              </h1>
              <p className="text-xs md:text-sm text-blue-400">
                Explore Beyond Boundaries
              </p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-blue-400 font-medium transition-colors"
            >
              Home
            </a>
            <a
              href="#destinations"
              className="text-gray-700 hover:text-blue-400 font-medium transition-colors"
            >
              Destinations
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-blue-400 font-medium transition-colors"
            >
              About
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 hover:text-blue-400 font-medium transition-colors"
            >
              Reviews
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-400 font-medium transition-colors"
            >
              Contact
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+918732992113"
              className="text-blue-400 hover:text-blue-700 font-semibold"
            >
              📞 +91 87329 92113
            </a>
            <button className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-colors">
              Get Quote
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4 px-4">
              <a
                href="#home"
                className="text-gray-700 hover:text-blue-400 font-medium"
              >
                Home
              </a>
              <a
                href="#destinations"
                className="text-gray-700 hover:text-blue-400 font-medium"
              >
                Destinations
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-400 font-medium"
              >
                About
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 hover:text-blue-400 font-medium"
              >
                Reviews
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-400 font-medium"
              >
                Contact
              </a>
              <button className="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold w-fit">
                Get Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
