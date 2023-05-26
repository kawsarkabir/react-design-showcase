import React from "react";

const Gun = (props) => {
  console.log(props);
  const { name, img, action, price, category } = props.gun;
  return (
    <div className="card w-96 mx-auto bg-base-100 shadow-xl mt-24">
      <figure>
        <img src="" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">{action}</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-evenly items-center">
          <div>
            <button className="btn btn-secondary btn-sm mr-2">
              Add to cart
            </button>
            <button className="btn btn-secondary btn-sm">Details</button>
          </div>
          <div className="badge badge-outline">{category}</div>
        </div>
      </div>
    </div>
  );
};

export default Gun;