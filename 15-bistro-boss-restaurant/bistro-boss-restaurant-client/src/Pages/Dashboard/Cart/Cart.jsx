import Swal from "sweetalert2";
import SectionHeader from "../../../Components/Shared/SectionHeader/SectionHeader";
import useCart from "../../../hooks/useCart";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Cart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const axiosSecure = useAxiosSecure();
  const handleDelete = (id) => {
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
        axiosSecure
          .delete(`/carts/${id}`)
          .then((data) => {
            if (data.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
            refetch();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  return (
    <div>
      <div>
        <SectionHeader
          subHeading="cart section !"
          mainHeading="Wanna Add More ?"
        ></SectionHeader>
      </div>
      <div className="flex items-center gap-x-5 justify-between mt-10">
        <div>
          <h1 className="text-2xl">Items: {cart.length}</h1>
        </div>
        <div>
          <h1 className="text-2xl">Total Price: {totalPrice} TK</h1>
        </div>
        <div>
          <button className="btn btn-success">Pay</button>
        </div>
      </div>
      {/* items table */}
      <div className="mt-5">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-orange-400 text-white">
              <tr>
                <th>Product Image</th>
                <th>Product Name</th>
                <th>Product Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((singleCart) => (
                <tr key={singleCart._id}>
                  <td>
                    <div className="avatar">
                      <div className="w-28 h-20">
                        <img src={singleCart?.image} alt="Avatar" />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div>
                      <div className="font-bold">{singleCart?.name}</div>
                    </div>
                  </td>
                  <td>{singleCart?.price}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(singleCart._id)}
                      className="btn  bg-red-500 text-white text-2xl px-2 py-1 btn-outline"
                    >
                      <i className="fa-regular fa-trash-can"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
