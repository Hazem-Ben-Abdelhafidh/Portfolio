import { Route, Routes } from "react-router-dom";
import Contact from "./Contact/Contact";
import Home from "./Home";
import Skills from "./Skills/Skills";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Skills" element={<Skills />} />
      <Route path="Contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
