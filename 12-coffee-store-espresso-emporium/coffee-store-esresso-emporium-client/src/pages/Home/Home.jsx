import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner";
import AllCoffee from "../../components/AllCoffee/AllCoffee";
import { useState } from "react";

const Home = () => {
  const loaderCoffees = useLoaderData();
  const [updateCoffee, setUpdateCoffee] = useState(loaderCoffees);
  return (
    <div>
      <Banner></Banner>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 justify-center">
        {updateCoffee.map((coffee) => (
          <AllCoffee 
          key={coffee._id} 
          coffee={coffee}
          updateCoffee={updateCoffee}
          setUpdateCoffee={setUpdateCoffee}
          ></AllCoffee>
        ))}
      </div>
    </div>
  );
};

export default Home;
