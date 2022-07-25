import React from "react";
import logo from "../../assets/Logo.svg";
import Nav from "./Nav";
import NavMobile from "./NavMobile";

const Header = () => {
  return (
    <header
      className="
    flex items-center justify-center fixed top-0 w-full text-white z-10 transition all duration-300 
    bg-black h-[50px]"
    >
      <div className="container mix-auto h-full flex items-center justify-between  italic">
        <div className="flex flex-1">
          <img className="w-[129px] h-[48px]" src={logo} alt="" />
        </div>

        <div className="hidden lg:block">
          <Nav />
        </div>
        <div className="lg:hidden">
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
