import PropTypes from "prop-types"; // ES6

const MenuItem = ({ item }) => {
  console.log(item);
  const { name, recipe, image, price } = item || {};
  return (
    <div>
      <div className="relative flex flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
          <img src={image} alt="image" className="object-cover w-full h-full" />
        </div>
        <div className="p-6">
          <div className="flex justify-between ">
            <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal uppercase">
              {name} ---------------
            </h6>
            <h4 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-[#D99904] uppercase">
              ${price}
            </h4>
          </div>
          <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
            {recipe}
          </p>
        </div>
      </div>
    </div>
  );
};
MenuItem.propTypes = {
  item: PropTypes.object.isRequired,
};
export default MenuItem;
