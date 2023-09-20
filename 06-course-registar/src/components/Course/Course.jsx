import PropTypes from "prop-types";
import React from "react";
import { FaDollarSign,FaBookOpen } from "react-icons/fa";
 

const Course = ({ course, handleButtonClick }) => {
  const { course_name, details, price, credit, img } = course;

  return (
    <div>
      <div className="card w-80 h-full shadow-md">
        <figure className="px-5 pt-5">
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{course_name}</h2>
          <p className="text-gray-500">{details}</p>
          <div className="card-actions justify-between my-2">
            <span className="flex items-center text-gray-500 text-lg">
              <FaDollarSign className="mr-2" /> Price : {price}
            </span>
            <span className="flex items-center text-gray-500 text-lg">
              <FaBookOpen className="mr-2" /> Credit : {credit}hr
            </span>
          </div>
          <button
            onClick={() => handleButtonClick(course)}
            className="w-full uppercase btn-primary btn"
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};
Course.propTypes = {
  course: PropTypes.object.isRequired,
  handleButtonClick: PropTypes.func.isRequired,
};
export default Course;
