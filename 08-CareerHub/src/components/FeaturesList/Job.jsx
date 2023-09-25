import React from "react";
import { Link } from "react-router-dom";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";

const Job = ({ job }) => {
  //   console.log(job);
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    salary,
    location,
    id,
  } = job || {};
  return (
    <div>
      <div className="card border p-10">
        <figure>
          <img src={logo} alt="Shoes" className="max-w-full mr-auto" />
        </figure>
        <div>
          <h2 className="card-title my-5">{job_title}</h2>
          <h3>{company_name}</h3>
          <div className="my-5">
            <Link
              to="#"
              className="border-purple-500 border rounded-lg py-3 px-12"
            >
              {remote_or_onsite}
            </Link>
            <Link
              to="#"
              className="border-purple-500 border rounded-lg py-3 px-12 ml-4"
            >
              {job_type}
            </Link>
          </div>
          <p className="my-5 flex">
            <span className="flex">
              {" "}
              <MapPinIcon class="h-6 w-6 text-gray-400" /> {location}
            </span>{" "}
            <span className="ml-4 flex">
              <CurrencyDollarIcon class="h-6 w-6 text-gray-400" /> {salary}
            </span>
          </p>
          <div className="card-actions">
            <Link to={`/job/${id}`}>
              <button className="btn bg-purple-500 text-white">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
