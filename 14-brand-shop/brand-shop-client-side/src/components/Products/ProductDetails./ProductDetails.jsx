import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import Rating from "react-rating";

const ProductDetails = () => {
  const productDetails = useLoaderData();
  const { category, details, photoURL, price, productName, rating, _id } =
    productDetails || {};

  const { user } = useContext(AuthContext);

  const handleAddToCart = (productDetails) => {
    const { category, details, photoURL, price, productName } = productDetails;

    const userId = user.uid;
    console.log(userId);

    const newProduct = {
      category,
      details,
      photoURL,
      price,
      productName,
      userId,
    };
    fetch("https://brand-shop-server-one-bice.vercel.app/mycart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire("Good job!", "Add to Cart Product Successfully!", "success");
      });
  };
  return (
    <div className="max-w-screen-xl mx-auto my-20">
      <div className="flex ">
        <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
          <img src={photoURL} alt="image" className=" " />
        </div>
        <div className="p-6 space-y-4">
          <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {productName}
          </h4>
          <p className="block mb-3 font-sans text-lg antialiased font-normal leading-relaxed text-gray-700">
            {details}
          </p>
          <h6 className="uppercase font-medium text-xl">Brand: {category}</h6>
          <h3 className="text-xl font-medium uppercase">Price: ${price}</h3>
          <div className="flex items-center mt-2.5 mb-5">
             
            <span className="bg-orange-100 text-[#FFBB18] text-md font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
            <Rating
                  emptySymbol={ <i className="fa-regular fa-star"></i>}
                  fullSymbol={<i className="fa-solid fa-star"></i> }
                
                initialRating={rating } readonly />
            </span>
          </div>
          <div>
            <Link
              onClick={() => handleAddToCart(productDetails)}
              to={`/productdetails/${_id}`}
              className="btn btn-warning px-12"
            >
              Add to cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
