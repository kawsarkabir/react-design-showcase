import Cover from "../../../Components/Shared/Cover/Cover";
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
        <button className="btn btn-outline">View More</button>
      </div>
    </div>
  );
};
MenuCategory.propTypes = {
  items: PropTypes.object.isRequired,
};
export default MenuCategory;
