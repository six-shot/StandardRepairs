import React from "react";

export default function Products() {
  return (
    <div className="px-[5%] my-[10%] ">
      <h1 className="sm:text-[50px] text-[30px] font-black text-white mb-7">
        Why Us
      </h1>

      <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 sm:mt-8 mt-2">
        <div className="col-span-1 h-[500px] flex justify-between flex-col border border-[#303031] rounded-[40px] px-[4%] pt-[3%] pb-[5%]">
          <div>
            <h3 className="text-white font-bold text-[34px]">
              {" "}
              Value for Money
            </h3>
            <h6 className="text-white/60 mt-2">
              Affordable repairs without compromising on quality.
            </h6>
          </div>

          <div>
            <button className="border border-white text-sm rounded-[8px] text-white px-5 py-2.5">
              Learn more
            </button>
          </div>
        </div>
        <div className="col-span-1 h-[500px] flex justify-between flex-col border border-[#303031] rounded-[40px] px-[4%] pt-[3%] pb-[5%]">
          <div>
            <h3 className="text-white font-bold text-[34px]">One-Stop Shop</h3>
            <h6 className="text-white/60 mt-2">
              Complete repair solutions for all devices
            </h6>
          </div>

          <div>
            <button className="border border-white text-sm rounded-[8px] text-white px-5 py-2.5">
              Learn more
            </button>
          </div>
        </div>
        <div className="col-span-1 h-[500px] flex justify-between flex-col border border-[#303031] rounded-[40px] px-[4%] pt-[3%] pb-[5%]">
          <div>
            <h3 className="text-white font-bold text-[34px]">
              6 Month of Warranty
            </h3>
            <h6 className="text-white/60 mt-2">
              Six months of guaranteed repair protection
            </h6>
          </div>

          <div>
            <button className="border border-white text-sm rounded-[8px] text-white px-5 py-2.5">
              Learn more
            </button>
          </div>
        </div>
        <div className="col-span-1 h-[500px] flex justify-between flex-col border border-[#303031] rounded-[40px] px-[4%] pt-[3%] pb-[5%]">
          <div>
            <h3 className="text-white font-bold text-[34px]">
              Expert Technician
            </h3>
            <h6 className="text-white/60 mt-2">
              Certified professionals ensuring superior device repairs.
            </h6>
          </div>

          <div>
            <button className="border border-white text-sm rounded-[8px] text-white px-5 py-2.5">
              Launch more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
