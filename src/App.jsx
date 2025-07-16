import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Destinations from "./components/Destinations";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import DestinationDetail from "./components/DestinationDetail";
import { destinations, testimonials } from "./data";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Destinations destinations={destinations} />
                <WhyChooseUs />
                <Testimonials testimonials={testimonials} />
                <Contact destinations={destinations} />
              </>
            }
          />
          <Route
            path="/destination/:id"
            element={<DestinationDetail destinations={destinations} />}
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;