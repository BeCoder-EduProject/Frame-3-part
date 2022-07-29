import React from "react";

const HeroBottom = () => {
  return (
    <div className=" flex items-center justify-center bg-[url('./assets/HeroBottom.png')] bg-no-repeat bg-cover  bg-center h-[386px] ">
      <h2 className=" border py-10 px-16 text-[24px] text-center bg-black">
        Albatta, bugun <span> ZAMONAVIY KASBLARNI O’RGANISH </span> orqali ushbu
        muammollarga <br /> barham berish mumkin. Lekin bugun zamonaviy
        kasblarni{" "}
        <span>
          O’RGANISH <br /> AYRIMLAR UCHUN QIMMATLIK{" "}
        </span>{" "}
        qiladi. <span> ARZON KURSLAR </span> esa{" "}
        <span>
          {" "}
          SIFATSIZ. <br />{" "}
        </span>
        Aynan yuqoridagi holatlarni bartaraf etish uchun{" "}
        <span> NAF IT ACADEMY </span> <br /> sizga
        <span>YORDAM BERADI.</span>
      </h2>
    </div>
  );
};

export default HeroBottom;
