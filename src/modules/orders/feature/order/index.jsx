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
export default function Dashboard() {
  return (
    <div className="bg-gradient-to-r from-black from-50% to-[#FFFFFF] to-50% sm:pb-0 pb-[10vh]">
      <div className="max-w-[1440px] mx-auto font-poppins">
        <DashboardLayout>
          <div className="sm:px-[2%] px-[4%] sm:py-[4%] bg-[#FFFFFF] h-full">
            <div className="grid sm:grid-cols-3 grid-cols-1  gap-5 items-center sm:pr-[8%]">
              <div className="col-span-1 h-[112px]   rounded-[10px] flex justify-between flex-col p-4">
                <div className="flex items-center gap-[10px]">
                  <div className="w-[34px] h-[34px] bg-[#000000] flex justify-center items-center text-white rounded-[6px]">
                    <FaUsers className="w-[18px]" />
                  </div>
                  <h4 className="text-[15px] font-medium">No of Orders</h4>
                </div>
                <div className="flex items-end justify-end">
                  <h4 className="text-[30px] font-semibold">2</h4>
                </div>
              </div>
              <div className="col-span-1 h-[112px]  rounded-[10px] bg-[#000000] flex justify-between flex-col p-4">
                <div className="flex items-center gap-[10px]">
                  <div className="w-[34px] h-[34px] border border-white flex justify-center items-center text-white rounded-[6px]">
                    <FaUsers className="w-[18px]" />
                  </div>
                  <h4 className="text-[15px] font-medium text-white">
                    No of user
                  </h4>
                </div>
                <div className="flex items-end justify-end">
                  <h4 className="text-[30px] font-semibold text-white">2</h4>
                </div>
              </div>{" "}
            </div>
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
