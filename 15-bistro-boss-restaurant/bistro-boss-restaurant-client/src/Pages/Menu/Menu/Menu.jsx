import { Helmet } from "react-helmet-async";
import Cover from "../../../Components/Shared/Cover/Cover";
import useMenu from "../../../hooks/useMenu";
import SectionHeader from "../../../Components/Shared/SectionHeader/SectionHeader";
import MenuCategory from "../MenuCategory/MenuCategory";

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
      {/* offered items here */}
      <div className="max-w-screen-xl mx-auto px-4">
        <SectionHeader
          subHeading="---Don't miss---"
          mainHeading="TODAY'S OFFER"
        ></SectionHeader>
        <MenuCategory items={offered}></MenuCategory>
      </div>
      {/* dessert items here */}
      <div className="my-10">
        <div className="max-w-screen-xl mx-auto px-4">
          <MenuCategory
            items={dessert}
            title="dessert"
            coverImg="https://i.ibb.co/9991Tjh/dessert-bg.jpg"
          ></MenuCategory>
        </div>
      </div>
      {/* pizza items here */}
      <div className="my-10">
        <div className="max-w-screen-xl mx-auto px-4">
          <MenuCategory
            items={pizza}
            title="pizza"
            coverImg="https://i.ibb.co/Hz0fqt0/pizza-bg.jpg"
          ></MenuCategory>
        </div>
      </div>
      {/* salad iems hre */}
      <div className="my-10">
        <div className="max-w-screen-xl mx-auto px-4">
          <MenuCategory
            coverImg="https://i.ibb.co/Hz0fqt0/pizza-bg.jpg"
            title="salad"
            items={salad}
          ></MenuCategory>
        </div>
      </div>
      {/* soup items hree */}
      <div className="my-10">
        <div className="max-w-screen-xl mx-auto px-4">
          <MenuCategory
            coverImg="https://i.ibb.co/Hz0fqt0/pizza-bg.jpg"
            title="soups"
            items={soup}
          ></MenuCategory>
        </div>
      </div>
    </div>
  );
};

export default Menu;
