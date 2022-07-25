import React from "react";
import img1 from "../../assets/Courses/img1.png";

const Courses = () => {
  return (
    <div className="flex flex-col items-center gap-10 p-14 bg-black">
      <div className="flex">
        <h2 className="flex text-[32px]">AKTUAL KURSLAR</h2>
      </div>
      <div className="flex flex-col gap-5 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3">
        {/* box start */}
        <div className="flex flex-col gap-5 border-accent items-start border p-5 bg-white">
          <h3>Web dasturlash</h3>
          {/* <div className="flex-flex-col items-center justify-center"> */}
          <div className="flex">
            <p className="flex border-accent border-2 p-2 rounded-2xl">9oy</p>
            <p className="flex border-accent border-2 p-2 rounded-3xl pl-10 pr-10 ">
              Oflayn
            </p>
            <p className="flex border-accent border-2 p-2 rounded-3xl pl-10 pr-10">
              108dars + amaliyot
            </p>
          </div>
          <img src={img1} alt="" />
          {/* </div> */}
        </div>
        <div className="flex flex-col gap-5 border-accent items-start border-2 p-5 bg-white">
          <h3>Web dasturlash</h3>
          <div className="flex">
            <p className="flex border-accent border-2 p-2 rounded-2xl">9oy</p>
            <p className="flex border-accent border-2 p-2 rounded-3xl pl-10 pr-10 ">
              Oflayn
            </p>
            <p className="flex border-accent border-2 p-2 rounded-3xl pl-10 pr-10">
              108dars + amaliyot
            </p>
          </div>
          <img src={img1} alt="" />
        </div>
        <div className="flex flex-col gap-5 border-accent items-start border-2 p-5 bg-white">
          <h3>Web dasturlash</h3>
          <div className="flex">
            <p className="flex border-accent border-2 p-2 rounded-2xl">9oy</p>
            <p className="flex border-accent border-2 p-2 rounded-3xl pl-10 pr-10 ">
              Oflayn
            </p>
            <p className="flex border-accent border-2 p-2 rounded-3xl pl-10 pr-10">
              108dars + amaliyot
            </p>
          </div>
          <img src={img1} alt="" />
        </div>
        <div className="flex flex-col gap-5 border-accent items-start border p-5 bg-white">
          <h3>Web dasturlash</h3>
          <div className="flex">
            <p className="flex border-accent border-2 p-2 rounded-2xl">9oy</p>
            <p className="flex border-accent border-2 p-2 rounded-3xl pl-10 pr-10 ">
              Oflayn
            </p>
            <p className="flex border-accent border-2 p-2 rounded-3xl pl-10 pr-10">
              108dars + amaliyot
            </p>
          </div>
          <img src={img1} alt="" />
        </div>
        <div className="flex flex-col gap-5 border-accent items-start border-2 p-5 bg-white">
          <h3>Web dasturlash</h3>
          <div className="flex">
            <p className="flex border-accent border-2 p-2 rounded-2xl">9oy</p>
            <p className="flex border-accent border-2 p-2 rounded-3xl pl-10 pr-10 ">
              Oflayn
            </p>
            <p className="flex border-accent border-2 p-2 rounded-3xl pl-10 pr-10">
              108dars + amaliyot
            </p>
          </div>
          <img src={img1} alt="" />
        </div>
        {/* box end */}
      </div>
      <div className="flex">
        <button className="btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all rounded-3xl mt-10 lg:mt-0 text-buttonary">
          Ochiq darslarni ko'rish
        </button>
      </div>
    </div>
  );
};

export default Courses;