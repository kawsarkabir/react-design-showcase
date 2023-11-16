import { Helmet } from "react-helmet-async";
import Banner from "../../Components/header/Banner/Banner";
import CallUs from "./CallUs/CallUs";
import CategoryItem from "./CategoryItem/CategoryItem";
import ChefRecommends from "./ChefRecommends/ChefRecommends";
import Features from "./Features/Features";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Kacchi bhai | Home</title>
      </Helmet>
      <Banner />
      <CategoryItem />
      <PopularMenu></PopularMenu>
      <CallUs></CallUs>
      <ChefRecommends></ChefRecommends>
      <Features></Features>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
