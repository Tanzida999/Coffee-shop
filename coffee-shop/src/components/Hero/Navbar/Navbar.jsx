import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full pt-10 text-white z-20">
      <div className="container">
        <div className="">
          {/* Logo section */}
          <h1 className="text-2xl font-semibold uppercase">
            <span className="text-primary">Coders</span> Coffee
          </h1>
          {/* Hamburger menu section */}
          <div className="">
            <GiHamburgerMenu className="text-3xl cursor-pointer"></GiHamburgerMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
