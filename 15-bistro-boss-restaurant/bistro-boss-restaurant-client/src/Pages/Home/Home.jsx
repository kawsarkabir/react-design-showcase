import CallUs from "../../Components/CallUs/CallUs";
import CategoryItem from "../../Components/CategoryItem/CategoryItem";
import ChefRecommends from "../../Components/ChefRecommends/ChefRecommends";
import PopularMenu from "../../Components/PopularMenu/PopularMenu";
import Banner from "../../Components/header/Banner/Banner";

const Home = () => {
    return (
        <div>
            <Banner/>
            <CategoryItem/>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <ChefRecommends></ChefRecommends>
        </div>
    );
};

export default Home;