import React from "react";
import img1 from "../../assets/Why Naf/img1.svg";
import img2 from "../../assets/Why Naf/img2.svg";
import img3 from "../../assets/Why Naf/img3.svg";
import img4 from "../../assets/Why Naf/img4.svg";
import img5 from "../../assets/Why Naf/img5.svg";
import img6 from "../../assets/Why Naf/img6.svg";

const WhyPage = () => {
  return (
    <div className="flex flex-col items-center gap-10 p-14">
      <div className="flex flex-col md:flex-row gap-2">
        <h3 className="text-[32px]">NIMA UCHUN</h3>
        <h1 className="text-[32px]"> NAF IT ACADEMY?</h1>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-16">
        {/* box start */}

        <div className="flex items-center justify-center text-center flex-col border-b-2 border-accent p-3">
          <img src={img1} alt="" />
          <h3 className="">Hamyonbop narx.</h3>
          <p className="">
            Kurslarning narxlari hamyonbop va <br /> chegirmalarga boy qilib
            belgilangan.
          </p>
          <p className=" text-accent">
            Chegirmalar haqida pastda batafsil <br /> tanishasiz!
          </p>
        </div>
        <div className="flex items-center justify-center text-center flex-col border-b-2 border-accent p-3">
          <img src={img2} alt="" />
          <h3 className="">Malakali murabbiylar</h3>
          <p className="">
            Lorem ipsum dolor sit ame consectetur <br /> adipisicing elit.
            Voluptates, amet.
          </p>
          <p className=" text-accent">
            Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit.
          </p>
        </div>
        <div className="flex items-center justify-center text-center flex-col border-b-2 border-accent p-3">
          <img src={img3} alt="" />
          <h3 className="">Sifatli ta’lim</h3>
          <p className="">
            Lorem ipsum dolor sit ame consectetur <br /> adipisicing elit.
            Voluptates, amet.
          </p>
          <p className=" text-accent">
            Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit.
          </p>
        </div>
        <div className="flex items-center justify-center text-center flex-col border-b-2 border-accent p-3">
          <img src={img4} alt="" />
          <h3 className="">
            Online ta’lim olish <br /> imkoniyati
          </h3>
          <p className="">
            Lorem ipsum dolor sit ame consectetur <br /> adipisicing elit.
            Voluptates, amet.
          </p>
          <p className=" text-accent">
            Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit.
          </p>
        </div>
        <div className="flex items-center justify-center text-center flex-col border-b-2 border-accent p-3">
          <img src={img5} alt="" />
          <h3 className="">Ishga joylashish imkoniyati</h3>
          <p className="">
            Lorem ipsum dolor sit ame consectetur <br /> adipisicing elit.
            Voluptates, amet.
          </p>
          <p className=" text-accent">
            Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit.
          </p>
        </div>
        <div className="flex items-center justify-center text-center flex-col border-b-2 border-accent p-3">
          <img src={img6} alt="" />
          <h3 className="">Sertifikat olish imkoni</h3>
          <p className="">
            Lorem ipsum dolor sit ame consectetur <br /> adipisicing elit.
            Voluptates, amet.
          </p>
          <p className=" text-accent">
            Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit.
          </p>
        </div>
        {/* box end */}
      </div>
      <div className="flex">
        <button className="hidden h-[60px] md:block btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all rounded-3xl mt-10 lg:mt-0 text-buttonary">
          Ro'yxatdan o'tish
        </button>
      </div>
    </div>
  );
};

export default WhyPage;
