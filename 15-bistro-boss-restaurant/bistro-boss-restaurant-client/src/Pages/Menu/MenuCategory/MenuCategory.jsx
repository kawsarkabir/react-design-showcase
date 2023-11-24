import { Link } from "react-router-dom";
import MenuItem from "../../Home/PopularMenu/MenuItem";
import PropTypes from "prop-types";
const MenuCategory = ({ items }) => {
  return (
    <div>
      <div className="grid grid-cols-2 justify-items-center gap-10 mt-10">
        {items?.map((item) => (
          <MenuItem item={item} key={item._id}></MenuItem>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to='/order'>
          <button className="btn btn-outline">ORDER YOUR FAVOURITE FOOD</button>
        </Link>
      </div>
    </div>
  );
};
MenuCategory.propTypes = {
  items: PropTypes.object.isRequired,
};
export default MenuCategory;
