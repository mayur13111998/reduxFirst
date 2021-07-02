import React from "react";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";
const Navbar = () => {
  const Cart = useSelector((state) => state.Cart.products);
  return (
    <div className="container-fluid header pt-4 pb-2">
      <div className="container-md  flex justify-content-between flex-wrap">
        <div>
          <Link to="/">
            <img
              src="https://hongo.b-cdn.net/wp-content/uploads/2018/07/logo.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="header_li">
          <ul className="flex flex-wrap">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="header_li2">
          <ul className="flex">
            <li>
              <AiOutlineSearch />
            </li>
            <li>
              <FaRegUser />
            </li>
            <li>
              <AiOutlineHeart />
            </li>
            <li>
              <Link to="/cart">
                <div className="cart">
                  <p className="m-auto">{Cart.length}</p>
                </div>
                <FiShoppingCart />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
