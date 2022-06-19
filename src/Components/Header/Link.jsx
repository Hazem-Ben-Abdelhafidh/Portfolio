import { NavLink } from "react-router-dom";
const Link = ({ path, icon }) => {
  return (
    <li className=" h-10 w-10  flex justify-center items-center rounded-full">
      <NavLink
        to={path}
        className=" text-2xl hover:text-blue-500 transition-colors"
      >
        {icon}
      </NavLink>
    </li>
  );
};

export default Link;
