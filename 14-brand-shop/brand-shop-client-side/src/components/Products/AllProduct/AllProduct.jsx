import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllProductCard from "./AllProductCard";
import Swal from "sweetalert2";

const AllProduct = () => {
  const allProducts = useLoaderData();
  const [products, setProducts] = useState(allProducts);

  const handleDeleteProduct = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    })
    .then((result) => {
      if (result.isConfirmed) {
        fetch(`https://brand-shop-server-one-bice.vercel.app/products/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
            Swal.fire("Deleted!", "Your product has been deleted.", "success");
            const remainingBrand = products.filter(
              (product) => product._id !== _id
            );
            setProducts(remainingBrand);
          });
      }
    });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table flex justify-center items-center">
          {/* head */}
          <thead>
            <tr className="flex justify-around">
              <th>Product image </th>
              <th>Product Name</th>
              <th>Product Price</th>
              <th>Category</th>
              <th>CRUD</th>
            </tr>
          </thead>
        </table>
      </div>
      {products?.map((product) => (
        <AllProductCard
          handleDeleteProduct={handleDeleteProduct}
          key={product._id}
          product={product}
        ></AllProductCard>
      ))}
    </div>
  );
};

export default AllProduct;
