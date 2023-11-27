import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionHeader from "../../../Components/Shared/SectionHeader/SectionHeader";

const AllUser = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
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
                <th> Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
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
                  <td><i className="fa-solid fa-users"></i></td>
                  <td className="">
                    <button className="btn  bg-red-500 text-white text-2xl px-2 py-1 btn-outline">
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
