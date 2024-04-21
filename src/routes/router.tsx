import { FC } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

//pages
import Home from "../pages/home";
import About from "../pages/about";
import Services from "../pages/services"
import Portfolio from "../pages/portfolio";
import Contact from "../pages/contact";

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
