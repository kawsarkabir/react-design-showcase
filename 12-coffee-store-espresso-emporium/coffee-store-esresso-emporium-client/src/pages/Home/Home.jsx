import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner";
import AllCoffee from "../../components/AllCoffee/AllCoffee";

const Home = () => {
  const Coffees = useLoaderData();
  return (
    <div>
      <Banner></Banner>
       <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 justify-center">
       {
         Coffees.map(coffee=> <AllCoffee key={coffee._id} coffee={coffee}></AllCoffee>)
       }
       </div>
    </div>
  );
};

export default Home;
