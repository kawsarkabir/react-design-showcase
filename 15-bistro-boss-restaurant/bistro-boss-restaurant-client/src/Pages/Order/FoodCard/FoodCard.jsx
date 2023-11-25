import PropTypes from "prop-types"; // ES6

const FoodCard = ({ item }) => {
  const { name, recipe, image, price } = item || {};
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-4 pt-4">
          <img src={image}  />
        </figure>
        <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">
          ${price}
        </p>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p> {recipe}</p>
          <div className="card-actions justify-between space-x-5 items-center mt-3">
            <button className="btn btn-outline">Order now</button>
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
