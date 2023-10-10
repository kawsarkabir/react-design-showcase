import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, [])
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url('https://i.ibb.co/GH0vXZW/Redx-interprise-landing.png')",
      }}
    >
      <div className="hero-overlay bg-opacity-70 bg-black"></div>
      <div className="hero-content flex-col lg:flex-row text-white gap-8">
        <div data-aos="fade-right" className="text-center lg:text-left ">
          <h1 className="lg:text-6xl md:text-5xl my-5 md:my-0 lg:my-0 text-3xl font-semibold">
            দেশজুড়ে সবচেয়ে দ্রুত লজিস্টিকস সল্যুশন 
            <span className="text-red-500">৩ ঘণ্টায় ট্রাক ভাড়া</span> 
          </h1>
        </div>
        <div data-aos="fade-left" className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-black">
          <div className="card-body font-bold">
            <label className="text-center text-white mb-5">
              <span>বিনামুল্যে সাইন-আপ করুন মাত্র দুই মিনিটে</span>
            </label>
            <div className="form-control">
              <label className="input-group input-group-md">
                <span className="text-gray-500">
                  <img
                    src="https://i.ibb.co/Fqt2XMy/bangladesh-flag.png"
                    alt=""
                  />
                  +88
                </span>
                <input
                  type="text"
                  placeholder="ফোন নম্বর"
                  className="focus:outline-none input input-md text-black"
                />
              </label>
            </div>
            <div className="form-control mt-6">
              <Link
                to={`/register`}
                className="btn text-white bg-red-500 border-0 hover:bg-black hover:text-red-500"
              >
                সাইন-আপ
              </Link>
            </div>
            <div className="flex">
              <div className="grid flex-grow">
                <span className="mt-7">
                  {" "}
                  <hr />
                </span>
              </div>
              <div className="divider divider-horizontal">অথবা</div>
              <div className="grid flex-grow">
                <span className="mt-7">
                  {" "}
                  <hr />
                </span>
              </div>
            </div>
            <div className="form-control">
              <span className="text-center mb-5">ট্রাক মুভমেন্ট স্ট্যাটাস</span>
              <label className="input-group input-group-md text-black">
                <input
                  type="text"
                  placeholder="ট্র্যাকিং আইডি দিন"
                  className="focus:outline-none input input-bordered input-md "
                />
                <span className="text-gray-500">
                  <button className="text-red-600">ট্র্যাক</button>
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
