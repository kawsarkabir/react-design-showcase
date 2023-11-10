import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const AllProductCard = ({ product, handleDeleteProduct }) => {
  const { productName, price, category, photoURL, _id } = product || {};
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <tbody>
            {/* row 1 */}
            <tr className="flex justify-around items-center">
              <td>
                <div>
                  <div>
                    <div className="w-40 h-40">
                      <img src={photoURL} alt=" product-img" />
                    </div>
                  </div>
                </div>
              </td>
              <td>{productName}</td>
              <td>${price}</td>
              <td>{category}</td>
              <th>
                <button
                  onClick={() => handleDeleteProduct(_id)}
                  className="btn btn-ghost btn-xs"
                >
                  Delete
                </button>
                <Link to={`/dashboard/updateproduct/${_id}`}>
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
AllProductCard.propTypes = {
  product: PropTypes.object,
  handleDeleteProduct: PropTypes.func,
};
export default AllProductCard;
