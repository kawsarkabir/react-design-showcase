import "./Priceing.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Priceing = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div data-aos="fade-up">
      <div >
        <h4 className="color-primary text-center mt-20 font-semibold">
          Ticket Plan
        </h4>
        <h1 className="lg:text-4xl md:text-4xl text-3xl text-center font-bold">
          GET SPONSOR TICKET
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 justify-items-center max-w-screen-xl mx-auto px-5">
        <div className="card drop-shadow-xl">
          <div className="header">
            <span className="title">Basic</span>
            <span className="price">$50</span>
          </div>
          <div className="p-5">
            <div className="text-center text-2xl mb-3 font-semibold">
              <p> Available Tickets</p>
              <h1>
                200/
                <span className="color-primary font-bold text-3xl">500</span>
              </h1>
            </div>
            <ul className="lists">
              <li className="list">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span> Conference Ticket</span>
              </li>
              <li className="list">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span> Free Lunch & Coffe</span>
              </li>
              <li className="list">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Tristique enim nec</span>
              </li>
            </ul>
          </div>
          <button type="button" className="action w-1/2 mx-auto mb-7">
            Buy Now
          </button>
        </div>
        <div className="card drop-shadow-xl standard-card">
          <div className="header">
            <span className="title">Standard</span>
            <span className="price">$140</span>
          </div>
          <div className="p-5">
            <div className="text-center text-2xl mb-3 font-semibold">
              <p> Available Tickets</p>
              <h1>
                300/
                <span className="color-primary font-bold text-3xl">500</span>
              </h1>
            </div>
            <ul className="lists">
              <li className="list">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span> Free Lunch & Coffe</span>
              </li>
              <li className="list">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span> Free Lunch & Coffe</span>
              </li>
              <li className="list">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Conference Ticket</span>
              </li>
            </ul>
          </div>
          <button type="button" className="action w-1/2 mx-auto mb-7">
            Buy Now
          </button>
        </div>
        <div className="card drop-shadow-xl ">
          <div className="header">
            <span className="title">Premium </span>
            <span className="price">$170</span>
          </div>
          <div className="p-5">
            <div className="text-center text-2xl mb-3 font-semibold">
              <p> Available Tickets</p>
              <h1>
                270/
                <span className="color-primary font-bold text-3xl">500</span>
              </h1>
            </div>
            <ul className="lists">
              <li className="list">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Conference Ticket</span>
              </li>
              <li className="list">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Tristique enim nec</span>
              </li>
              <li className="list">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Tristique enim nec</span>
              </li>
            </ul>
          </div>
          <button type="button" className="action w-1/2 mx-auto mb-7 common">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Priceing;
