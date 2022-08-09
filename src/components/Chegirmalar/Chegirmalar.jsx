import React from "react";
import img1 from "../../assets/Chegirmalar/img1.svg";
const Chegirmalar = () => {
  return (
    <div className="flex flex-col items-center pt-24 gap-10 p-10">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <h3 className="text-xl md:text-4xl text-center gap-10 ">
          REAL IMKONIYATLAR TAQDIM <br /> <br /> ETUVCHI
          <span>CHEGIRMALAR</span>
        </h3>
      </div>
      <div className="flex items-center justify-center">
        <p className=" text-center">
          Agar doʻstingiz <span> sizning tavsiyangizga koʻra </span> bizning
          oʻquv markazimizda taʼlim olsa, bizdagi istalgan <br /> kursning
          dastlabki oyi uchun <span> 50% chegirmani </span> qoʻlga kiritasiz!
        </p>
      </div>
      <div className="flex">
        <img src={img1} alt="" />
      </div>
    </div>
  );
};

export default Chegirmalar;
