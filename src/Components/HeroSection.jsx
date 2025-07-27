import React, { useContext, useState } from "react";
import hero from "../assets/hero.png";
import { NavLink } from "react-router-dom";
import { AuthData } from "../Context/ContextApi";
function HeroSection() {
  let { setinpData } = useContext(AuthData);
  let [inpvalue, setinpvalue] = useState("");

  return (
    <section className="bg-[#1E4D42] w-full">
      <div className="max-w-[1350px] m-auto flex flex-col-reverse md:flex-row items-center justify-between lg:gap-10 gap-5 md:py-15 py-8 px-5 md:px-10">
        {/* left side */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-white md:text-5xl text-3xl font-bold ">
            Find the perfect freelance services for your business
          </h1>
          <p className="md:text-xl text-lg text-gray-300">
            Work with talented people at the most affordable price to get the
            most out of your time and cost.
          </p>
          <div className=" max-w-1/0.5 flex items-center gap-2 bg-white rounded-md overflow-hidden p-1">
            <input
              type="text"
              placeholder="Search services..."
              onChange={(e) => {
                setinpvalue(e.target.value);
              }}
              className="px-4 py-2 w-full text-black outline-none"
            />
            <NavLink
              to="/jobs"
              className="bg-[#3FAF7D] text-white px-6 py-2 rounded-md hover:bg-[#329e6d] transition"
              onClick={() => {
                setinpData(inpvalue);
              }}
            >
              Search
            </NavLink>
          </div>
        </div>
        {/* right side */}
        <div className="w-full md:w-1/2">
          <img
            src={hero}
            alt="Hero Illustration"
            className="heroimage w-full h-auto object-contain animate-float"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
