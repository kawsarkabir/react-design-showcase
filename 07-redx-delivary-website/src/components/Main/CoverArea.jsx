import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const CoverArea = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, [])
  return (
    <div className="bg-black mt-20">
      <div className=" flex flex-col lg:flex-row md:flex-row gap-5 text-white full-website items-center p-5">
         <div data-aos="fade-right">
         <img
          src="https://i.ibb.co/V9P9SRF/bangladash-map.png"
          className="max-w-sm"
        />
         </div>
        <div data-aos="fade-left" className="lg:w-1/2 md:w-1/2 w-full text-center lg:text-left md:text-left ml-auto">
          <h1 className="text-4xl font-bold">রেডএক্সের লজিস্টিকস সেবা সারাদেশে ৬৪ জেলা এবং ৪৯৩ উপজেলা জুড়ে বিস্তৃত</h1>
          <p className="py-6">
          আপনার যেকোনো লজিস্টিকস প্রয়োজনের জন্য আমরা নিশ্চিত করি দেশজুড়ে সবচেয়ে দ্রুতগতির সেবা
          </p>
          <button className="font-normal border-none btn btn-error bg-red-600 px-10 text-white">কভারেজ এলাকা দেখুন</button>
 
        </div>
      </div>
    </div>
  );
};

export default CoverArea;
