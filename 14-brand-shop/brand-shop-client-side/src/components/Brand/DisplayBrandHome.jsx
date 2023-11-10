import DisplayBrandCard from "./DisplayBrandCard";
import PropTypes from "prop-types";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const DisplayBrandHome = ({ brands }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, [])
  return (
    <div data-aos="fade-right" className="max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-semibold my-4">Shop by brand</h1>
      <div className="custom-grid">
        {brands?.map((brand) => (
          <DisplayBrandCard key={brand._id} brand={brand}></DisplayBrandCard>
        ))}
      </div>
    </div>
  );
};
DisplayBrandHome.propTypes = {
  brands: PropTypes.object,
};
export default DisplayBrandHome;
