import React from "react";
import fe1 from "../assets/fe 1.png";
import fe2 from "../assets/fe 2.png";
import fe3 from "../assets/fe 3.png";
import fe4 from "../assets/fe 4.png";

function Needs() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1350px] m-auto md:py-15 py-8 px-5 md:px-10">
        <h2 className="text-3xl font-bold" >Need something done?</h2>
        <p className="text-base text-gray-600 my-2">Most viewed and all-time top-selling services</p>

        <div className="grid md:grid-cols-4 grid-cols-2 md:gap-x-5 gap-x-2 mt-8">
          <div className="text-center py-2 px-2 md:px-4 md:py-6 rounded-xl hover:shadow-lg">
            <img src={fe1} alt=""className="w-15 m-auto" />
            <h4 className="font-semibold md:text-xl mt-2 text-base">Post a job</h4>
            <p className="text-sm md:text-base">
              It’s free and easy to post a job. Simply fill in a title,
              description.
            </p>
          </div>

          <div className="text-center   py-2 px-2 md:px-4 md:py-6 rounded-xl hover:shadow-lg">
            <img src={fe2} alt="" className="w-15 m-auto" />
            <h4  className="font-semibold md:text-xl mt-2 text-base">Choose freelancers</h4>
            <p className="text-sm md:text-base">
              It’s free and easy to post a job. Simply fill in a title,
              description.
            </p>
          </div>

          <div className="text-center   py-2 px-2 md:px-4 md:py-6 rounded-xl hover:shadow-lg">
            <img src={fe3} alt="" className="w-15 m-auto" />
            <h4  className="font-semibold md:text-xl mt-2 text-base">Pay safely</h4>
            <p className="text-sm md:text-base">
              It’s free and easy to post a job. Simply fill in a title,
              description.
            </p>
          </div>

          <div className="text-center   py-2 px-2 md:px-4 md:py-6 rounded-xl hover:shadow-lg">
            <img src={fe4} alt="" className="w-15 m-auto" />
            <h4 className="font-semibold md:text-xl mt-2 text-base" >We're here to help</h4>
            <p className="text-sm md:text-base">
              It’s free and easy to post a job. Simply fill in a title,
              description.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Needs;
