import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Nav from "./component/Nav";
import Hero from "./component/Hero";
import ContactForm from "./component/ContactForm";
import About from "./component/About";
import Footer from "./component/Footer";
import Spot from "./component/Spot";

// Preload all route images so navigation is instantaneous
import heroMain from "./assets/HeroMain.jpg";
import heroCard from "./assets/HeroCard.jpg";
import heroCommunity from "./assets/HeroCommunity.jpg";
import aboutFirst from "./assets/I-1.jpg";
import aboutSecond from "./assets/Image.jpg";
import aboutReconnect from "./assets/Reconnectsection.jpg";

const PRELOAD_IMAGES = [
  heroMain,
  heroCard,
  heroCommunity,
  aboutFirst,
  aboutSecond,
  aboutReconnect,
];

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname, hash]);

  return null;
};

const App = () => {
  useEffect(() => {
    PRELOAD_IMAGES.forEach((src) => {
      const img = new Image();
      img.decoding = "async";
      img.src = src;
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ScrollToTop />
      <Nav />

      <main className="flex-1">
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <ContactForm />
                <Footer />
              </>
            }
          />

          {/* About Page */}
          <Route path="/about" element={<About />} />

          {/* Spot / Book a Session Page */}
          <Route path="/spot" element={<Spot />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
