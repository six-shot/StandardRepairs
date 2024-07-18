import {
  MdDashboard,
  MdShoppingBag,
  MdWork,
  MdAnalytics,
} from "react-icons/md";
import MenuLink from "./menuLinks/menuLinks";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "All Phones Orders",
        path: "/all-phones-orders",
        icon: <MdShoppingBag />,
      },
      {
        title: "All Car Orders",
        path: "/all-phones-orders",
        icon: <MdWork />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <aside className="col-span-2 sm:flex hidden bg-black h-screen ">
      <div className="fixed mt-[5%] ">
        <div className=" px-[5%] flex justify-center items-center gap-1 ">
          <h4 className="text-[30px] font-poppins font-bold text-white uppercase">
            ELPIZO{" "}
          </h4>
        </div>

        <nav className="mt-14 text-white w-full">
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
    </aside>
  );
};

export default Sidebar;
