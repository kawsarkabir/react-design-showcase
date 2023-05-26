import React from "react";

const Guns = () => {
  return (
    <div className="Guns">
        <div className="text-center mt-10 w-3/4 mx-auto">
        <h1 className="text-5xl mb-5">Hey! Welcome to ours Guns Store</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis delectus hic iste dolorum ea aperiam quae odit ullam aliquid facere ex, fugiat, libero eligendi distinctio porro. Molestiae voluptate nobis ab animi ducimus! Debitis aperiam impedit ad error distinctio autem id.</p>
        </div>
      <div className="card w-96 bg-base-100 shadow-xl mt-10">
        <figure>
          <img
            src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guns;
