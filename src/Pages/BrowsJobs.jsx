import React, { useEffect, useState ,useContext} from "react";
import JobsData from "../utils/JobsData.js";
import { IoSearch } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { AuthData } from "../Context/ContextApi.jsx";

function DemandJobs() {
  let { inpData } = useContext(AuthData);
  useEffect(() => {
    window.scrollTo(0, 0);

    if (typeof inpData === "string" && inpData.length > 0) {
      setinputval(inpData);
    } else {
      setinputval("");
    }
  }, []);

  let [toggle, settoggle] = useState(false);
  let [Filter, SetFilter] = useState("ALL");
  let [inputval, setinputval] = useState("");

  let [isOpen, setIsOpen] = useState(false);
  let [selected, setSelected] = useState("Filter");
  let options = ["All", "Part-time", "Full-time", "Freelancer"];

  let JobsInfo = JobsData.filter((item) => {
    let metchFilter =
      selected === "All" || selected === "Filter"
        ? JobsData
        : item.employmentStatus === selected;
    let metchSearch = inputval
      ? item.companyName.toLowerCase().includes(inputval.toLowerCase()) ||
        item.employmentStatus.toLowerCase().includes(inputval.toLowerCase()) ||
        item.salary.amount.toLowerCase().includes(inputval.toLowerCase())
      : JobsData;

    return metchFilter && metchSearch;
  });

  let handlefun = (e) => {
    setinputval(e.target.value);
    console.log(e.target.value);
  };

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1350px] m-auto md:py-15 py-8 px-5 md:px-10">
        <h2 className="text-3xl font-bold">Need something done?</h2>
        <p className="text-base text-gray-600 my-2">
          Most viewed and all-time top-selling services
        </p>
        {/* filter section */}
        <div>
          <div
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
            className="flex text-gray-400 items-center shadow-xl rounded-sm mt-4"
          >
            <span className="text-2xl px-3">
              <IoSearch />
            </span>
            <input
              type="text"
              name=""
              id=""
              onChange={handlefun}
              value={inputval}
              placeholder="Search Jobs"
              className="w-full py-3.5 rounded-sm outline-none text-black"
            />

            <div className="relative w-30">
              {/* Trigger */}
              <div
                onClick={() => setIsOpen(!isOpen)}
                className=" cursor-pointer bg-white"
              >
                {selected}
              </div>

              {/* Dropdown */}
              {isOpen && (
                <ul className="absolute z-10 mt-1  md:w-full w-30 top-5 right-0 border  border-gray-300 bg-white rounded-md shadow-md">
                  {options.map((option) => (
                    <li
                      key={option}
                      onClick={() => handleSelect(option)}
                      className="p-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        {/* jobs list */}
        <div className="max-h-[500px] overflow-y-auto DemandJobs mt-5">
          <ul className="grid grid-cols-2 gap-x-5 md:px-5 md:block md:grid-cols-1">
            {JobsInfo.length > 0 ? (
              JobsInfo.map((item) => (
                <NavLink
                  to={`/job/${item.jobId}`}
                  key={item.jobId}
                  className={
                    " flex md:flex-row flex-col items-center justify-between border-1 border-gray-300 md:my-4 md:p-4 hover:bg-gray-300 rounded-sm my-2.5 p-4 space-y-2 md:space-y-0"
                  }
                >
                  <div className="">
                    <img
                      src={item.companyLogo}
                      alt=""
                      className="md:w-12 w-15"
                    />
                  </div>
                  <div>{item.companyName}</div>
                  <div>{item.employmentStatus}</div>
                  <div>{item.salary.amount}</div>
                </NavLink>
              ))
            ) : (
              <p className=" text-xl h-100">"No jobs found"</p>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default DemandJobs;
