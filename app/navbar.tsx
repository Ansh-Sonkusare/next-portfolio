import { FunctionComponent, HTMLAttributes } from "react";

interface NavbarProps extends HTMLAttributes<HTMLDivElement> {}

const Navbar: FunctionComponent<NavbarProps> = ({ className }) => {
  return (
    <div className={className}>
      <nav className="mx-auto flex items-center justify-center gap-[40%] p-4 md:mt-5 md:w-[90%] lg:mx-8 lg:mt-0 lg:w-auto xl:mx-32">
        <a href="#">
          <div className="font-logo text-2xl font-semibold md:text-4xl">
            <span className="text-secondary">T</span>eak
            <span className="text-secondary">M</span>irror{" "}
          </div>
        </a>
        <ul className="hidden flex-row p-4 font-nohemi text-2xl font-normal md:space-x-4 md:p-0 lg:flex lg:gap-2  xl:gap-8  ">
          <li>
            <a href="#Hero" className="py-2 text-secondary">
              Home
            </a>
          </li>
          <li>
            <a href="#About" className="py-2">
              About
            </a>
          </li>
          <li>
            <a href="#Skills" className="py-2">
              Skills
            </a>
          </li>

          <li>
            <a href="#Contact" className="py-2 ">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
