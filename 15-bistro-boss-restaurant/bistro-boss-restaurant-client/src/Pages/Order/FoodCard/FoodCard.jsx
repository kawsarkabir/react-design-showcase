import PropTypes from "prop-types"; // ES6
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, recipe, image, price, _id } = item || {};
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();
  // console.log(refetch);

  const handleAddToCart = () => {
    if (user && user.email) {
      // if user current go to databse
      const cartItems = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure
        .post("/carts", cartItems)
        .then((data) => {
          console.log(data.data);
          if (data.data.insertedId) {
            Swal.fire({
              title: "Good job!",
              text: `${name} Added to Your Cart!`,
              icon: "success",
            });
            // refretch the cart
            refetch();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      Swal.fire({
        title: "You Are Not Login!",
        text: "Please Login Add To Cart ?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
    }
  };
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-4 pt-4">
          <img src={image} />
        </figure>
        <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">
          ${price}
        </p>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p> {recipe}</p>
          <div className="card-actions justify-between space-x-5 items-center mt-3">
            <button onClick={handleAddToCart} className="btn btn-outline">
              Order now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
FoodCard.propTypes = {
  item: PropTypes.object.isRequired,
};
export default FoodCard;
