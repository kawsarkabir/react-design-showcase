import SectionHeader from "../../../Components/Shared/SectionHeader/SectionHeader";
import useCart from "../../../hooks/useCart";

const Cart = () => {
  const [cart] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  return (
    <div>
      <div>
        <SectionHeader
          subHeading="cart section !"
          mainHeading="Add More Cart Added ?"
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
            <thead>
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
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={cart?.image} alt="Avatar" />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div>
                      <div className="font-bold">{cart?.name}</div>
                    </div>
                  </td>
                  <td>{cart?.price}</td>
                  <td className="">
                    <i className="fa-regular fa-trash-can bg-red-500 text-white text-2xl px-2 py-1"></i>
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
