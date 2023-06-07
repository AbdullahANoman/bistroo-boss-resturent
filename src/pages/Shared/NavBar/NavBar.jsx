import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";

const NavBar = () => {
  const [isAdmin] = useAdmin()
  const { user, logOut } = useContext(AuthContext);
  const [carts] = useCart();
  console.log(carts)
  const handleLogOut = () => {
    logOut().then(() => {
      alert("Logout Successfully");
    });
  };
  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/shop/salad">Our Shop</Link>
      </li>
      <li>
        {
          isAdmin ? <Link to="/dashBoard/adminHome">Dashboard</Link> : <Link to="/dashBoard/userHome">Dashboard</Link>
        }
      </li>
      <li>
        <Link to={'/dashBoard/cart'}>
          <button className="btn gap-2 relative bg-opacity-0 border-none">
            <FaShoppingCart className="text-2xl"></FaShoppingCart>
            <div className="badge absolute top-0 right-0 w-0 bg-opacity-0 badge-secondary border-none"> {carts?.length || 0}</div>
          </button>
        </Link>
      </li>

      {user ? (
        <>
          <li>
            <Link to="/secret">
              <img
                className="w-10 "
                style={{ borderRadius: "50px 50px 50px 50px" }}
                src={user?.photoURL}
                title={user?.displayName}
                alt=""
              />
            </Link>
          </li>
          <li>
            <button onClick={handleLogOut}>LogOut</button>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar fixed z-10 bg-black text-white  bg-opacity-30 max-w-screen-2xl	">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Get started</a>
      </div>
    </div>
  );
};

export default NavBar;
