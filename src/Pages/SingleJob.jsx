import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import JobsData from "../utils/JobsData.js";

function SingleJob() {
  let navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();
  const Singlejob = JobsData.find((job) => job.jobId === id);
  useEffect(() => {
    if (!Singlejob) {
      navigate("/404");
    }
  }, [Singlejob, navigate]);

  if (!Singlejob) return null;

  return (
    <section className="w-full bg-white">
      <div className=" max-w-[1350px] m-auto md:py-15 py-8 px-5 md:px-10">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 pb-5 mb-8 flex-wrap gap-5">
          <div className="flex items-center gap-4">
            <img
              src={Singlejob.companyLogo}
              alt="Company Logo"
              className="w-[60px] h-[60px] object-contain"
            />
            <div>
              <h2 className="text-2xl font-semibold">
                {Singlejob.companyName}
              </h2>
              <p className="text-gray-600">{Singlejob.state}</p>
            </div>
          </div>
          <button className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full text-sm font-medium transition">
            Apply Now
          </button>
        </div>

        {/* Meta */}
        <div className="flex justify-between flex-wrap text-center gap-4 mb-10">
          <div className="bg-gray-50 p-4 rounded-xl shadow-sm flex-1 min-w-[120px]">
            <h4 className="text-gray-800 font-medium">Vacancy</h4>
            <p className="text-gray-600">
              {Singlejob?.vacancies?.count || "N/A"}
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-xl shadow-sm flex-1 min-w-[120px]">
            <h4 className="text-gray-800 font-medium">Position</h4>
            <p className="text-gray-600">
              {Singlejob?.position?.title || "N/A"}
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-xl shadow-sm flex-1 min-w-[120px]">
            <h4 className="text-gray-800 font-medium">Hours</h4>
            <p className="text-gray-600">
              {Singlejob?.weeklyHours?.hours || "N/A"}h / week
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-xl shadow-sm flex-1 min-w-[120px]">
            <h4 className="text-gray-800 font-medium">Salary</h4>
            <p className="text-gray-600">
              {Singlejob?.salary?.amount || "N/A"}
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="job-body">
          <h3 className="text-xl font-semibold text-black mb-2">
            Job Description
          </h3>
          <p className="text-gray-600">
            {Singlejob?.jobDescription || "Not provided"}
          </p>

          <h4 className="mt-6 font-semibold text-gray-800">
            Employment Status
          </h4>
          <p className="text-gray-600 mt-1">
            - {Singlejob?.employmentStatus || "N/A"}
          </p>

          <h4 className="mt-6 font-semibold text-gray-800">Workplace</h4>
          <p className="text-gray-600 mt-1">
            - {Singlejob?.workplace || "N/A"}
          </p>

          <h4 className="mt-6 font-semibold text-gray-800">
            Educational Requirements
          </h4>
          <p className="text-gray-600 mt-1">
            - {Singlejob?.qualification || "N/A"}
          </p>

          <h4 className="mt-6 font-semibold text-gray-800">
            Experience Requirements
          </h4>
          <p className="text-gray-600 mt-1">
            - {Singlejob?.experience || "N/A"}
          </p>
        </div>
      </div>
    </section>
  );
}

export default SingleJob;
