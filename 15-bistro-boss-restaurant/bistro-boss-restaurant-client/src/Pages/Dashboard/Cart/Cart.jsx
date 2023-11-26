import SectionHeader from "../../../Components/Shared/SectionHeader/SectionHeader";
import useCart from "../../../hooks/useCart";

const Cart = () => {
  const [cart] = useCart();
  const totalPrice = cart.reduce((total, item)=> total + item.price,0)
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
          <h1 className="text-2xl">Total Price:  {totalPrice} TK</h1>
        </div>
        <div>
           <button className="btn btn-success">Pay</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
