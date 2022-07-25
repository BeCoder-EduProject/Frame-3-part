import React from "react";
import img1 from "../../assets/Chegirmalar/img1.svg";
const Chegirmalar = () => {
  return (
    <div className="flex flex-col items-center p-10 gap-10">
      <div className="flex flex-col md:flex-row items-center gap-2">
        <h3 className="flex">REAL IMKONIYATLAR TAQDIM ETUVCHI </h3>
        <h1 className="flex">CHEGIRMALAR</h1>
      </div>
      <div className="flex">
        <p className="flex">
          Agar doʻstingiz sizning tavsiyangizga koʻra bizning oʻquv markazimizda
          taʼlim olsa, <br /> bizdagi istalgan kursning dastlabki oyi uchun 50%
          chegirmani qoʻlga kiritasiz!
        </p>
      </div>
      <div className="flex">
        <img src={img1} alt="" />
      </div>
    </div>
  );
};

export default Chegirmalar;
