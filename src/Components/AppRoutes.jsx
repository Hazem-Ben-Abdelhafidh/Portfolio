import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/header" element={<Header />} />
    </Routes>
  );
};

export default AppRoutes;
