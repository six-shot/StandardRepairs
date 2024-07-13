import React from 'react'
import reviews from "../../assets/reviews.jpg"

export default function Reviews() {
  return (
    <div className="relative w-full px-[5%]">
      <div className="relative w-full h-[700px]">
        <img className="absolute  left-0 w-full h-full z-10" src={reviews} />
        <div className="absolute top-0 left-0 w-full h-[700px] grid sm:grid-cols-2 grid-cols-1 sm:gap-20 py-[5%] sm:px-[10%] z-20">
          <div className="col-span-1"></div>
          <div className="col-span-1">
            <div className=" w-full h-full px-[5%] py-[7%] text-white  rounded-[16px]  bg-transparent_background  backdrop-blur-[11px] shadow-[6px_6px_10px_0_rgba(0,0,0,0.25)] border border-transparent_stroke">
              <h4 className="text-2xl font-bold mb-5">Drop a review</h4>
              <form>
                <div>
                  <label className="text-xs font-medium">Name</label>
                  <div className="w-full h-[40px] bg-[#CFCFCF] rounded-[5px] ">
                    <input
                      type="text"
                      className="text-[#4F4F4F] w-full h-full outline-none bg-transparent placeholder:text-xs px-3"
                      placeholder="Enter Your Name"
                      required
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="text-xs font-medium">Phone Number</label>
                  <div className="w-full h-[40px] bg-[#CFCFCF] rounded-[5px] mt-1">
                    <input
                      type="text"
                      className="text-[#4F4F4F] w-full h-full outline-none bg-transparent placeholder:text-xs px-3"
                      placeholder="Enter Your Phone Number"
                      required
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="text-xs font-medium">Location</label>
                  <div className="w-full h-[40px] bg-[#CFCFCF] rounded-[5px] mt-1">
                    <input
                      type="text"
                      className="text-[#4F4F4F] w-full h-full outline-none bg-transparent placeholder:text-xs px-3"
                      placeholder="Enter Your Location"
                      required
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="text-xs font-medium">Drop a review</label>
                  <div className="w-full  bg-[#CFCFCF] rounded-[5px] mt-1">
                    <textarea
                      rows="4"
                      cols="0"
                      className="text-[#4F4F4F]   outline-none bg-transparent placeholder:text-xs p-3 resize-none"
                      placeholder="Drop a review"
                      required
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
