import { useEffect, useState } from "react";
import SectionHeader from "../Shared/SectionHeader/SectionHeader";
import MenuItem from "./MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
      });
  }, []);
  return (
    <div className="px-20">
      <div className="text-cemter mt-5 mx-auto max-w-xl">
        <SectionHeader
          subHeading={"---Check it out---"}
          mainHeading={"FROM OUR MENU"}
        ></SectionHeader>
      </div>
      <div className="grid grid-cols-2 justify-items-center gap-10 mt-10">
        {menu?.map((item) => (
          <MenuItem item={item} key={item._id}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default PopularMenu;
