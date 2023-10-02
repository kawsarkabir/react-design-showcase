import { useEffect, useState } from "react";
import Banner from "../../components/Header/Banner";
import { useLoaderData } from "react-router-dom";
import CampaingCard from "../../components/Campaings/CampaingCard";

const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState([]);
  

  const campaings = useLoaderData();

  useEffect(() => {
    filteredData();
  }, [searchValue]);

  const filteredData = () => {
    const filteredData = campaings.filter((item) =>
      item.category.toLowerCase().includes(searchValue.toLowerCase())
    );
    setData(filteredData);
  };

  return (
    <div>
      <Banner setSearchValue={setSearchValue} />

      <div className="max-w-screen-xl px-6 md:mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-16">
        {data.map((campaing) => (
          <CampaingCard key={campaing.id} campaing={campaing}></CampaingCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
