import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DetailsCard from "./DetailsCard";

const EventDetails = () => {
  const [details, setDetails] = useState()

  const events = useLoaderData()
  const {id} = useParams()
  useEffect(()=>{
    const findEventDetails = events.find(details=> details.id === id);
    setDetails(findEventDetails)
  }, [id, events])


  return (
    <div>
       <DetailsCard details={details}></DetailsCard>
    </div>
  );
};

export default EventDetails;
