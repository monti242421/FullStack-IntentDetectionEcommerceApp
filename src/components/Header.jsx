import { IoCartOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="topheader">
      <div class="headergrid">
        <div className="logo">
          <NavLink
            to="/"
            className={({ isActive }) => {
              isActive ? "nav-link active-tab" : "nav-link";
            }}
          >
            <h1>eCommerce</h1>
          </NavLink>
        </div>
        <div className="Navlinks">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "navlink activetab" : "navlink"
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
            <div class="position-relative">
              <IoCartOutline size={30}></IoCartOutline>
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                0
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
              class="position-relative"
              style={{
                color: "red",
              }}
            >
              <FaHeart size={30} />
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                0
              </span>
            </div>
          </NavLink>
          <div
            class="position-relative"
            style={{
              display: "inline-block",
              marginLeft: "20px",
            }}
          >
            <FaUserLarge size={40} />
            <span class="position-absolute top-20 start-100 translate-middle badge rounded-pill bg-danger">
              monti242421
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
