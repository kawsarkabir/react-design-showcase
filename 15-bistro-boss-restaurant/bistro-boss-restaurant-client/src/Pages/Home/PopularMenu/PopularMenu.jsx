import { useEffect, useState } from "react";
import SectionHeader from "../../../Components/Shared/SectionHeader/SectionHeader.jsx";
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
    <div className="mx-auto max-w-screen-xl px-4">
      <div className="text-cemter mt-5 ">
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
