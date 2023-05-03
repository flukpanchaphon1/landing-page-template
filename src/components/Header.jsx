import logo from "../assets/Logo.png";
import Nav from "./Nav";

const Header = () => {
  return (
    <div className="max-w-[960px] mx-auto absolute top-0 left-1/2 w-full -translate-x-1/2 px-2">
      <div className="flex justify-between mt-3">
        <img src={logo} />
        <Nav />
      </div>
    </div>
  );
};

export default Header;
