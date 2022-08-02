import React from "react";
import logo from "../../assets/Logo.svg";
import img1 from "../../assets/Footer/Instagram.svg";
import img2 from "../../assets/Footer/Youtube.svg";
import img3 from "../../assets/Footer/Telegram.svg";
import img4 from "../../assets/Footer/Facebook.svg";

const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row h-auto p-10 bg-black items-center w-full justify-evenly">
      <div className="flex flex-col items-start gap-3 ">
        <img src={logo} alt="" />
        <p>Address</p>
        <a href="#">
          <h2 className="text-[20px]">
            Toshkent, Chilonzor tumani, Shirin chorraxasi
          </h2>
        </a>
        <p>Telefon nomer</p>
        <a href="#">
          <h2 className="text-[20px]">+99895 111 35 37</h2>
        </a>
        <p>ijtimoiy tarmoqlar</p>
        <div className="flex items-center gap-5">
          <img
            id="icon"
            className="border-b-2 pb-2 border-accent "
            src={img1}
            alt=""
          />
          <img
            id="icon"
            className="border-b-2 pb-2 border-accent "
            src={img2}
            alt=""
          />
          <img
            id="icon"
            className="border-b-2 pb-2 border-accent "
            src={img3}
            alt=""
          />
          <img
            id="icon"
            className="border-b-2 pb-2 border-accent "
            src={img4}
            alt=""
          />
        </div>
      </div>
      <div className="flex mt-10 lg:mt-0 border-2 bg-[white] w-[300px] h-[300px]"></div>
    </div>
  );
};

export default Footer;
