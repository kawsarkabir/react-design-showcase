import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <>
      <h1 className="text-[#FF3818] text-center -mt-12 mb-10 text-3xl font-bold">
        Our Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center max-w-screen-xl mx-auto">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="text-center mt-10">
        <button className="btn bg-[#FF3818] text-white border-none px-10">
          {" "}
          SEE MORE
        </button>
      </div>
    </>
  );
};

export default Services;
