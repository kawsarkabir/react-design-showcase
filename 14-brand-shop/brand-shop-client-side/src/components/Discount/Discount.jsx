import "./Discount.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Discount = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, [])
  return (
    <div data-aos="fade-right" className="discount-banner my-20">
      <div className="flex gap-5 max-w-screen-xl mx-auto justify-center text-center">
        <div>
          <h1 className="lg:text-4xl text-2xl font-semibold">
            Get <span className="text-[#FFBB38]">20%</span> Off Discount Coupon
          </h1>
          <p className="my-4 text-lg">by Subscribe our Newsletter</p>
          <div className="search-bar">
            <div className="input-field w-full">
              <input type="text" placeholder="email" className="w-full" />
            </div>
            <button className="btn-orange">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;
