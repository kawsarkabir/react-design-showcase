import { Link } from "react-router-dom";
import { FaProjectDiagram } from "react-icons/fa";
import PropTypes from "prop-types";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Events = ({ events }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const { img, id, title, price, seat, publish_date, location } = events
  return (
    <div data-aos="fade-left">
      <div className="max-w-sm rounded-lg shadow  ">
        <Link>
          <img className="rounded-t-lg" src={img} alt="" />
        </Link>
        <div className="absolute">
          <button className="flex items-center bg-[#ce1446] px-3 py-2 text-white relative bottom-11">
            <FaProjectDiagram className="custom-bg mt-1 mr-3 text-white"></FaProjectDiagram>
            <span className="font-semibold text-lg">Seat:{seat}</span>
          </button>
        </div>
        <div className="p-5">
          <div className="flex justify-between mb-3 text-sm font-semibold">
            <div>
              <h4>{publish_date}</h4>
            </div>
            <div>
              <h4>{location}</h4>
            </div>
          </div>
          <Link href="#">
            <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </Link>
          <div className="flex justify-between items-center">
            <Link
              to={`/eventDetails/${id}`}
              className="inline-flex items-center py-3 text-md font-medium text-center color-primary focus:ring-4 focus:outline-none"
            >
              Details
              <svg 
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
            <button className="btn btn-outline color-primary btn-sm">
              price: {price}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Events.propTypes = {
  events: PropTypes.object,
};
export default Events;
