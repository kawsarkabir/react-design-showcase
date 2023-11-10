import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const loadedProducts = useLoaderData();

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.productName.value;
    const category = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const details = form.details.value;
    const photoURL = form.photoURL.value;

    const updateProducts = {
      productName,
      category,
      price,
      rating,
      details,
      photoURL,
    };
    fetch(
      `https://brand-shop-server-one-bice.vercel.app/products/${loadedProducts._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateProducts),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire("Good job!", "Your Product SuccessFully Updated!", "success");
      });
  };

  return (
    <div className=" bg-[#F4F3F0] p-20">
      <h1 className=" mb-8 lg:text-4xl shadow-sky-950 text-center font-bold">
        Update Your Product
      </h1>
      <div className="justify-center flex">
        <form onSubmit={handleUpdateProduct}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10  ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <label className="input-group">
                <input
                  name="productName"
                  type="text"
                  defaultValue={loadedProducts.productName}
                  className="input input-bordered"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select
                defaultValue={loadedProducts.category}
                name="category"
                className="select select-bordered join-item"
              >
                <option disabled selected>
                  Filter
                </option>
                <option>Apple</option>
                <option>Samsung</option>
                <option>Sony</option>
                <option>Google</option>
                <option>Inter</option>
                <option>Nokia</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <label className="input-group">
                <input
                  name="price"
                  type="text"
                  defaultValue={loadedProducts.price}
                  className="input input-bordered"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <label className="input-group">
                <input
                  name="rating"
                  type="text"
                  defaultValue={loadedProducts.rating}
                  className="input input-bordered"
                />
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Short Description</span>
              </label>
              <label className="input-group">
                <input
                  name="details"
                  type="text"
                  defaultValue={loadedProducts.details}
                  className="input input-bordered"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <label className="input-group">
                <input
                  name="photoURL"
                  type="text"
                  defaultValue={loadedProducts.photoURL}
                  className="input input-bordered  "
                />
              </label>
            </div>
          </div>

          <button className="btn bg-[#FFBB38] w-full mt-10">
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
