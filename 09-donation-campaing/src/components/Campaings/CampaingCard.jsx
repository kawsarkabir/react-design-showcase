import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const CampaingCard = ({ campaing }) => {
  const {
    id,
    picture,
    text_color,
    card_bg_color,
    button_bg_color,
    title,
    category,
  } = campaing || {};

  return (
    <div className="drop-shadow-lg">
      <Link
        to={`/donationdetails/${id}`}
        className="card  h-80"
        style={{ background: card_bg_color }}
      >
        <figure>
          <img src={picture} alt="Shoes" className="w-full h-[300px]" />
        </figure>
        <div className=" p-5">
          <button
            className="btn-sm rounded"
            style={{ background: button_bg_color, color: text_color }}
          >
            {category}
          </button>
          <h2 className="text-xl font-semibold" style={{ color: text_color }}>
            {title}
          </h2>
        </div>
      </Link>
    </div>
  );
};

CampaingCard.propTypes = {
  campaing: PropTypes.object,
};
export default CampaingCard;
