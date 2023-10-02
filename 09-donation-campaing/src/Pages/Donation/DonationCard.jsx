import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const DonationCard = ({ donation }) => {
  const {
    id,
    picture,
    text_color,
    card_bg_color,
    button_bg_color,
    title,
    category,
    price,
  } = donation || {};
  return (
    <div
      className="  flex   flex-row rounded-xl text-gray-700 shadow-md"
      style={{ background: card_bg_color }}
    >
      <div className=" flex-1">
        <img
          src={picture}
          alt="image"
          className="h-full w-fit object-cover rounded-l-lg"
        />
      </div>
      <div className="p-6 flex-1">
        <button
          className="mb-4 block font-sans leading-relaxed tracking-normal antialiased px-2"
          style={{ background: button_bg_color, color:text_color, borderRadius: "3px" }}
        >
          {category}
        </button>
        <h4
          className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"
           
        >
          {title}
        </h4>
        <h2 style={{ color: text_color }}>${price}</h2>
        <Link to={`/donationdetails/${id}`} className="inline-block" href="#">
          <button
            className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase transition-all text-white hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mt-3"
            style={{ background: text_color }}
            type="button"
          >
            View Details
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
              className="h-4 w-4"
            >
              <path d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
};
DonationCard.propTypes = {
  donation: PropTypes.object,
};
export default DonationCard;
