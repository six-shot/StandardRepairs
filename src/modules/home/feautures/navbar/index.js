import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navItems } from "./NavItems";
import Dropdown from "./dropdown";
import { CiShoppingCart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";

function Navbar() {
  const [dropdown, setDropdown] = useState({});

  const handleMouseEnter = (id) => {
    setDropdown((prevState) => ({ ...prevState, [id]: true }));
  };

  const handleMouseLeave = (id) => {
    setDropdown((prevState) => ({ ...prevState, [id]: false }));
  };

  return (
    <>
      {" "}
      <div className="w-full flex justify-between items-center bg-white h-[10vh] px-[5%]">
        <div>
          <h4 className="font-bold text-2xl">LOGO</h4>
        </div>
        <nav>
          <ul className="flex gap-8 items-center">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Shop</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div className="flex items-center gap-2 border-l border-black px-3">
          <CiSearch className="text-[28px]" />
          <CiShoppingCart className="text-[28px]" />
        </div>
      </div>
      <nav className="px-[5%] w-full bg-black h-[7vh] flex justify-center items-center text-white">
        <ul className="flex items-center">
          {navItems.map((item) => (
            <li
              key={item.id}
              className={`${item.cName} flex items-center h-[7vh] relative`}
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={() => handleMouseLeave(item.id)}
            >
              <Link
                to={item.path}
                className="no-underline text-white text-sm mr-8 p-2 rounded-md hover:bg-black"
              >
                {item.title}
              </Link>
              {item.dropdown && dropdown[item.id] && (
                <Dropdown items={item.dropdown} />
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
