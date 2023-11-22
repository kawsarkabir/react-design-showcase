import { Helmet } from "react-helmet-async";
import Cover from "../../../Components/Shared/Cover/Cover";
import useMenu from "../../../hooks/useMenu";
import SectionHeader from "../../../Components/Shared/SectionHeader/SectionHeader";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");

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
      <div>
        <SectionHeader subHeading="---Don't miss---" mainHeading="TODAY'S OFFER"></SectionHeader>
      </div>
      {/*  <div className="mt-10">
        <Cover
          img="https://i.ibb.co/py8dCKG/banner3.jpg"
          title="Our Menu"
          peragraph="Would you like to try a dish?"
        ></Cover>
      </div> */}
    </div>
  );
};

export default Menu;
