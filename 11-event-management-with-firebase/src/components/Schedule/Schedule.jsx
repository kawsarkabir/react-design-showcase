import { FaCheck } from "react-icons/fa";
import "./Schedule.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Schedule = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div data-aos="fade-right" className="mt-20 max-w-screen-xl mx-auto text-center px-5">
      <h4 className="color-primary font-semibold text-xl">Schedule</h4>
      <h1 className="title1 text-3xl font-bold lg:text-4xl md:text-4xl">
        RECENT EVENT SCHEDULE
      </h1>
      {/* Events section done */}
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-center  mt-10 border-red-500 border">
        <div className="event-profile bg-color-primary">
          <div>
            <h1 className="mt-5">02.00 PM - 03.00 PM</h1>
            <h4>
              Room No - <span className="font-bold">7</span>
            </h4>
          </div>
          <div className="flex gap-5 items-center">
            <div>
              <img src="https://i.ibb.co/HG4TtGn/speaker-sm1.png" alt="" />
            </div>
            <div>
              <h1>Gianna Abiga</h1>
              <h3>Developing</h3>
            </div>
          </div>
        </div>
        <div className="event-details-content col-span-2 text-left ml-5 px-5 mt-3">
          <h1 className="font-bold text-2xl">
            Nulla nisl tellus hendrerit nec dignissim pellentesqu posu in est
            Suspendisse bibendum.
          </h1>
          <p className="my-2">
            Cras semper, massa vel aliquam luctus, eros odio tempor turpis, ac
            placerat metus tortor eget magna. Donec mattis posuere pharetra.
            Donec vestibulum ornare velit ut sollicitudin ut sollicitudin.
          </p>
          <h4 className="mt-2 font-bold text-lg color-primary">Topics:</h4>
          <div>
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 g-5 mt-2">
              <li className="flex items-center gap-x-3">
                <FaCheck></FaCheck> Color
              </li>
              <li className="flex items-center gap-x-3">
                <FaCheck></FaCheck> Allingment
              </li>
              <li className="flex items-center gap-x-3">
                <FaCheck></FaCheck> Graphics Design
              </li>
              <li className="flex items-center gap-x-3">
                <FaCheck></FaCheck> Typhography
              </li>
              <li className="flex items-center gap-x-3">
                <FaCheck></FaCheck> Development
              </li>
              <li className="flex items-center gap-x-3">
                <FaCheck></FaCheck> Web Design
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
