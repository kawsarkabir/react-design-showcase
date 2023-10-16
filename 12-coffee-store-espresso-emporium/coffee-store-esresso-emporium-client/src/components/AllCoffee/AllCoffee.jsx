import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AllCoffee = ({ coffee, updateCoffee, setUpdateCoffee }) => {
  const { _id, coffeeName, quentity, supplier, taste, category } = coffee || {};

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your coffee has been deleted.", "success");
              const remaining = updateCoffee.filter(cof=> cof._id !== _id);
              setUpdateCoffee(remaining)
            }

          });
      }
    });
  };
  return (
    <div className="card card-side bg-orange-50 shadow p-10 mx-5">
      <figure>{/* <img src={photoURL} alt="Movie" /> */}</figure>
      <div className=" flex items-center justify-between w-full">
        <div className="space-y-3">
          <h2 className="card-title">Name: {coffeeName}</h2>

          <p>supplier: {supplier}</p>
          <p>quentity: {quentity}</p>
          <p>taste: {taste}</p>
          <p>category: {category}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="btn-group btn-group-vertical space-y-4">
            <button className="btn btn-outline btn-warning">view</button>
            <Link to={`/updateCoffee/${_id}`}>
              <button className="btn btn-outline btn-success">update</button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-outline btn-error"
            >
              delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCoffee;
