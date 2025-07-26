import React from "react";
import t1 from "../assets/t1.png";
import t2 from "../assets/t2.png";
import t3 from "../assets/t3.png";
import t4 from "../assets/t4.png";
import t5 from "../assets/t5.png";
import t6 from "../assets/t6.png";


function CompTrust() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1350px] m-auto md:py-15 py-8 px-5 md:px-10">
        <h2 className="text-3xl font-bold">Trusted by the world’s best</h2>
        <p className="text-base text-gray-600 my-2">
         Most viewed and all-time top-selling services
        </p>

        <div className="mt-5 flex items-center justify-between flex-wrap gap-2">
          <img src={t1} alt="" />
          <img src={t2} alt="" />
          <img src={t3} alt="" />
          <img src={t4} alt="" />
          <img src={t5} alt="" />
          <img src={t6} alt="" />
        </div>
      </div>
    </section>
  );
}

export default CompTrust;
