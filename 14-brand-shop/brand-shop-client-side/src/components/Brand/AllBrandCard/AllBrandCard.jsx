import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const AllBrandCard = ({ brand, handleDeleteBrand }) => {
  const { brandURL, brandName, _id } = brand || {};
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <tbody>
            {/* row 1 */}
            <tr className="flex justify-around">
              <td>
                <div>
                  <div>
                    <div className="w-40 h-40">
                      <img src={brandURL} alt=" product-img" />
                    </div>
                  </div>
                </div>
              </td>
              <td>{brandName}</td>
              <th>
                <button
                  onClick={() => handleDeleteBrand(_id)}
                  className="btn btn-ghost btn-xs"
                >
                  Delete
                </button>
                <Link to={`/dashboard/updatebrand/${_id}`}>
                  <button className="btn btn-ghost btn-xs">Update</button>
                </Link>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
AllBrandCard.propTypes = {
  brand: PropTypes.object,
  handleDeleteBrand: PropTypes.func,
};
export default AllBrandCard;
