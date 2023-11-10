import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, [])
  return (
    <div data-aos="fade-left" className="max-w-screen-xl mx-auto my-20 p-10 bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 justify-items-center">
      <div className="flex gap-x-5 items-center">
        <div>
          <i className="fa-solid fa-truck-fast text-4xl text-[#FFBB38]"></i>
        </div>
        <div>
          <p>Free Shipping</p>
          <p>When ordering over $100</p>
        </div>
      </div>
      <div className="flex gap-x-5 items-center">
        <div>
 
          <i className="fa-solid fa-rotate-right text-4xl text-[#FFBB38]"></i>
        </div>
        <div>
          <p>Free Return</p>
          <p>Get Return within 30 days</p>
        </div>
      </div>
      <div className="flex gap-x-5 items-center">
        <div>
          <i className="fa-solid fa-lock text-4xl text-[#FFBB38]"></i>
        </div>
        <div>
          <p>Secure Payment</p>
          <p>100% Secure Online Payment</p>
        </div>
      </div>
      <div className="flex gap-x-5 items-center">
        <div>
          <i className="fa-solid fa-trophy text-4xl text-[#FFBB38]"></i>
        </div>
        <div>
          <p>Best Quality</p>
          <p>Original Product Guarenteed</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
