import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import SingleUser from "./SingleUser";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure() 
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });
  console.log(users);
  return (
    <div className="w-full">
      <Helmet>
        <title>Bistroo Boss | All Users</title>
      </Helmet>
      <p className="text-3xl font-semibold text-center">
        Total Users : {users?.length}
      </p>
      <div className="overflow-x-auto">
        <table className="table   w-4/5 mt-10 mx-auto">
          <thead className="bg-[#D1A054]">
            <tr className="text-center ">
              <th className="bg-[#D1A054]">#</th>
              <th className="bg-[#D1A054]">Name</th>
              <th className="bg-[#D1A054]">Email</th>
              <th className="bg-[#D1A054]">Role</th>
              <th className="bg-[#D1A054]">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <SingleUser
                key={user._id}
                user={user}
                index={index}
                refetch={refetch}
              ></SingleUser>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
