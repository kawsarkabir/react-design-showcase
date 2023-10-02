import { useState } from "react";
import PropTypes from 'prop-types';

const Banner = ({ setSearchValue }) => {
  const [value, setValue] = useState("");

  const handleSearch = (value) => {
    setSearchValue(value);
  };
  return (
    <div>
      <div
        className="hero h-[90vh]"
        style={{
          backgroundImage: "url(https://i.ibb.co/s2mJzzn/Rectangle-4282.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-80 bg-white"></div>
        <div className="hero-content text-center">
          <div>
            <h1 className="mb-5 text-5xl font-bold">
              I Grow By Helping People In Need
            </h1>
            <div className="flex justify-center">
              <input
                onChange={(e) => setValue(e.target.value)}
                type="text"
                id="searchBtn"
                placeholder="search here.."
                value={value}
                className="input input-bordered rounded-r-none focus:outline-none"
              />
              <button
                onClick={() => handleSearch(value)}
                className="btn bg-red-500 text-white hover:bg-red-600 rounded-l-none"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  setSearchValue:PropTypes.object
}

export default Banner;
