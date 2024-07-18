import React from "react";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import { FaUsers } from "react-icons/fa6";
import { LuSearch } from "react-icons/lu";
import { IoFilterOutline } from "react-icons/io5";
import { TbEdit } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
import { FaCaretLeft } from "react-icons/fa6";
import { FaCaretRight } from "react-icons/fa";
import AllOrders from "./allorders";
import OrderTab from "./ordertab";
export default function Dashboard() {
  return (
    <div className="bg-gradient-to-r from-black from-50% to-[#FFFFFF] to-50% sm:pb-0 pb-[10vh]">
      <div className="max-w-[1440px] mx-auto font-poppins">
        <DashboardLayout>
          <div className="sm:px-[2%] px-[4%] sm:py-[4%] bg-[#FFFFFF] h-full">
           <OrderTab/>
            <div>
              <div className="flex sm:flex-row flex-col justify-between sm:items-center mt-[2%] sm:mb-0 mb-[5%]">
                <h4 className="text-lg font-medium sm:mb-0 mb-[2%]">
                  List of users
                </h4>
                <div className="flex items-center gap-2">
                  <div className="border border-[#D0D5DD] sm:w-[320px] h-[44px] rounded-lg flex items-center px-3">
                    <LuSearch className="text-[20px] text-[#667085]" />
                    <input
                      type="text"
                      className="w-full h-full bg-transparent outline-none px-3"
                      placeholder="Search"
                    />
                  </div>
                  <div className="border border-[#D0D5DD] w-[99px] h-[44px] rounded-lg flex gap-3 items-center px-3">
                    <IoFilterOutline className="text-[20px] text-[#667085]" />
                    <h4 className="text-sm text-[#344054]">Filter</h4>
                  </div>
                </div>
              </div>
              <AllOrders/>
             
            </div>
          </div>
        </DashboardLayout>
      </div>
    </div>
  );
}
