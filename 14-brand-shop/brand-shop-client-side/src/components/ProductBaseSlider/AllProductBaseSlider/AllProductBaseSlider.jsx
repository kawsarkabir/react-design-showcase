import { useLoaderData } from "react-router-dom";
import SliderCard from "../SliderCard/SliderCard";
 

const AllProductBaseSlider = () => {
  const allsliders = useLoaderData();
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table flex justify-center items-center">
          {/* head */}
          <thead>
            <tr className="flex justify-around">
              <th>Slider image </th>
              <th>Brand Name</th>
              <th>title</th>
            </tr>
          </thead>
        </table>
      </div>
       {
        allsliders.map(slider=> <SliderCard key={slider._id} slider={slider}></SliderCard>)
       }
    </div>
  );
};

export default AllProductBaseSlider;
