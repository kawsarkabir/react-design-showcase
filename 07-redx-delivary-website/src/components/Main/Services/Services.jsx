import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="my-10">
        <h1 className="text-center font-extrabold text-4xl my-5">সার্ভিস সমূহ</h1>
      <div className="full-website grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-8 mt-10 px-5">
        {
            services.map(service=> <Service service={service} key={service.id} />)
        }
        </div>
    </div>
  );
};

Services.propTypes = {};

export default Services;
