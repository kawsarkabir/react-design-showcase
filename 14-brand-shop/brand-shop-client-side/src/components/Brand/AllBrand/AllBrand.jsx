import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllBrandCard from "../AllBrandCard/AllBrandCard";
import Swal from "sweetalert2";

const AllBrand = () => {
  const allbrand = useLoaderData();
  const [brands, setBrand] = useState(allbrand)

    const handleDeleteBrand=(_id)=>{
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          
          fetch(`https://brand-shop-server-one-bice.vercel.app/brand/${_id}`, {
            method: 'DELETE', 
          })
          .then(res=>res.json())
          .then(()=>{
            Swal.fire(
              'Deleted!',
              'Your brand has been deleted.',
              'success'
            )
            const remainingBrand = brands.filter(brand=>brand._id !== _id)
            setBrand(remainingBrand)
          })
        }
      })
     
    }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table flex justify-center items-center">
          {/* head */}
          <thead>
            <tr className="flex justify-around">
              <th>Brand logo </th>
              <th>Brand Name</th>
              <th>CRUD</th>
            </tr>
          </thead>
        </table>
      </div>
      {brands.map((brand) => (
        <AllBrandCard  handleDeleteBrand={handleDeleteBrand} key={brand._id} brand={brand}></AllBrandCard>
      ))}
    </div>
  );
};

export default AllBrand;
