import React from "react";

const CourseAside = ({ courseName, readingTime, prevPrice, remainTime }) => {
  return (
    <div className="md:w-full lg:w-1/4">
      <div className="card w-80 bg-base-100 shadow-md">
        <div className="card-body">
          <h2 className=" text-lg font-semibold border-b text-blue-500">
            Credit Hour Remaining : {remainTime} hr
          </h2>
          <h1 className="text-lg font-semibold my-2">Course Name</h1>
          {
          courseName.map(BookmarkName => (
            <li className="list-decimal font-medium">
              {BookmarkName.course_name}
            </li>
          ))
          }
          <p className="border-t"></p>
          <p className="text-lg font-medium my-2">
            Total Cradit Hours : {readingTime} hr
          </p>
          <p className="border-t"></p>
          <h2 className="text-lg font-medium">Total Price: {prevPrice} USD</h2>
        </div>
      </div>
    </div>
  );
};

export default CourseAside;
