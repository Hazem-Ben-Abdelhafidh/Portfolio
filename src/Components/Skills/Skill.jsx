import React from "react";

const Skill = ({ icon, name }) => {
  return (
    <div className="flex p-2 border-2 border-blue-500 shadow-md hover:-translate-y-2 transition-transform justify-around items-center w-60">
      <span className=" w-16 h-16">{icon}</span>
      <span className=" font-semibold text-xl">{name}</span>
    </div>
  );
};

export default Skill;
