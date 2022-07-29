import React from "react";
import img1 from "../../assets/Why Naf/img1.svg";
import img2 from "../../assets/Why Naf/img2.svg";
import img3 from "../../assets/Why Naf/img3.svg";
import img4 from "../../assets/Why Naf/img4.svg";
import img5 from "../../assets/Why Naf/img5.svg";
import img6 from "../../assets/Why Naf/img6.svg";

const WhyPage = () => {
  return (
    <div className="flex flex-col items-center  gap-10 p-14">
      <div className="flex flex-col md:flex-row gap-2">
        <h3 className="text-[32px]">NIMA UCHUN</h3>
        <h1 className="text-[32px]"> NAF IT ACADEMY?</h1>
      </div>
      <div className="flex  flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-16">
        {/* box start */}

        <div className="flex items-center justify-center text-center flex-col gap-2 ">
          <img src={img1} alt="" />
          <div className="flex border-b-4 border-accent pb-8">
            <h3 id="bold" className="">
              Hamyonbop narx.
            </h3>
          </div>
          <p className="">
            Kurslarning narxlari hamyonbop va <br /> chegirmalarga boy qilib
            belgilangan. <br />{" "}
            <span>
              Chegirmalar haqida pastda batafsil <br /> tanishasiz!
            </span>
          </p>
          <p className=" text-accent"></p>
        </div>
        <div className="flex items-center text-center flex-col gap-2 ">
          <img src={img2} alt="" />
          <div className=" border-b-4 border-accent pb-10">
            <h3 id="bold" className=" ">
              Malakali murabbiylar
            </h3>
          </div>
          <p className="">
            O‘z sohasida kamida <span> 3 yillik tajriba </span> va{" "}
            <span>
              {" "}
              real <br /> keyslar{" "}
            </span>{" "}
            ga ega ustozlar ta’lim beradi.
          </p>
        </div>
        <div className="flex items-center justify-center text-center flex-col gap-2 ">
          <img src={img3} alt="" />
          <div className="flex border-b-4 border-accent pb-5">
            <h3 id="bold" className="">
              Sifatli ta’lim
            </h3>
          </div>
          <p className="">
            Ustozlarimiz malakali mutaxassislarni <br /> yetishtirib chiqarish
            uchun{" "}
            <span>
              {" "}
              o‘z bilimlarini <br /> qizg‘anishmaydi.{" "}
            </span>{" "}
            Buni o‘quvchilarimiz <br /> natijalarida ham ko‘rishingiz mumkin.
          </p>
        </div>
        <div className="flex items-center justify-center text-center flex-col gap-2 ">
          <img src={img4} alt="" />
          <div className="flex border-b-4 border-accent pb-10">
            <h3 id="bold" className=" ">
              Online ta’lim olish imkoniyati
            </h3>
          </div>
          <p className="">
            Sizning ortiqcha vaqtingiz va pulingizni <br /> tejash maqsadida{" "}
            <span>
              sifatli online ta’lim <br />{" "}
            </span>{" "}
            berishni ham yo‘lga qo‘yganmiz.
          </p>
        </div>
        <div className="flex items-center justify-center text-center flex-col gap-2 ">
          <img src={img5} alt="" />
          <div className="flex border-b-4 border-accent pb-10">
            <h3 id="bold" className=" ">
              Ishga joylashish imkoniyati
            </h3>
          </div>
          <p className="">
            Biz faqat ta’lim bermaymiz, balki <br /> o‘quvchilarimizga ish{" "}
            <span>
              topishiga ham <br />{" "}
            </span>
            yordam beramiz.
          </p>
        </div>
        <div className="flex items-center justify-center text-center flex-col gap-2 ">
          <img src={img6} alt="" />
          <div className="flex border-b-4 border-accent pb-12">
            <h3 id="bold" className=" ">
              Sertifikat olish imkoni
            </h3>
          </div>
          <p className="">
            Kurslarni bitirganingizdan so‘ng sizga <br />{" "}
            <span> mutaxassislik sertifikatlari </span> beriladi va siz bu{" "}
            <br /> sertifikat orqali ishga joylashishingiz <br /> osonlashadi.
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
