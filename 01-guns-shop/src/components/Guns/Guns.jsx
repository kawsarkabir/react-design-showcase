import React, { useEffect, useState } from "react";
import Gun from "../Gun/Gun";

const Guns = () => {
  const [guns, setGuns] = useState([]);
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/mir-hussain/guns/main/data.json")
      .then((res) => res.json())
      .then((data) => setGuns(data));
  }, []);
  return (
    <div className="Guns">
      <div className="text-center mt-10 w-3/4 mx-auto">
        <h1 className="text-5xl mb-5">Hey! Welcome to ours <span className="text-violet-700 font-bold">Guns Store</span> </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
          delectus hic iste dolorum ea aperiam quae odit ullam aliquid facere
          ex, fugiat, libero eligendi distinctio porro. Molestiae voluptate
          nobis ab animi ducimus! Debitis aperiam impedit ad error distinctio
          autem id.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-20">
      {guns.map((gun) => (
          <Gun gun={gun} key ={gun.id} />
        ))}
      </div>
    </div>
  );
};

export default Guns;
