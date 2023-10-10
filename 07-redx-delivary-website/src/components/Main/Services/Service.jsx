import PropTypes from "prop-types";

const Service = ({ service }) => {
  console.log(service);
  return (
    <div>
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
