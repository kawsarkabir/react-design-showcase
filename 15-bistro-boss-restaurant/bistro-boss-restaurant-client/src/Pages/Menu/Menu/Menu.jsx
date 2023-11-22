import { Helmet } from "react-helmet-async";
import Cover from "../../../Components/Shared/Cover/Cover";
import PopularMenu from "../../Home/PopularMenu/PopularMenu";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Kacchi bhai | Our Menu</title>
      </Helmet>
      <Cover
        img="https://i.ibb.co/py8dCKG/banner3.jpg"
        title="Our Menu"
        peragraph="Would you like to try a dish?"
      ></Cover>
      <PopularMenu></PopularMenu>
      <div className="mt-10">
      <Cover
        img="https://i.ibb.co/py8dCKG/banner3.jpg"
        title="Our Menu"
        peragraph="Would you like to try a dish?"
      ></Cover>
      </div>
    </div>
  );
};

export default Menu;
