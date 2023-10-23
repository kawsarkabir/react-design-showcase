import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { img, price, title } = service || {};
  return (
    <div>
      <div className="card w-96 drop-shadow bg-base-100">
        <figure>
          <img src={img} alt="Shoes" className="h-52 mt-5 p-2 rounded-xl" />
        </figure>
        <div className="card-body ">
          <div>
            <h2 className="card-title">{title}</h2>
            <p className="text-[#FF3818]">Price: ${price}</p>
          </div>
          <div className="card-actions justify-end">
            <Link>
              <i className="fa-solid fa-arrow-right  text-[#FF3818] "></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
