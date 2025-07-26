import React, { useState } from "react";
import JobsData from "../utils/JobsData.js";
import { NavLink } from "react-router-dom";

function DemandJobs() {
  let [Filter, SetFilter] = useState("ALL");
  let JobsInfo =
    Filter === "ALL"
      ? JobsData
      : JobsData.filter((item) => item.employmentStatus === Filter);
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1350px] m-auto md:py-15 py-8 px-5 md:px-10">
        <h2 className="text-3xl font-bold">Need something done?</h2>
        <p className="text-base text-gray-600 my-2">
          Most viewed and all-time top-selling services
        </p>
        {/* filter section */}
        <div>
          <ul
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
            className="flex items-center justify-between  my-8 rounded-sm
          "
          >
            <li
              className="w-30 text-base font-semibold text-center py-3.5 rounded-sm"
              onClick={() => SetFilter("ALL")}
              style={{
                backgroundColor: Filter === "ALL" ? "#1E4D42" : "white",
                color: Filter === "ALL" ? "white" : "black",
              }}
            >
              ALL
            </li>
            <li
              className="w-30 text-base font-semibold text-center py-3.5 rounded-sm"
              onClick={() => SetFilter("Full-time")}
              style={{
                backgroundColor: Filter === "Full-time" ? "#1E4D42" : "white",
                color: Filter === "Full-time" ? "white" : "black",
              }}
            >
              Full-Time
            </li>
            <li
              className="w-30 text-base font-semibold text-center py-3.5 rounded-sm"
              onClick={() => SetFilter("Part-time")}
              style={{
                backgroundColor: Filter === "Part-time" ? "#1E4D42" : "white",
                color: Filter === "Part-time" ? "white" : "black",
              }}
            >
              Part-Time
            </li>
            <li
              className="w-30 text-base font-semibold text-center py-3.5 rounded-sm"
              onClick={() => SetFilter("Freelancer")}
              style={{
                backgroundColor: Filter === "Freelancer" ? "#1E4D42" : "white",
                color: Filter === "Freelancer" ? "white" : "black",
              }}
            >
              Freelancer
            </li>
          </ul>
        </div>
        {/* jobs list */}
        <div className="max-h-[500px] overflow-y-auto DemandJobs">
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
              <p className=" text-xl h-100">No jobs found for "{Filter}"</p>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default DemandJobs;
