import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const MyCart = () => {
  const { user } = useContext(AuthContext);
  const [mycart, setMyCart] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/checkout?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyCart(data);
      });
  }, [user?.email]);

  const handleDeleted = (id) => {
    console.log(id);
    const process = confirm("Are You sure deleted this items ? ");
    if (process) {
      fetch(`http://localhost:5000/checkout/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("delete success");
          }
          const remaing = mycart.filter((singleCart) => singleCart._id !== id);
          setMyCart(remaing);
        });
    }
  };
/*   const handleUpdated = (id) => {
    fetch(`http://localhost:5000/checkout/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }; */
  return (
    <div className="max-w-screen-xl mx-auto my-20">
      {mycart.map((cart) => (
        <div key={cart._id} className="overflow-x-auto">
          <table className="table">
            <tbody>
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => handleDeleted(cart?._id)}
                      className="btn btn-sm btn-square btn-warning"
                    >
                      X
                    </button>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={cart.img} alt="Avatar" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{cart.name}</div>
                    </div>
                  </div>
                </td>
                <td>{cart?.deoAmount}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                  <button
                    // onClick={() => handleUpdated(cart?._id)}
                    className="btn btn-ghost btn-xs"
                  >
                    update
                  </button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default MyCart;
