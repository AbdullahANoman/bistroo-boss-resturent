import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";

const ManageItems = () => {
  const [menu] = useMenu();
  // console.log(menu)
  return (
    <div className="w-full">
      <Helmet>
        <title>Bistroo Boss | Manage Items</title>
      </Helmet>
      <SectionTitle
        header="manage all items"
        subHeader="Hurry Up"
      ></SectionTitle>
      <div className="overflow-x-auto px-20 py-20">
        <table className="table w-full ">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>ITEM IMAGE</th>
              <th>ITEM NAME</th>
              <th>PRICE</th>
              <th>UPDATE</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item?.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item?.name}</div>
                    </div>
                  </div>
                </td>
                <td>Zemlak, Daniel and Leannon</td>
                <td>$ {item?.price}</td>
                <td>Update</td>
                <td>Delete</td>
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default ManageItems;
