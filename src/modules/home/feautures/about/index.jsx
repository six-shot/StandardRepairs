import React from "react";
import { BsFillPhoneFill } from "react-icons/bs";
import repairs from "../../assets/repairs.jpg";
export default function About() {
  return (
    <div className=" px-[5%] text-white">
      <div className="mt-[8%]">
        <h6 className="text-center font-semibold text-lg">ABOUT EXPERIENCE</h6>
        <h3 className="text-center text-3xl font-semibold mt-[2%]">
          We Have Than 20 Years Experience in Gadget
          <br /> Smartphone & Laptop Repair Services
        </h3>
        <div className="grid grid-cols-3 gap-5 items-center mt-[4%]">
          <div className=" col-span-1 w-full h-[150px] bg-[#626262] rounded-md flex gap-6 items-center px-[4%]">
            <div classNAme="w-[20%]">
              <div className="bg-black w-[60px] h-[60px] rounded-full flex  justify-center items-center">
                <BsFillPhoneFill className="text-white text-[30px]" />
              </div>
            </div>
            <div className=" w-[80%] flex flex-col">
              <h4 className="font-bold text-[24px]">Repair Device</h4>
              <p>Your one-stop solution for mobile, iPad,</p>
            </div>
          </div>

          <div className=" col-span-1 w-full h-[150px] bg-[#626262] rounded-md flex gap-6 items-center px-[4%]">
            <div classNAme="w-[20%]">
              <div className="bg-black w-[60px] h-[60px] rounded-full flex  justify-center items-center">
                <BsFillPhoneFill className="text-white text-[30px]" />
              </div>
            </div>
            <div className=" w-[80%] flex flex-col">
              <h4 className="font-bold text-[24px]">Repair Device</h4>
              <p>Your one-stop solution for mobile, iPad,</p>
            </div>
          </div>
          <div className=" col-span-1 w-full h-[150px] bg-[#626262] rounded-md flex gap-6 items-center px-[4%]">
            <div classNAme="w-[20%]">
              <div className="bg-black w-[60px] h-[60px] rounded-full flex  justify-center items-center">
                <BsFillPhoneFill className="text-white text-[30px]" />
              </div>
            </div>
            <div className=" w-[80%] flex flex-col">
              <h4 className="font-bold text-[24px]">Repair Device</h4>
              <p>Your one-stop solution for mobile, iPad,</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 items-center gap-20 my-[9%]">
        <div className="col-span-1 w-full">
          <img
            className="h-[600px] rounded-[30px] w-full object-cover"
            src={repairs}
            alt="repairs"
          />
        </div>
        <div className="col-span-1">
          <h5 className="mb-4">OUR INTRODUCTION</h5>
          <h2 className="text-[40px] font-bold leading-[50px]">
            Welcome To Smartphone & Laptop Repair Center
          </h2>
          <p className="mt-4">
            Your one-stop solution for mobile, iPad, and MacBook repairs. Fast
            and reliable service using genuine parts. Trust us to bring your
          </p>
          <div className="flex flex-col gap-7 my-7 text-black">
            <div className="w-full h-[110px] bg-white rounded-l-full shadow-2xl px-[4%] flex  gap-10 items-center">
              <div className="bg-black w-[70px] h-[70px] rounded-full flex  justify-center items-center">
                <BsFillPhoneFill className="text-white text-[35px]" />
              </div>
              <div className=" w-[80%] flex flex-col">
                <h4 className="font-bold text-[28px]">Repair Device</h4>
                <p>Your one-stop solution for mobile, iPad,</p>
              </div>
            </div>
            <div className="w-full h-[120px] bg-white rounded-l-full shadow-2xl px-[4%] flex  gap-10 items-center">
              <div className="bg-black w-[70px] h-[70px] rounded-full flex  justify-center items-center">
                <BsFillPhoneFill className="text-white text-[35px]" />
              </div>
              <div className=" w-[80%] flex flex-col">
                <h4 className="font-bold text-[28px]">Repair Device</h4>
                <p>Your one-stop solution for mobile, iPad,</p>
              </div>
            </div>
            <div className="">
              {" "}
              <button className="bg-white text-sm rounded-[8px] text-black px-8 py-4 mt-4">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
