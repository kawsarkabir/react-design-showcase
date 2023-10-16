import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee = useLoaderData()
    const { _id, coffeeName, quentity, supplier, taste, category } = coffee || {};
    const handleUpdateCoffee=e=>{
        e.preventDefault()
        const form = e.target;
        const coffeeName = form.coffeeName.value;
        const quentity = form.quentity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photoURL = form.photoURL.value;
        const updateCoffee = {coffeeName, quentity, supplier, taste, category, details, photoURL};
        console.log(updateCoffee);
        // send to data in database using fetch 
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT', 
            headers:{
                'content-type' : 'application/json'
            }, 
            body: JSON.stringify(updateCoffee)
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data)
            Swal.fire({
                title: 'Success!',
                text: 'updateCoffee added',
                icon: 'seccess',
                confirmButtonText: 'Cool'
              })
        })
    }
    return (
        <div>
           
            <div className=" bg-[#F4F3F0] p-20">
      <h1 className="lg:text-4xl shadow-sky-950 text-center font-bold">
        Add Update Coffee
      </h1>
      <div className="justify-center flex">
        <form onSubmit={handleUpdateCoffee}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10  ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Update Coffee Name</span>
              </label>
              <label className="input-group">
                <input
                name="coffeeName"
                  type="text"
                  defaultValue={coffeeName}
                  placeholder="Enter update coffee name"
                  className="input input-bordered"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Available Quentity</span>
              </label>
              <label className="input-group">
                <input
                defaultValue={quentity}
                  name="quentity"
                  type="text"
                  placeholder="Enter coffee chef"
                  className="input input-bordered"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Supplier</span>
              </label>
              <label className="input-group">
                <input
                defaultValue={supplier}
                name="supplier"
                  type="text"
                  placeholder="Enter coffee supplier"
                  className="input input-bordered"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Taste</span>
              </label>
              <label className="input-group">
                <input
                defaultValue={taste}
                name="taste"
                  type="text"
                  placeholder="Enter coffee taste"
                  className="input input-bordered"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <label className="input-group">
                <input
                name="category"
                  type="text"
                  defaultValue={category}
                  placeholder="Enter coffee category"
                  className="input input-bordered"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <label className="input-group">
                <input
                name="details"
                  type="text"
                  placeholder="Enter coffee details"
                  className="input input-bordered"
                />
              </label>
            </div>
            <div className="form-control col-span-2">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <label className="input-group">
                <input
                name="photoURL"
                  type="text"
                  placeholder="Enter photo URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
         
            <button className="btn bg-[#D2B48C] w-full mt-10">
              Update Coffee
            </button>
             
        
        </form>
      </div>
    </div>
        </div>
    );
};

export default UpdateCoffee;