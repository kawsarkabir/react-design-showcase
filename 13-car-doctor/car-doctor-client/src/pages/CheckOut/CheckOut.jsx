import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const CheckOut = () => {
  const service = useLoaderData();
  const { user } = useContext(AuthContext);
  const handleCheckOut = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const deoAmount = form.deoAmount.value;
    const email = form.email.value;
    const message = form.message.value;
    const order = {
      name,
      date,
      deoAmount,
      email,
      message,
      title: service?.title,
      service_id: service?._id,
      img: service?.img,
    };
    console.log(order);
    fetch("http://localhost:5000/checkout", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="my-14 max-w-screen-xl mx-auto">
      <div className="text-center">
        <h1>checkout:{service?.title}</h1>
      </div>
      <div className="flex justify-center mt-20">
        <form onSubmit={handleCheckOut}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 justify-items-center">
            <input
              name="name"
              type="text"
              placeholder="Name"
              // defaultValue={`${user?.displayName}`}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              name="date"
              type="date"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              name="deoAmount"
              type="text"
              placeholder="Deo Amount"
              defaultValue={"$" + `${service.price}`}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              defaultValue={user?.email}
              className="input input-bordered w-full max-w-xs"
            />
            <textarea
              name="message"
              className="textarea textarea-bordered col-span-2 w-full"
              placeholder="Message"
              rows="5"
            ></textarea>
            <input
              type="submit"
              value="checkOut"
              className="btn btn-block col-span-2 bg-[#FF3811] text-white"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
