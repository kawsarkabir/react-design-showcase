import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionHeader from "../../../Components/Shared/SectionHeader/SectionHeader";
import Swal from "sweetalert2";

const AllUser = () => {
  const axiosSecure = useAxiosSecure();
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  const handleDelete = (id) => {
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
        axiosSecure
          .delete(`/users/${id}`)
          .then((data) => {
            if (data.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
            refetch();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };
  return (
    <div>
      <div>
        <SectionHeader
          subHeading="all user !"
          mainHeading="Manages Your User !"
        ></SectionHeader>
      </div>
      <div className="flex items-center gap-x-5 justify-between mt-10">
        <div>
          <h1 className="text-2xl">Users: {users.length}</h1>
        </div>
      </div>
      <div className="mt-5">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-orange-400 text-white">
              <tr>
                <th>No</th>
                <th> Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <tr key={user._id}>
                  <td>{idx + 1}</td>
                  <td>
                    <div className="avatar">
                      <div className="font-bold">{user?.name}</div>
                    </div>
                  </td>
                  <td>
                    <div>
                      <div className="font-bold">{user?.email}</div>
                    </div>
                  </td>
                  <td>
                    <i className="fa-solid fa-users"></i>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="btn  bg-red-500 text-white text-2xl px-2 py-1 btn-outline"
                    >
                      <i className="fa-regular fa-trash-can"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUser;
