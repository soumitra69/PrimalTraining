import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Nav from "./component/Nav.jsx";
import Hero from "./component/Hero.jsx";
import Footer from "./component/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Nav />
    <Hero />
    <Footer />
  </StrictMode>
);
