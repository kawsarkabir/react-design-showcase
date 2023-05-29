import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const Product = ({product, handleAddToCart}) => {
  const { name, img, seller, price, ratings } = product;
 
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="products-info">
        <p className="product-name">{name}</p>
        <p>Price: ${price}</p>
        <p>Seller:{seller}</p>
        <p>Ratings:{ratings}</p>
        <button onClick={()=>handleAddToCart(product)} className="btn-cart">
          <p>Add to Cart</p> <FontAwesomeIcon icon={faShoppingCart} />
        </button>
      </div>
    </div>
  );
};

export default Product;
