import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DetailsCard from "./DetailsCard";

const DonationDetails = () => {
  const [details, setDetails] = useState({});
  const campaings = useLoaderData();

  const { id } = useParams();

  useEffect(() => {
    const findDonationDetails = campaings.find((details) => details.id === id);
    setDetails(findDonationDetails);
  }, [id, campaings]);
  return (
    <div>
      <DetailsCard details={details} />
    </div>
  );
};

export default DonationDetails;
