import React, { useState } from "react";
import { TfiAnnouncement } from "react-icons/tfi";
import { FaUserCircle } from "react-icons/fa";
import * as HiIcons from "react-icons/hi";
import { IconContext } from "react-icons";
import * as IoIcons from "react-icons/io5";

import MenuLink from "../sidebar/menuLinks/menuLinks";
import {
  MdDashboard,
  MdShoppingBag,
  MdWork,
  MdAnalytics,
} from "react-icons/md";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },

      {
        title: "Civic Education",
        path: "/civic-education",
        icon: <MdShoppingBag />,
      },
      {
        title: "Policy Education",
        path: "/policy-education/books",
        icon: <MdWork />,
      },
      {
        title: "Join Political Party",
        path: "/political-party",
        icon: <MdWork />,
      },
      {
        title: "Support",
        path: "/support",
        icon: <MdWork />,
      },
      {
        title: "Know your MDA's",
        path: "/know-your-mda",
        icon: <MdAnalytics />,
      },
      {
        title: "Know your leaders",
        path: "/know-your-leaders",
        icon: <MdAnalytics />,
      },
    ],
  },
];


export default function Header() {
  
  const pathnameSegments = window.location.pathname.split("/");
  const secondSegment = pathnameSegments[1];
  const [navbar, setNavbar] = useState(false);
  return (
    <div className="sm:h-[10vh] h-[8vh] bg-[#ffffff]  w-full flex justify-between items-center sm:px-[3%] px-5">
      <div>
        <div className="flex items-center gap-2">
          <div className="sm:hidden flex text-black rounded-[8px]">
            <IconContext.Provider value={{ size: "22px" }}>
              <HiIcons.HiMenuAlt4 onClick={() => setNavbar(!navbar)} />
            </IconContext.Provider>
          </div>
          <div
            className={`${
              navbar ? "flex" : "hidden"
            } w-full h-screen  bg-[#FAFAFA] fixed top-0 right-0   px-[4%] pt-[2%]  sm:hidden flex flex-col sidebar z-10`}
          >
            <div className="flex w-full justify-between  ">
              {" "}
              <IconContext.Provider value={{ color: "#34CAA5", size: "30px" }}>
                <IoIcons.IoCloseOutline onClick={() => setNavbar(!navbar)} />
              </IconContext.Provider>
            </div>
            <div className="flex justify-center items-center gap-1 ">
              
              <h4 className="text-[30px] font-poppins font-bold text-black">
                ELPIZO
              </h4>
            </div>
            <nav className="mt-[20%]">
              <ul className=" w-full flex flex-col  ">
                {menuItems.map((menu) => (
                  <li key={menu.title} className="flex gap-8 flex-col w-full">
                    {menu.list.map((item) => (
                      <MenuLink item={item} key={item.title} />
                    ))}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <h4 className="text-xl font-bold capitalize"> {secondSegment}</h4>
        </div>
      </div>

      <div className="sm:flex hidden w-[304px] h-[43px] bg-[#ECECEC] rounded-[5px]">
        <input
          type="text"
          placeholder="Search"
          className="w-full h-full outline-none bg-transparent px-3 rounded-[5px]"
        />
      </div>
      <div className="flex items-center space-x-3 sm:space-x-6">
        <div>
          <TfiAnnouncement className="text-[20px]" />
        </div>
        <div>
          <FaUserCircle className="text-[30px] text-[#00A859]" />
        </div>
      </div>
    </div>
  );
}
