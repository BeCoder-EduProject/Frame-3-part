import React, { useState } from "react";
import logo from "../../assets/Logo.svg";
import { FaBars } from "react-icons/fa";
import { FiXCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  // Setting mobile nav
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  //change nav color when scroll
  const [color, setColor] = useState();
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className="w-full  items-center bg-black text-white duration-300 ">
      <div
        className={
          " bg-[rgba(0,0,0,.9)] w-full fixed mx-auto flex justify-between items-center py-3 px-5"
        }
      >
        <div className=" w-24 md:w-32 duration-300 hover:scale-105 cursor-pointer">
          <img src={logo} alt="Naf academy Logo" />
        </div>

        {/* menu */}
        <ul className="hidden md:flex divide-x-[2px] divide-gray-400 ">
          <Link to="whitePage">
            <li className="px-8 hover:text-[#FFAD3C] duration-200 cursor-pointer ">
              Kurslar
            </li>
          </Link>
          <li className="px-8 hover:text-[#FFAD3C] duration-200 cursor-pointer">
            Ochiq darslar
          </li>
          <li className="md:pr-2 px-8 hover:text-[#FFAD3C] duration-200 cursor-pointer">
            Biz bilan aloqa
          </li>
        </ul>

        {/* Humberger */}
        <div
          onClick={handleClick}
          className="md:hidden absolute right-10 z-10 cursor-pointer "
        >
          {!nav ? (
            <FaBars size={23} />
          ) : (
            <FiXCircle size={25} className="text-black" />
          )}
        </div>

        {/* Mobile menu */}
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 right-0  divide-y-[2px] divide-gray-400 bg-white text-black font-medium  h-[300vh] w-[80%] pt-14"
          }
        >
          <Link to="whitePage">
            <li className="p-3 hover:text-[#FFAD3C] duration-200 cursor-pointer hover:bg-black">
              Kurslar
            </li>
          </Link>
          <li className="p-3 hover:text-[#FFAD3C] duration-200 cursor-pointer hover:bg-black">
            Ochiq darslar
          </li>
          <li className="p-3 hover:text-[#FFAD3C]  duration-200 cursor-pointer hover:bg-black">
            Biz bilan aloqa
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
