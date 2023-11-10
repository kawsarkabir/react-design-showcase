import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
const MyCart = () => {
  const loadedProduct = useLoaderData();

  const [myCartProducts, setMyCartProducts] = useState(loadedProduct);
  const { user } = useContext(AuthContext);
  const myCartProduct = loadedProduct.filter(
    (product) => product.userId === user.uid
  );
  const handleMyCartDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://brand-shop-server-one-bice.vercel.app/mycart/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
            Swal.fire("Deleted!", "Your Product has been deleted.", "success");
            const remainingBrand = myCartProducts.filter(
              (product) => product._id !== _id
            );
            setMyCartProducts(remainingBrand);
          });
      }
    });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Items</th>
              <th>Product Image</th>
              <th>Product Name</th>
              <th>CRUD</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myCartProducts.map((product, idx) => (
              <tr key={product._id}>
                <td>{idx + 1}</td>
                <td>
                  <img className="w-16" src={product.photoURL} alt="" />
                </td>
                <td>{product.productName}</td>
                <td>
                  <Link>
                    <button
                      onClick={() => handleMyCartDelete(product._id)}
                      className="btn btn-sm btn-warning"
                    >
                      Delete
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
