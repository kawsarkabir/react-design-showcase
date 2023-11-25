import { Link } from "react-router-dom";
import MenuItem from "../../Home/PopularMenu/MenuItem";
import PropTypes from "prop-types";
import Cover from "../../../Components/Shared/Cover/Cover";
const MenuCategory = ({ items, title, coverImg }) => {
  return (
    <div>
      {title && <Cover img={coverImg} title={title}></Cover>}
      <div className="grid grid-cols-2 justify-items-center gap-10 mt-10">
        {items?.map((item) => (
          <MenuItem item={item} key={item._id}></MenuItem>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to={`/order/${title}`}>
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
