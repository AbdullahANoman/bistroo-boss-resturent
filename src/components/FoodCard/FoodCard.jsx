import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const [,refetch] = useCart()
  const navigate = useNavigate();
  const location = useLocation()
  const { user } = useContext(AuthContext);
  const { image, name, price, recipe, _id } = item || {};
  const handleAddToCart = (item) => {
    console.log(item);
    if (user && user?.email) {
      const cartItem = {
        menuItemId: _id,
        name,
        image,
        price,
        email: user?.email,
      };
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.insertedId) {
            refetch()
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your food added in the cart ",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: 'Are you sure?',
        text: "You want to login first ",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login '
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', {state :{from:location}})
        }
      })
    }
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="absolute bg-black text-white px-2 py-1 right-4 rounded font-semibold top-5">
        ${price}
      </p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-primary"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
