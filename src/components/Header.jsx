import { IoCartOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button } from "bootstrap";
import { useState } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const HandleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const cartProducts = useSelector((store) => store.cart);
  const wishlistProducts = useSelector((store) => store.wishlist);

  const [showLogout, setshowLogout] = useState(false);
  return (
    <header className="topheader">
      <div className="headergrid">
        <div className="logo">
          <NavLink
            to="/"
            className={({ isActive }) => {
              isActive ? "nav-link active-tab" : "nav-link";
            }}
          >
            <h1>E-Commerce</h1>
          </NavLink>
        </div>
        <div className="Navlinks">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "navlink activetab hometab" : "navlink hometab"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/Products"
            className={({ isActive }) =>
              isActive ? "navlink activetab" : "navlink"
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/Orders"
            className={({ isActive }) =>
              isActive ? "navlink activetab" : "navlink"
            }
          >
            Orders
          </NavLink>
        </div>
        <div className="NavlinksIcons">
          <NavLink
            to="/Cart"
            className={({ isActive }) =>
              isActive ? "navlinkicon activetabicon" : "navlinkicon"
            }
          >
            <div className="position-relative">
              <IoCartOutline size={30}></IoCartOutline>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                {cartProducts.length}
              </span>
            </div>
          </NavLink>
          <NavLink
            to="/Wishlist"
            className={({ isActive }) =>
              isActive ? "navlinkicon activetabicon" : "navlinkicon"
            }
          >
            <div
              className="position-relative"
              style={{
                color: "red",
              }}
            >
              <FaHeart size={30} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                {wishlistProducts.length}
              </span>
            </div>
          </NavLink>
          <div
            className="position-relative userButton"
            style={{
              display: "inline-block",
              marginLeft: "20px",
            }}
          >
            <button
              style={{ background: "none", border: "none" }}
              onClick={() => {
                if (showLogout) {
                  setshowLogout(false);
                } else {
                  setshowLogout(true);
                }
              }}
            >
              <FaUserLarge size={40} />
              <span className="position-absolute top-20 start-100 translate-middle badge rounded-pill bg-danger">
                monti242421
              </span>
            </button>
            <button
              className="logoutButton"
              hidden={showLogout ? "" : "hidden"}
              onClick={HandleLogout}
            >
              LogOut
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
