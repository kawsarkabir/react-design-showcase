import { FaProjectDiagram } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { FcCalendar } from "react-icons/fc";
import "./DetailsCard.css";
import PropTypes from "prop-types";
const DetailsCard = ({ details }) => {
  const { img, seat, title,  publish_date, location, description } = details || {};
  return (
    <>
      <div className="details-card-banner">
        <div className="flex relative top-32 max-w-screen-xl mx-auto px-5">
          <p
            className=" text-white
             text-4xl font-bold"
          >
            Event Details
          </p>
          <h1 className="tryphography hidden lg:block">EVENT DETAILS</h1>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto event-details">
        <h1 className="tryphography text-white relative hidden lg:block">
          EVENT DETAILS
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-1 gap-5 my-10 px-3">
          <div className="col-span-3 mt-5">
            <img src={img} alt="" className="lg:h-[60vh] w-full" />
            <div className="flex justify-between mt-5   border-b">
              <div className="flex items-center gap-x-3">
                <FcCalendar></FcCalendar>
                <h1>{publish_date}</h1>
              </div>

              <div className="flex items-center gap-x-3">
                <FaProjectDiagram></FaProjectDiagram>
                <span className="font-semibold text-lg">Seat:{seat}</span>
              </div>
              <div className="flex items-center gap-x-3">
                <GrLocation></GrLocation>
                <h1>{location}</h1>
              </div>
            </div>
            <h1 className="lg:text-4xl my-5 font-bold">{title}</h1>
            <p className="text-md leading-3">{description}</p>
          </div>
          <div>
            <button className="btn mt-5 bg-[#ce1446] text-white px-10 py-3 rounded-md text-md font-bold">
              {" "}
              Book this Event
            </button>
            <div className="hero   ">
              <div className="hero-content flex-col  ">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                  <form className="card-body">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Name</span>
                      </label>
                      <input
                        type="name"
                        placeholder="name"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input
                        type="email"
                        placeholder="email"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Password</span>
                      </label>
                      <input
                        type="password"
                        placeholder="password"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control mt-6">
                      <button className="btn bg-[#ce1446] text-white font-medium text-lg">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
DetailsCard.propTypes = {
  details: PropTypes.object.isRequired,
};
export default DetailsCard;
