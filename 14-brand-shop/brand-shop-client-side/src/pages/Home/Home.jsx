import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import DisplayBrandHome from "../../components/Brand/DisplayBrandHome";
import Discount from "../../components/Discount/Discount";
import FlashSale from "../../components/FlashSale/FlashSale";
import Services from "../../components/Services/Services";

const Home = () => {
  const brands = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <DisplayBrandHome brands={brands}></DisplayBrandHome>
      <FlashSale></FlashSale>
      <Discount></Discount>
    </div>
  );
};

export default Home;
