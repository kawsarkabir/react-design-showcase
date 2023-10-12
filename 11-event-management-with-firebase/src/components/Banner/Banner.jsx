import "./Banner.css";
import {   FaProjectDiagram, FaMapPin, FaMicrophone } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div  className="hero min-h-screen banner-section">
      <div className=" grid lg:grid-cols-3 grid-cols-1 items-center gap-5 max-w-screen-xl mx-auto">
        <div data-aos="fade-right" className="banner-content lg:col-span-2 justify-center lg:justify-normal text-center lg:text-left md:text-left mt-10 lg:mt-0 md:mt-0">
          <h5 className="text-xl font-semibold color-primary">
            January 21, 2023
          </h5>
          <h1 className="lg:text-6xl text-4xl font-extrabold">
            EVENTS, MEETUPS & <br />
            <span className="color-primary font-extrabold">CONFERENCES</span>
          </h1>
          <div className="flex items-center gap-x-10 flex-col lg:flex-row mt-5">
            <div className="flex items-center gap-x-3">
                <FaProjectDiagram className="color-primary"></FaProjectDiagram>
                <span className="font-semibold text-lg">500 Seat</span>
            </div>
            <div className="flex items-center gap-x-3 ">
                <FaMicrophone className="color-primary"></FaMicrophone>
                <span className="font-semibold text-lg">10 Speaker</span>
            </div>
            <div className="flex items-center gap-x-3 ">
                <FaMapPin className="color-primary"></FaMapPin>
                <span className="font-semibold text-lg"> 1356 Broadway, New York</span>
            </div>
          </div>
          <div className="mt-5 flex justify-center lg:justify-normal">
            <button className="book-now-btn">Book Now</button>
            <button className="view-details-btn">View Details</button>
          </div>
        </div>
        <div>
          <img src="https://i.ibb.co/h8rVVhd/hero-figure1.png" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
