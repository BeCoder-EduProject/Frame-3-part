import React from "react";
import rocket from "../../assets/Contact/rocket.png";

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 md:items-center md:justify-evenly w-auto">
      <div className="flex flex-col items-center gap-5">
        <h1 className="flex text-[36px]">NAF IT ACADEMY</h1>
        <h3 className="flex text-[36px]">BILAN BOG’LANISH</h3>
        <img src={rocket} alt="" />
      </div>
      <div className=" box flex flex-col p-10 gap-5 bg-[#FFFFFF] ">
        <p className="flex ">
          Kontaktlaringizni qoldiring va biz sizga <br />
          yaqin orada bog’lanamiz
        </p>
        <h3 className="flex text-[24px]">O’z ma’lumotlaringizni qoldiring</h3>
        <form
          method="POST"
          action="https://getform.io/f/b272bcd8-0396-4724-bcd6-8aabf15534e3"
          className="space-y-8 flex flex-col  "
        >
          <div className="flex flex-col gap-2">
            <label for="name">Ism</label>
            <input name="name" type="text" className="input" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <p>Telefon</p>
              <p className="text-accent">(Ko'rsatilishi shart)</p>
            </div>
            <input
              type="tel"
              id="phone"
              name="phone"
              //   pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              className="input"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label for="name">Xabaringizni qoldiring</label>

            <textarea className="textarea"></textarea>
          </div>
          <button className="btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all rounded-3xl mt-10 lg:mt-0 text-buttonary">
            Xabar qoldirish
          </button>
          <div className="flex items-center gap-4">
            <input type="checkbox" />
            <p>
              Men shaxsiy ma'lumotlarni qayta ishlashga <br />
              rozilik beraman va <span> maxfiylik siyosatiga </span> roziman
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
