import { Link } from "react-router-dom";
import "./DisplayBrandCard.css";

const DisplayBrandCard = ({ brand }) => {
  const { brandURL, brandName } = brand || {};
  return (
    <div className="grid grid-cols-2">
      <div className="myCard">
        <div className="card-inner">
          <div className="card-front">
            <img src={brandURL} alt="" />
          </div>
          <div className="card-back">
            <p>{brandName}</p> <br />
            <Link to={`/products/${brandName}`}><button className="btn   text-white border-none btn-link">show product </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayBrandCard;
