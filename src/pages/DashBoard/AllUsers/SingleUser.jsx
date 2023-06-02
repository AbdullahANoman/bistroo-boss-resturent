import { BsPeopleFill, BsFillTrashFill } from "react-icons/bs";
import Swal from "sweetalert2";

const SingleUser = ({ user, index, refetch }) => {
  const handleDelete = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You Want to delete ${user.name}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/users/${user?._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              refetch();
            }
          });
      }
    });
  };
  const handleUpdate = (user) =>{
    console.log(user)
  }
  return (
    <tr className="text-center">
      <th>{index + 1}</th>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td className="  ">
        <button onClick={()=>handleUpdate(user)} className=" bg-yellow-700 btn btn-ghost text-white hover:bg-[#D1A054] ">
          <BsPeopleFill></BsPeopleFill>
        </button>
      </td>
      <td>
        <button
          onClick={() => handleDelete(user)}
          className="bg-red-600 btn  btn-ghost hover:bg-yellow-700 text-white"
        >
          <BsFillTrashFill className="mx-auto "></BsFillTrashFill>
        </button>
      </td>
    </tr>
  );
};

export default SingleUser;
