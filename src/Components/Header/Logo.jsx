import React from "react";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <Link to="/">
      <h1 className=" hidden lg:block font-bold ml-3 text-5xl hover:scale-105 transition duration-300  text-blue-500  font-logo">
        H
      </h1>
    </Link>
  );
};

export default Logo;
