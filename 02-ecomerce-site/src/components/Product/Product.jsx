import React from "react";
import "./Product.css";
const Product = (props) => {
  const { name, img, seller, price, ratings } = props.product;
 
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="products-info">
        <p className="product-name">{name}</p>
        <p>Price: ${price}</p>
        <p>Seller:{seller}</p>
        <p>Ratings:{ratings}</p>
        <button onClick={()=>props.handleAddToCart(props.product)} className="btn-cart">
          <p>Add To Cart</p>
        </button>
      </div>
    </div>
  );
};

export default Product;
