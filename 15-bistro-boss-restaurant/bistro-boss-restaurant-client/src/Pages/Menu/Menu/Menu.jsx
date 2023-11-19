import { Helmet } from "react-helmet-async";
import Cover from "../../../Components/Shared/Cover/Cover";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Kacchi bhai | Our Menu</title>
      </Helmet>
      <Cover title={"Our Menu"} peragraph="Would you like to try a dish?"></Cover>
    </div>
  );
};

export default Menu;
