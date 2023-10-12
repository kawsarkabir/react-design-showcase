import "./Counter.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Counter = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div
      data-aos="fade-left"
      className="grid grid-cols-1 gap-5 lg:grid-cols-4 md:grid-cols-2 justify-items-center px-5 counter-banner my-20 text-center text-white"
    >
      <div className="space-y-2">
        <img
          src="https://i.ibb.co/SrC4b3y/speaker-sm.png"
          className="w-full"
          alt=""
        />
        <h1 className="text-3xl font-bold">100+</h1>
        <p>Speaker</p>
      </div>
      <div className="space-y-2">
        <img
          src="https://i.ibb.co/SrC4b3y/speaker-sm.png"
          className="w-full"
          alt=""
        />
        <h1 className="text-3xl font-bold">100+</h1>
        <p>Advisor</p>
      </div>
      <div className="space-y-2">
        <img
          src="https://i.ibb.co/SrC4b3y/speaker-sm.png"
          className="w-full"
          alt=""
        />
        <h1 className="text-3xl font-bold">100+</h1>
        <p>Developer</p>
      </div>
      <div className="space-y-2">
        <img
          src="https://i.ibb.co/SrC4b3y/speaker-sm.png"
          className="w-full"
          alt=""
        />
        <h1 className="text-3xl font-bold">100+</h1>
        <p>Speaker</p>
      </div>
    </div>
  );
};

export default Counter;
