import { Link, useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const service = useLoaderData();
  return (
    <div className="my-14 max-w-screen-xl mx-auto">
      <h1>checkout:{service?.title}</h1>
      <div className="flex justify-center ">
        <div>
          <input type="text" placeholder="Your Name" className="border-red-300" />
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="Your Name" />
          <textarea name="" id="" cols="30" rows="3"></textarea>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
