import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
const SocialMedia = () => {
  return (
    <nav className=" w-[20%] mr-2">
      <ul className="flex justify-around items-center">
        <li className="p-1">
          <a target="_blank" href="https://github.com/Hazem-Ben-Abdelhafidh">
            <AiFillGithub className="hover:text-blue-500 transition-colors text-xl" />
          </a>
        </li>
        <li className="p-1">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/hazembenabdelhafidh/"
          >
            <AiFillLinkedin className=" hover:text-blue-500 transition-colors text-xl" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SocialMedia;
