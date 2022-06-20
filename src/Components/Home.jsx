import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="  h-screen bg-gray-50 p-3 flex-col flex justify-center items-center">
      <div className=" h-2/4  flex flex-col justify-around items-center">
        <h1 className=" text-4xl font-bold p-1">
          Hi, I'm Hazem <br /> and I'm a full stack web developer.
        </h1>
        <div className=" w-4/5 flex justify-around items-center">
          <Link className="button" to="/contact">
            Contact Me!
          </Link>
          <Link className="button" to="/contact">
            Download Resume!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
