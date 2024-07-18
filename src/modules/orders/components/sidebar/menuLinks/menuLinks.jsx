import React from "react";
import { Link } from "react-router-dom";

const MenuLink = ({ item }) => {
  const pathname = window.location.pathname;
    const isActive = pathname === item.path;

  return (
    <Link
      to={item.path}
      className={`flex items-center  ${
        isActive
          ? "sm:text-[#00A859] text-white sm:bg-transparent sm:rounded-none rounded-[50px]  bg-[#00a85abe] sm:px-5 px-4 sm:py-0 py-2.5  flex sm:gap-4 gap-1"
          : "flex gap-4 px-5  "
      }`}
    >
      {item.icon}
       <h5 className="sm:hidden flex text-xs ">{item.title}</h5>
      <h5 className="sm:flex hidden text-sm">{item.title}</h5>
    </Link>
  );
};

export default MenuLink;
