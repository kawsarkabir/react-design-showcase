import React from "react";

const Banner = () => {
  return (
    <div className="min-h-screen container mx-auto px-5">
      <div className="flex items-center lg:flex-row-reverse flex-col justify-around">
        <div>
          <img src="https://i.ibb.co/r7h5FxN/user.png" />
        </div>
        <div>
          <h1 className="text-5xl font-bold">
            One Step  Closer To Your <br />
            <span className="text-purple-500">Dream Job</span>
          </h1>
          <p className="py-6">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="btn bg-purple-500 text-white">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
