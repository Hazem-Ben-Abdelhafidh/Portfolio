import React from "react";

const Title = ({ children }) => {
  return (
    <div>
      <h1 className=" font-logo font-bold mb-3 p-2 text-5xl text-blue-600">
        {children}
      </h1>
    </div>
  );
};

export default Title;
