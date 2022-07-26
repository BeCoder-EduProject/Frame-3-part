import React from "react";
import img1 from "../../assets/hero/img1.png";
import img2 from "../../assets/hero/img2.png";
import money from "../../assets/hero/img4.svg";
import money2 from "../../assets/hero/img2.svg";
import money3 from "../../assets/hero/img3.svg";

const HeroPage = () => {
  return (
    <hero className="flex flex-col items-center justify-center bg-black h-[225vh]">
      <div className="container mix-auto h-full flex flex-col items-center justify-center gap-y-8 lg:gap-y-14">
        <h1 className="text-[38px] md:text-[50px] lg:text-[60px]">
          Zamonaviy kasblarni
        </h1>
        <h1 className="text-[38px] md:text-[50px] lg:text-[60px]">
          oʻrganib hayotingni
        </h1>
        <h2 className="text-[38px] md:text-[50px] lg:text-[60px] ">180° ga</h2>
        <h1 className="text-[38px] md:text-[50px] lg:text-[60px] ">
          oʻzgartir
        </h1>
        <button className="btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all rounded-3xl mt-10 lg:mt-0 text-buttonary">
          Ro'yxatdan o'tish
        </button>
        <div className="flex items-center justify-between gap-10 w-full bg-cover ">
          {/* <img className=" w-full bg-cover " src={img1} alt="" /> */}
          {/* must be fixed */}
          <div className="flex border-accent border-r-2 w-[300px] h-[220px]"></div>
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
          </div>
        </div>

        <div className="flex flex-col lg:flex  lg:flex-row md:grid md:grid-cols-2 lg:items-center lg:justify-center  gap-8  ">
          {/* middle part */}
          <div className="flex flex-col items-center justify-center border-accent w-auto h-[300px] p-8 border-2 gap-5">
            <img className="w-[300px] h-[300px]" src={money} alt="" />
            <p>
              Daromadning <br /> kamligi
            </p>
          </div>
          <div className="flex flex-col items-center justify-center border-accent w-auto h-[300px] p-8 border-2">
            <img className="w-[300px] h-[300px]" src={money2} alt="" />
            <p>
              Og'ir jismoniy <br /> mehnat
            </p>
          </div>
          <div className="flex flex-col items-center justify-center border-accent w-auto h-[300px] p-8 border-2 ">
            <img className="w-[300px] h-[300px]" src={money3} alt="" />
            <p>
              Noqulay ish <br /> sharoiti
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <h2 className="text-[24px] text-center">
            Albatta, oramizda ko‘pchilikda USHBU MUAMMO BOR yoki KAFOLATLANMAGAN{" "}
            <br />
            TA’LIM DARGOHLARINI BITIRIB, bu muammolarga DUCH KELISH EHTIMOLI{" "}
            <br />
            mavjud. Hammamizda bir savol tug‘iladi: <br />
            BUNGA YECHIM BORMI?
          </h2>
        </div>
      </div>
      <div className="h-96 w-full bg-cover flex items-center justify-center  ">
        <img src={img2} alt="" />
        {/* must be fixed */}
      </div>

      {/* <div className="bg-[url()] bg-cover bg-center h-[720px]">
        // hello //{" "}
      </div> */}
    </hero>
  );
};

export default HeroPage;
