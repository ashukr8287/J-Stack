import React from "react";
import fl1 from "../assets/fl-1.png";
import fl2 from "../assets/fl-2.png";
import fl3 from "../assets/fl-3.png";
import fl4 from "../assets/fl-4.png";

function Freelancers() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1350px] m-auto md:py-15 py-8 px-5 md:px-10">
        <h2 className="text-3xl font-bold">Highest Rated Freelancers</h2>
        <p className="text-base text-gray-600 my-2">
          Most viewed and all-time top-selling services
        </p>

        <div className="grid md:grid-cols-4 grid-cols-2 md:gap-x-5 gap-x-2 mt-5">
          <div className="text-center  px-4 py-6 rounded-xl hover:shadow-lg">
            <img src={fl1} alt="" className="w-15 m-auto rounded-full" />
            <h4 className="font-semibold text-lg my-2">Robert Fox</h4>
             <button className=" text-sm bg-green-400 px-2 py-1.5 rounded-full text-white hover:bg-green-500">
              View Profile
            </button>
          </div>

          <div className="text-center   px-4 py-6 rounded-xl hover:shadow-lg">
            <img src={fl2} alt="" className="w-15 m-auto rounded-full" />
            <h4 className="font-semibold text-lg my-2">Kristin Watson</h4>
             <button className=" text-sm bg-green-400 px-2 py-1.5 rounded-full text-white hover:bg-green-500">
              View Profile
            </button>
          </div>

          <div className="text-center   px-4 py-6 rounded-xl hover:shadow-lg">
            <img src={fl3} alt="" className="w-15 m-auto rounded-full" />
            <h4 className="font-semibold text-lg my-2">Darrell Steward</h4>
             <button className=" text-sm bg-green-400 px-2 py-1.5 rounded-full text-white hover:bg-green-500">
              View Profile
            </button>
          </div>

          <div className="text-center   px-4 py-6 rounded-xl hover:shadow-lg">
            <img src={fl4} alt="" className="w-15 m-auto rounded-full" />
            <h4 className=" font-semibold text-lg my-2">Theresa Webb</h4>
            <button className=" text-sm bg-green-400 px-2 py-1.5 rounded-full text-white hover:bg-green-500">
              View Profile
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Freelancers;
