import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

// Initialize AOS with your desired options
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Speaker = () => {
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div data-aos="fade-right" className="max-w-screen-xl mx-auto my-20">
      <div className="text-center mb-10">
        <h4 className="color-primary font-semibold text-xl">Speaker</h4>
        <h1 className="title1 text-3xl md:text-4xl font-bold lg:text-4xl">
          TALENTED SPEAKER
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 px-5">
        <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div>
            <img
              className="w-full"
              src="https://i.ibb.co/7GF2PRR/speaker-2.png"
              alt="profile-picture"
            />
          </div>
          <div className="p-6 text-center">
            <h4 className="font-bold text-2xl">Jacob Logan</h4>
            <p className="color-primary font-bold">CEO</p>
          </div>
          <div className="flex justify-center gap-6 mb-6">
            <FaFacebook className="text-2xl"></FaFacebook>
            <FaInstagram className="text-2xl"></FaInstagram>
            <FaTwitter className="text-2xl"></FaTwitter>
          </div>
        </div>
        <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div>
            <img
              className="w-full"
              src="https://i.ibb.co/tM8KvqR/speaker-3.png"
              alt="profile-picture"
            />
          </div>
          <div className="p-6 text-center">
            <h4 className="font-bold text-2xl">Scarlett Eleanor</h4>
            <p className="color-primary font-bold">Marketing</p>
          </div>
          <div className="flex justify-center gap-6 mb-6">
            <FaFacebook className="text-2xl"></FaFacebook>
            <FaInstagram className="text-2xl"></FaInstagram>
            <FaTwitter className="text-2xl"></FaTwitter>
          </div>
        </div>
        <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div>
            <img
              className="w-full"
              src="https://i.ibb.co/LZ9CC3t/speaker-1.png"
              alt="profile-picture"
            />
          </div>
          <div className="p-6 text-center">
            <h4 className="font-bold text-2xl">Santiago Axel</h4>
            <p className="color-primary font-bold">Senio Visual Designer</p>
          </div>
          <div className="flex justify-center gap-6 mb-6">
            <FaFacebook className="text-2xl"></FaFacebook>
            <FaInstagram className="text-2xl"></FaInstagram>
            <FaTwitter className="text-2xl"></FaTwitter>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speaker;
