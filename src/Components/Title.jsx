import React from "react";

const Title = ({ children }) => {
  return (
    <div>
      <h1 className=" font-logo font-bold text-5xl text-blue-600">
        {children}
      </h1>
    </div>
  );
};

export default Title;
