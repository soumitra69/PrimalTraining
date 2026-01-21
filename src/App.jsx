import { Routes, Route } from "react-router-dom";
import Nav from "./component/Nav";
import Hero from "./component/Hero";
import ContactForm from "./component/ContactForm";
import About from "./component/About";
import Footer from "./component/Footer";
import Spot from "./component/Spot";

const App = () => {
  return (
    <>
      <Nav />

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
        <Route path="/spot" element={<Spot />} />
      </Routes>
    </>
  );
};

export default App;
