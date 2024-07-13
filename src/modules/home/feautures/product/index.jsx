import React from "react";
import money from "../../assets/money.png"
import repair from "../../assets/rapirs.png"
import calendar from "../../assets/calendar.png";
import engineer from "../../assets/engineer.png";
import pays from "../../assets/pays.png";
export default function Products() {
  return (
    <div className="px-[5%] my-[10%] ">
      <h1 className="sm:text-[50px] text-[30px] font-black text-white mb-7">
        Why Us
      </h1>

      <div className="grid sm:grid-cols-3 grid-cols-1 gap-8 sm:mt-8 mt-2">
        <div className="col-span-1 h-[400px] flex justify-between flex-col border border-[#303031] rounded-[40px] px-[4%] pt-[3%] pb-[5%]">
          <div>
            <h3 className="text-white font-bold text-[30px]">
              {" "}
              Value for Money
            </h3>
            <h6 className="text-white/60 mt-2">
              Affordable repairs without compromising on quality.
            </h6>
          </div>
          <img className="w-[75%]" src={money} alt="monuy" />
        </div>
        <div className="col-span-1 h-[400px] flex justify-between flex-col border border-[#303031] rounded-[40px] px-[4%] pt-[3%] pb-[5%]">
          <div>
            <h3 className="text-white font-bold text-[34px]">One-Stop Shop</h3>
            <h6 className="text-white/60 mt-2">
              Complete repair solutions for all devices
            </h6>
          </div>
          <img className="w-[75%]" src={repair} alt="monuy" />
          <div></div>
        </div>
        <div className="col-span-1 h-[400px] flex justify-between flex-col border border-[#303031] rounded-[40px] px-[4%] pt-[3%] pb-[5%]">
          <div>
            <h3 className="text-white font-bold text-[30px]">
              Guaranted warranty
            </h3>
            <h6 className="text-white/60 mt-2">
              Six months of guaranteed repair protection
            </h6>
          </div>
          <img className="w-[75%]" src={calendar} alt="monuy" />
        </div>
        <div className="col-span-1 h-[400px] flex justify-between flex-col border border-[#303031] rounded-[40px] px-[4%] pt-[3%] pb-[5%]">
          <div>
            <h3 className="text-white font-bold text-[30px]">
              Technical Expert
            </h3>
            <h6 className="text-white/60 mt-2">
              Certified professionals ensuring superior device repairs.
            </h6>
          </div>
          <img className="w-[75%]" src={engineer} alt="monuy" />
          <div></div>
        </div>
        <div className="col-span-1 h-[400px] flex justify-between flex-col border border-[#303031] rounded-[40px] px-[4%] pt-[3%] pb-[5%]">
          <div>
            <h3 className="text-white font-bold text-[30px]">
              Instant Repairs
            </h3>
            <h6 className="text-white/60 mt-2">
              Certified professionals ensuring superior device repairs.
            </h6>
          </div>
          <img className="w-[75%]" src={engineer} alt="monuy" />
        </div>
        <div className="col-span-1 h-[400px] flex justify-between flex-col border border-[#303031] rounded-[40px] px-[4%] pt-[3%] pb-[5%]">
          <div>
            <h3 className="text-white font-bold text-[30px]">
              Secure Payments
            </h3>
            <h6 className="text-white/60 mt-2">
              Certified professionals ensuring superior device repairs.
            </h6>
          </div>
          <img className="w-[75%]" src={pays} alt="monuy" />
        </div>
      </div>
    </div>
  );
}
