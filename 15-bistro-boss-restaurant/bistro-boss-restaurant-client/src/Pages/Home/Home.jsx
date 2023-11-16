import CategoryItem from "../../Components/CategoryItem/CategoryItem";
import PopularMenu from "../../Components/PopularMenu/PopularMenu";
import Banner from "../../Components/header/Banner/Banner";

const Home = () => {
    return (
        <div>
            <Banner/>
            <CategoryItem/>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;