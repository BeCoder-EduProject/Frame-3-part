import React from "react";

const HeroPage = () => {
  return (
    <div className="flex  h-[70vh]">
      <div className="flex flex-col items-center  bg-black  bg-[url('./assets/Hero.svg')] bg-no-repeat bg-cover bg-center w-full  ">
        <div className="container mix-auto h-full flex flex-col items-center justify-center gap-y-8  lg:gap-y-14">
          <h1 className="text-[38px] md:text-[50px] lg:text-[60px]">
            Zamonaviy kasblarni
          </h1>
          <h1 className="text-[38px] md:text-[50px] lg:text-[60px]">
            oʻrganib hayotingni
          </h1>
          <h2 className="text-[38px] md:text-[50px] lg:text-[60px] ">
            180° ga
          </h2>
          <h1 className="text-[38px] md:text-[50px] lg:text-[60px] ">
            oʻzgartir
          </h1>
          <button className="btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all rounded-3xl mt-10 lg:mt-0 text-buttonary">
            Ro'yxatdan o'tish
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
