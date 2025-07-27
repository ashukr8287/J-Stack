import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  let navigate = useNavigate();
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className="bg-[#1E4D42] w-full fixed z-50">
        <div className="flex items-center justify-between max-w-[1350px] mx-auto py-5 px-4 md:px-10 lg:px-5">
          {/* Logo */}
          <div className="md:w-[120px] w-[100px]">
            <img
              src={logo}
              alt="Company Logo"
              onClick={() => {
                navigate("/");
              }}
            />
          </div>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex space-x-12 text-white text-xl">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/jobs">Browse Jobs</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/404">Join</NavLink>
            </li>
          </ul>

          {/* Hamburger Icon (Mobile) */}
          <div
            className=" block md:hidden text-white text-3xl cursor-pointer "
            onClick={() => setToggle(!toggle)}
          >
            ☰
          </div>
        </div>

        {/* Mobile Nav Links */}
        <ul
          className={`w-50  md:hidden text-base absolute top-20 right-3 space-y-2 rounded-xl bg-white py-4 pl-4 shadow-2xl ${
            toggle ? "block" : "hidden"
          }`}
        >
          <li>
            <NavLink
              to="/"
              onClick={() => setToggle(false)}
              className={" w-full pr-30"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/jobs"
              onClick={() => setToggle(false)}
              className={" w-full pr-20"}
            >
              Browse Jobs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={() => setToggle(false)}
              className={" w-full pr-30"}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/404"
              onClick={() => setToggle(false)}
              className={" w-full pr-35"}
            >
              Join
            </NavLink>
          </li>
        </ul>
      </nav>
      {/* for fixed  */}
      <nav className=" fake-nav h-17.5"></nav>
    </>
  );
}

export default Navbar;
