import React from "react";
import { Link } from "react-router-dom";
import Title from "./Title";

const Home = () => {
  return (
    <div className="  h-screen bg-gray-50 p-3 flex-col flex justify-center items-center">
      <Title>Home</Title>
      <div className=" h-2/4  flex flex-col justify-around items-center">
        <h1 className=" text-4xl font-bold p-1">
          Hi, I'm Hazem <br /> and I'm a full stack web developer.
        </h1>
        <div className=" w-4/5 flex justify-around items-center">
          <Link className="button" to="/contact">
            Contact Me!
          </Link>
          <a
            href="./../../Hazem-Ben-Abdelhafidh-Resume.pdf"
            className="button cursor-pointer"
            download={"Hazem Ben Abdelhafidh Resume"}
          >
            Download Resume!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
