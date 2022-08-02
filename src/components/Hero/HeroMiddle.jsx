import React from "react";
import money from "../../assets/hero/img4.svg";
import money2 from "../../assets/hero/img2.svg";
import money3 from "../../assets/hero/img3.svg";
import img1 from "../../assets/hero/img.svg";

const HeroMiddle = () => {
  return (
    <div className="flex flex-col items-center bg-black py-14 gap-10 bg-[url('./assets/HeroMiddle.png')] bg-no-repeat  bg-center ">
      <img
        className=" w-full pl-10 md:pl-20 lg:pl-28 bg-cover "
        src={img1}
        alt=""
      />
      <div className="flex items-center justify-between gap-10 w-full bg-cover ">
        {/* must be fixed */}
        {/* <div className="flex border-accent border-r-2 w-[300px] h-[220px]"></div>
        <div className="flex flex-col gap-10">
          <div className="flex border bg-[#FFFFFF] h-[167px] items-center  pr-56 pl-12 ">
            <h3 className="text-start text-[24px]">
              Statistika ma’lumotlariga qaraganda, dunyoda <br />
              60% ODAM O’ZI YOQTIRMAGAN ishda ishlashga <br />
              majbur bo‘lar ekan.
            </h3>
          </div>
          <div className="flex">
            <h2>BUNING ASOSIY SABABLARI:</h2>
          </div>
        </div> */}
      </div>

      <div className="flex flex-col lg:flex  lg:flex-row md:grid md:grid-cols-2 lg:items-center lg:justify-center  gap-8  ">
        {/* middle part */}
        <div className="flex flex-col items-center justify-center border-accent w-auto h-[300px] p-8 border-2 gap-5">
          <img className="w-[300px] h-[300px]" src={money} alt="" />
          <p className="text-white">
            Daromadning <br /> kamligi
          </p>
        </div>
        <div className="flex flex-col items-center justify-center border-accent w-auto h-[300px] p-8 border-2">
          <img className="w-[300px] h-[300px]" src={money2} alt="" />
          <p className="text-white">
            Og'ir jismoniy <br /> mehnat
          </p>
        </div>
        <div className="flex flex-col items-center justify-center border-accent w-auto h-[300px] p-8 border-2 ">
          <img className="w-[300px] h-[300px]" src={money3} alt="" />
          <p className="text-white">
            Noqulay ish <br /> sharoiti
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center p-5 ">
        <h2 className="text-[24px] text-center ">
          Albatta, oramizda ko‘pchilikda <span> USHBU MUAMMO BOR </span> yoki
          <span>
            KAFOLATLANMAGAN <br />
            TA’LIM DARGOHLARINI BITIRIB,{" "}
          </span>{" "}
          bu muammolarga <span> DUCH KELISH EHTIMOLI </span> <br />
          mavjud. Hammamizda bir savol tug‘iladi: <br />
          <br />
          <br />
          <span>BUNGA YECHIM BORMI?</span>
        </h2>
      </div>
    </div>
  );
};

export default HeroMiddle;
