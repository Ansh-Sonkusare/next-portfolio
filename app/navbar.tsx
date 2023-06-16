import { FunctionComponent, HTMLAttributes } from "react";

interface NavbarProps extends HTMLAttributes<HTMLDivElement> {}

const Navbar: FunctionComponent<NavbarProps> = ({ className }) => {
  return (
    <div className={className}>
      <nav className="mx-auto flex md:w-[620px] lg::w-[960px] items-center justify-between p-4 md:mt-5 ">
        <div className="font-logo text-2xl font-semibold md:text-4xl">
          {" "}
          <span className="text-secondary">T</span>eak
          <span className="text-secondary">M</span>irror{" "}
        </div>

        <ul className="hidden flex-row p-4  font-nohemi text-2xl font-normal lg:flex md:space-x-4  md:p-0  ">
          <li>
            <a href="#" className="py-2 pl-3 pr-4 text-secondary">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="py-2 pl-3 pr-4">
              About
            </a>
          </li>
          <li>
            <a href="#" className="py-2 pl-3 pr-4">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="py-2 pl-3 pr-4 ">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="py-2 pl-3 pr-4 ">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
