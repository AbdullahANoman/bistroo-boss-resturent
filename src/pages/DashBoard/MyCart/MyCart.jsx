import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";

const MyCart = () => {
  const {loading} = useAuth();
  console.log(loading)
  if(loading){
    <p>Loading...</p>
  }
  const [cart, refetch] = useCart();
  const total = cart?.reduce((sum, item) => item.price + sum, 0);

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
        fetch(`http://localhost:5000/carts/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <>
      <Helmet>
        <title>Bistro Boss | My Cart</title>
      </Helmet>
      <SectionTitle
        header={"WANNA ADD MORE?"}
        subHeader={"my-cart"}
      ></SectionTitle>
      <div className="flex justify-evenly text-2xl w-full font-semibold">
        <p>Total Orders {cart?.length}</p>
        <p>Total Price {parseInt(total)}</p>
        <button className="btn bg-[#D1A054]  border-none">Pay</button>
      </div>
      <div className="overflow-x-auto w-4/5">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>ITEM IMAGE</th>
              <th>ITEM NAME</th>
              <th>PRICE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <>
                <tr>
                  <td>{index + 1}</td>
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
                    </div>
                  </td>
                  <td>{item?.name}</td>
                  <td className="">{item?.price}</td>
                  <th>
                    <button
                      onClick={() => handleDelete(item?._id)}
                      className="btn btn-ghost btn-lg bg-red-600 text-white"
                    >
                      <FaTrashAlt></FaTrashAlt>
                    </button>
                  </th>
                </tr>
              </>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </>
  );
};

export default MyCart;
