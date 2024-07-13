import React from "react";
import { BsFillPhoneFill } from "react-icons/bs";
import { FaClock, FaHandSparkles } from "react-icons/fa";
import repairs from "../../assets/repairs.jpg";
export default function About() {
  return (
    <div className=" px-[5%] text-white">
      <div className="mt-[8%]">
        <h6 className="text-center font-semibold text-lg">ABOUT Us</h6>
        <h3 className="text-center sm:text-3xl text-xl font-semibold mt-[2%]">
          We Have Than 20 Years Experience in Gadget
          <br className="sm:flex hidden" /> Smartphone & Laptop Repair Services
        </h3>
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-5 items-center mt-[4%]">
          <div className=" col-span-1 w-full sm:h-[150px] h-[100px] bg-[#626262] rounded-md flex gap-6 items-center px-[4%]">
            <div classNAme="w-[20%]">
              <div className="bg-black sm:w-[60px] w-[40px] h-[40px] sm:h-[60px] rounded-full flex  justify-center items-center">
                <BsFillPhoneFill className="text-white sm:text-[30px] text-[20px]" />
              </div>
            </div>
            <div className=" w-[80%] flex flex-col">
              <h4 className="font-bold sm:text-[24px] text-lg">
                Quality Services
              </h4>
              <p className="sm:text-base text-sm">
                Top-notch repairs with expert technicians
              </p>
            </div>
          </div>

          <div className=" col-span-1 w-full sm:h-[150px] h-[100px] bg-[#626262] rounded-md flex gap-6 items-center px-[4%]">
            <div classNAme="w-[20%]">
              <div className="bg-black sm:w-[60px] w-[40px] h-[40px] sm:h-[60px]  rounded-full flex  justify-center items-center">
                <FaHandSparkles className="text-white sm:text-[30px] text-[20px]" />
              </div>
            </div>
            <div className=" w-[80%] flex flex-col">
              <h4 className="font-bold sm:text-[24px] text-lg">
                Professional Team
              </h4>
              <p className="sm:text-base text-sm">
                Skilled experts delivering reliable repair solutions.
              </p>
            </div>
          </div>
          <div className=" col-span-1 w-full sm:h-[150px] h-[100px] bg-[#626262] rounded-md flex gap-6 items-center px-[4%]">
            <div classNAme="w-[20%]">
              <div className="bg-black sm:w-[60px] w-[40px] h-[40px] sm:h-[60px]  rounded-full flex  justify-center items-center">
                <FaClock className="text-white sm:text-[30px] text-[20px]" />
              </div>
            </div>
            <div className=" w-[80%] flex flex-col">
              <h4 className="font-bold sm:text-[24px] text-lg">
                24 Hour Support
              </h4>
              <p className="sm:text-base text-sm">
                Round-the-clock assistance for your devices.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 grid-cols-1 items-center sm:gap-20 my-[9%]">
        <div className="col-span-1 sm:order-first order-last w-full">
          <img
            className="sm:h-[600px] h-[400px]  rounded-[30px] w-full object-cover"
            src={repairs}
            alt="repairs"
          />
        </div>
        <div className="col-span-1">
          <h5 className="mb-4 sm:text-base text-sm">OUR INTRODUCTION</h5>
          <h2 className="sm:text-[40px] text-[30px] font-bold sm:leading-[50px] leading-[40px]">
            Welcome To Smartphone & Laptop Repair Center
          </h2>
          <p className="sm:text-base text-sm sm:mt-0 mt-4">
            Your one-stop solution for mobile, iPad, and MacBook repairs. Fast
            and reliable service using genuine parts. Trust us to bring your
          </p>
          <div className="flex flex-col gap-7 my-7 text-black">
            <div className="w-full sm:h-[110px] h-[80px] bg-white rounded-l-full shadow-2xl px-[4%] flex  gap-10 items-center">
              <div className="bg-black sm:w-[70px] sm:h-[70px] w-[50px] h-[50px] rounded-full flex  justify-center items-center">
                <BsFillPhoneFill className="text-white sm:text-[35px] text-[28px]" />
              </div>
              <div className=" sm:w-[80%] flex flex-col">
                <h4 className="font-bold sm:text-[28px] text-[22px]">
                  Repair Device
                </h4>
                <p className="sm:text-base text-sm">
                  Your one-stop solution for mobile, iPad,
                </p>
              </div>
            </div>
            <div className="w-full sm:h-[110px] h-[80px] bg-white rounded-l-full shadow-2xl px-[4%] flex  gap-10 items-center">
              <div className="bg-black sm:w-[70px] sm:h-[70px] w-[50px] h-[50px] rounded-full flex  justify-center items-center">
                <BsFillPhoneFill className="text-white sm:text-[35px] text-[28px]" />
              </div>
              <div className=" sm:w-[80%] flex flex-col">
                <h4 className="font-bold sm:text-[28px] text-[22px]">
                  Repair Device
                </h4>
                <p className="sm:text-base text-sm">
                  Your one-stop solution for mobile, iPad,
                </p>
              </div>
            </div>
            <div className="">
              {" "}
              <button className="bg-white text-sm rounded-[8px] text-black sm:px-8 px-4 sm:py-4 py-3  sm:mt-4">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
