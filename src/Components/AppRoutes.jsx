import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Skills from "./Skills/Skills";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Skills" element={<Skills />} />
    </Routes>
  );
};

export default AppRoutes;
