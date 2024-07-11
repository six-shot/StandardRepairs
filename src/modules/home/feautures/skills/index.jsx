import React from "react";
import { BsFillPhoneFill } from "react-icons/bs";
import skills from "../../assets/skill.jpg";
export default function Skills() {
  return (
    <div className=" px-[5%] text-white">
      <div className="grid grid-cols-2 items-center gap-20 my-[9%]">
        <div className="col-span-1">
          <h5 className="mb-4">OUR SKILLS & EXPERTISE</h5>
          <h2 className="text-[40px] font-bold leading-[50px]">
            Welcome To Smartphone & Laptop Repair Center
          </h2>
          <p className="my-4">
            Your one-stop solution for mobile, iPad, and MacBook repairs. Fast
            and reliable service using genuine parts. Trust us to bring your
          </p>
          <p>
            Your one-stop solution for mobile, iPad, and MacBook repairs. Fast
            and reliable service using genuine parts. Trust us to bring your
          </p>
          <div className="flex w-full gap-3 flex-col mt-[5%]">
            <div className="w-[74%] h-[30px]  bg-green-500 px-[2%] text-sm flex justify-between items-center text-white">
              <h6>Diagonitics</h6>
              <h6>86%</h6>
            </div>
            <div className="w-[86%] h-[30px] bg-green-500 px-[2%] text-sm flex justify-between items-center text-white">
              <h6>Replacement</h6>
              <h6>95%</h6>
            </div>{" "}
            <div className="w-[76%] h-[30px] bg-green-500 px-[2%] text-sm flex justify-between items-center text-white">
              <h6>Repairs</h6>
              <h6>85%</h6>
            </div>
     
          </div>
        </div>
        <div>
            <img src={skills} alt="skill"/>
        </div>
      </div>
    </div>
  );
}
