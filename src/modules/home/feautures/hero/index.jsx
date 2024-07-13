import Spline from "@splinetool/react-spline";
import React from "react";
import Navbar from "../navbar";

export default function Hero() {
  return (
    <div className="relative w-full px-[5%]">
      <div className="relative w-full h-[83vh]">
        {/* <Spline
          className="absolute  left-0 w-full h-full z-10"
          scene="https://prod.spline.design/KB-zkHUAhzkRRfSV/scene.splinecode"
        />{" "} */}
        
        <div className="absolute top-0 left-0 w-full h-[83vh] flex flex-col items-center justify-center z-20">
          <h1 className="text-white sm:text-[65px] text-[40px] font-bold  text-center leading-[45px] sm:leading-[76px]">
            DOORSTEP REPAIR <br className="sm:flex hidden"/> SERVICES
          </h1>
          <p className="text-white mt-[0.5%]  text-center font-bold sm:text-lg md:text-2xl sm:w-[500px]">
            FOR MOBILES, APPLE WATCHES, IPADS & MACBOOKS
          </p>
          <div className="mt-[1%] flex  items-center gap-5">
            <button className="bg-black text-sm rounded-[8px] text-white px-3.5 py-2">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
