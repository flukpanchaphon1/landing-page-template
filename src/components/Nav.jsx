import { FiChevronDown } from "react-icons/fi";
const Nav = () => {
  return (
    <div className="flex gap-10 items-center justify-end  font-[500]  text-sm">
      <ul className="hidden md:flex items-center justify-end gap-10 cursor-pointer">
        <li className="inline-flex items-center gap-1">
          About <FiChevronDown />
        </li>
        <li>Pricing</li>
        <li>Contact Us</li>
        <li>Login</li>
      </ul>
      <button className="text-primary rounded-3xl border border-primary py-2 px-6 hover:bg-primary hover:text-[#fff] hover:scale-110 duration-300 h-fit">
        Start free trial
      </button>
    </div>
  );
};

export default Nav;
