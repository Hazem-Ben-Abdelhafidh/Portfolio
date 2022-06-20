import Logo from "./Logo";
import Navigation from "./Navigation";
import SocialMedia from "./SocialMedia";
const Header = () => {
  return (
    <header className="  w-full h-16 shadow-md flex justify-around items-center">
      <Logo />
      <Navigation />
      <SocialMedia />
    </header>
  );
};

export default Header;
