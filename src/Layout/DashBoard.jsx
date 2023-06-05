import {
  FaHome,
  FaCalendarAlt,
  FaCartPlus,
  FaWallet,
  FaBars,
  FaShoppingBag,
  FaMailBulk,
  FaUsers,
  FaBook,
} from "react-icons/fa";
import {ImSpoonKnife} from 'react-icons/im'
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
// import useAdmin from "../hooks/useAdmin";

const DashBoard = () => {
  //TODO admin panel update and this pattern todo dynamic
  // const isAdmin = true;
  const [isAdmin] = useAdmin();
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col sm:items-center md:items-start  ">
      <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
        <Outlet></Outlet>
        
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80  text-base-content bg-[#D1A054] uppercase">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/">
                  <FaHome></FaHome> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItem">
                  <ImSpoonKnife></ImSpoonKnife> Add An Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                 <FaBars></FaBars>Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                 <FaBook></FaBook> Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allusers">
                  <FaUsers></FaUsers> All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/">
                  <FaHome></FaHome> User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <FaCalendarAlt></FaCalendarAlt> Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymentHistory">
                  <FaWallet></FaWallet> PAYMENT HISTORY
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  <FaCartPlus></FaCartPlus> My Cart
                </NavLink>
              </li>
            </>
          )}
          <div className="border-b my-5 border-2"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <FaBars></FaBars>Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <FaShoppingBag></FaShoppingBag> Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <FaMailBulk></FaMailBulk> Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
