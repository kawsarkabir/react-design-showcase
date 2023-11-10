import Rating from "react-rating";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const SingleCetagoryProductCard = ({ singleCetagoryProduct }) => {
  const { price, rating, photoURL, _id } = singleCetagoryProduct || {};
  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link>
            <img
              className="p-8 rounded-t-lg h-80"
              src={photoURL}
              alt="product image"
            />
          </Link>
          <div className="px-5 pb-5">
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {singleCetagoryProduct.productName}
              </h5>
            </a>
            <div className="flex items-center mt-2.5 mb-5">
              <span className="bg-orange-100 text-[#FFBB18] text-md font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                <Rating
                  emptySymbol={<i className="fa-regular fa-star"></i>}
                  fullSymbol={<i className="fa-solid fa-star"></i>}
                  initialRating={rating}
                  readonly
                />
              </span>
              <span className="text-3xl ml-20 font-bold text-gray-900 dark:text-white">
                ${price}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <Link
                to={`/productdetails/${_id}`}
                className="!font-medium !text-blue-gray-900 !transition-colors hover:!text-pink-500"
                href="#"
              >
                <button
                  className="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-[#FFBB12] uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                  data-ripple-dark="true"
                >
                  show details
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    ></path>
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
SingleCetagoryProductCard.propTypes = {
  singleCetagoryProduct: PropTypes.object,
};
export default SingleCetagoryProductCard;
