import { useState } from "react";
import { NavLink } from "react-router-dom";
const Link = ({ path, icon, name }) => {
  const [active, setActive] = useState(false);
  return (
    <li className=" h-10 w-10 relative flex cursor-pointer justify-center flex-col items-center rounded-full group">
      <NavLink
        to={path}
        className={(data) => {
          setActive(data.isActive);
          console.log(data.isActive);
          return data.isActive
            ? "text-2xl text-blue-500 group-hover:text-blue-500 duration-500"
            : "text-2xl group-hover:text-blue-500 duration-500";
        }}
      >
        {icon}
      </NavLink>
      <span
        className={
          active
            ? " font-semibold absolute  text-blue-500 whitespace-nowrap group-hover:opacity-100 duration-500 top-7"
            : " font-semibold absolute opacity-0 text-blue-500 whitespace-nowrap group-hover:opacity-100 duration-500 top-7"
        }
      >
        {name}
      </span>
    </li>
  );
};

export default Link;
