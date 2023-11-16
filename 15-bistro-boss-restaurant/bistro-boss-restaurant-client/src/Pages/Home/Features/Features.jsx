 
import SectionHeader from "../../../Components/Shared/SectionHeader/SectionHeader";
import "./Features.css";
const Features = () => {
  return (
    <div className="max-w-screen-xl bg-fixed mx-auto px-4 features-section mt-20">
      <div>
        <SectionHeader
          subHeading="---Check it out---"
          mainHeading="FROM OUR MENU"
        ></SectionHeader>
      </div>
      <div className="flex justify-center gap-10 items-center mt-20 ">
        <div className="w-2/4 mx-auto">
          <img src="https://i.ibb.co/7k29RQX/featured.jpg" alt="" />
        </div>
        <div className="w-2/4 mx-auto">
          <h5>March 20, 2023</h5>
          <h4 className="mb-2 text-xl font-bold">WHERE CAN I GET SOME?</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn border-none text-white mt-5 bg-[#D99904]">see more</button>
        </div>
      </div>
    </div>
  );
};

export default Features;
