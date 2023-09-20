import PropTypes from 'prop-types';
import React, { useEffect, useState } from "react";
import Course from "../Course/Course";

const Courses = ({ handleButtonClick }) => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="lg:w-10/12 md:w-full grid lg:grid-cols-3 md:grid-cols-2 gap-5 grid-cols-1">
      {courses.map((course) => (
        <Course course={course} handleButtonClick={handleButtonClick} key={course.id} />
      ))}
    </div>
  );
};

Courses.propTypes={
    handleButtonClick:PropTypes.func.isRequired
}

export default Courses;
