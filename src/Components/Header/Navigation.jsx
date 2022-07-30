import { AiFillHome } from "react-icons/ai";
import { MdWork } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { IoIosMail } from "react-icons/io";
import Link from "./Link";
const Navigation = () => {
  return (
    <nav className="  flex justify-center h-12 w-full items-center p-2">
      <ul className=" flex justify-around items-center w-full p-2">
        <Link path="/" icon={<AiFillHome />} name="Home" />

        <Link path="/projects" icon={<MdWork />} name="Projects" />

        <Link path="/skills" icon={<GiSkills />} name="Skills" />

        <Link path="/contact" icon={<IoIosMail />} name="Contact Me" />
      </ul>
    </nav>
  );
};

export default Navigation;
