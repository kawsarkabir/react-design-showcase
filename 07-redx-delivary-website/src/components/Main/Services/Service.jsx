import PropTypes from "prop-types";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Service = ({ service }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, [])

  return (
    <div data-aos="fade-up">
      <img src={service.image} alt="" />
      <h1 className="font-bold text-xl my-2">{service.title}</h1>
      <p>{service.description}</p>
    </div>
  );
};
Service.propTypes = {
  service: PropTypes.object.isRequired,
};
export default Service;
