import PropTypes from "prop-types"; // ES6

const FoodCard = ({ item }) => {
  const { name, recipe, image, price } = item || {};
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p> {recipe}</p>
          <div className="card-actions justify-between space-x-5 items-center mt-3">
            <h4>{price}</h4>
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
