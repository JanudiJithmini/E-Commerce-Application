import React from "react";
import { assets } from "../assets/assets/frontend_assets/assets";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/"><img src={assets.logo} alt="Logo" className="w-36" /></Link>

      <ul className="flex gap-5 text-sm text-gray-700">
        <li>
          <NavLink to="/" className={"flex flex-col items-center gap-1"}>
            <p>HOME</p>
            <hr className="w-2/4 h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/collection"
            className={"flex flex-col items-center gap-1"}
          >
            <p>COLLECTION</p>
            <hr className="w-2/4 h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </li>

        <li>
          <NavLink to="/about" className={"flex flex-col items-center gap-1"}>
            <p>ABOUT</p>
            <hr className="w-2/4 h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact" className="flex flex-col items-center gap-1">
            <p>CONTACT</p>
            <hr className="w-2/4 h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </li>
      </ul>
      <div className="flex items-center gap-3">
        <img
          src={assets.search_icon}
          alt="Search"
          className="w-4 h-4 cursor-pointer"
        />

        <div className="relative group">
          <img
            src={assets.profile_icon}
            alt="Profile"
            className="w-4 h-4 cursor-pointer"
          />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 w-40 h-40 bg-white pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded ">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        {/* <div className="relative group">
          <img
            src={assets.cart_icon}
            alt="Cart"
            className="w-4 h-4 cursor-pointer"
          />
          <span className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
            3
          </span>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 w-40 h-40 bg-white pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded ">
              <p className="cursor-pointer hover:text-black">View Cart</p>
              <p className="cursor-pointer hover:text-black">Checkout</p>
            </div>
          </div>
        </div> */}
        <Link to="/cart" className="relative">
          <img
            src={assets.cart_icon}
            alt="Cart"
            className="w-4 h-4 cursor-pointer"
          />
          <span className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
            3
          </span>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          alt="Menu"
          className="w-4 h-4 cursor-pointer sm:hidden"
        />
      </div>
      {/*Sidebar menu for small screens*/}
      <div
        className={'fixed top-0 left-0 cursor-pointer w-full h-full bg-white z-50 transform-all ' + (visible ? "translate-x-0" : "-translate-x-full") + " transition-transform duration-300 ease-in-out"}
      >
        <div className="flex items-center justify-between p-5">
          <img  onClick={() => setVisible(false)} src={assets.dropdown_icon} alt="Logo" className="h-4 rotate-180" />
          <p> Back </p>
        </div>
        <NavLink onClick={()=> setVisible(false)} to='/'><p className="py-2 pl-6 border">Home</p></NavLink>
        <NavLink onClick={()=> setVisible(false)} to='/collection'><p className="py-2 pl-6 border">Collection</p></NavLink>
        <NavLink onClick={()=> setVisible(false)} to='/about'><p className="py-2 pl-6 border">About</p></NavLink>
        <NavLink onClick={()=> setVisible(false)} to='/contact'><p className="py-2 pl-6 border">Contact</p></NavLink>
      </div>
    </div>
  );
};

export default Navbar;
