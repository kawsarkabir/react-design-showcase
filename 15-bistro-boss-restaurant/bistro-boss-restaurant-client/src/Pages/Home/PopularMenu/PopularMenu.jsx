import SectionHeader from "../../../Components/Shared/SectionHeader/SectionHeader.jsx";
import MenuItem from "./MenuItem";
import useMenu from "../../../hooks/useMenu.jsx";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popularItem = menu.filter((item) => item.category === "popular");
  return (
    <div className="mx-auto max-w-screen-xl px-4">
      <div className="text-cemter mt-5 ">
        <SectionHeader
          subHeading={"---Check it out---"}
          mainHeading={"FROM OUR MENU"}
        ></SectionHeader>
      </div>
      <div className="grid grid-cols-2 justify-items-center gap-10 mt-10">
        {popularItem?.map((item) => (
          <MenuItem item={item} key={item._id}></MenuItem>
        ))}
      </div>
      <div className="text-center mt-10">
        <button className="btn btn-outline">View More</button>
      </div>
    </div>
  );
};

export default PopularMenu;
