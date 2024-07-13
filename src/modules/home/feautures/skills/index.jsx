import React from "react";
import { BsFillPhoneFill } from "react-icons/bs";
import skills from "../../assets/skill.jpg";
export default function Skills() {
  return (
    <div className=" px-[5%] text-white">
      <div className="grid sm:grid-cols-2 grid-cols-1 items-center sm:gap-20 gap-10 my-[9%]">
        <div className="col-span-1">
          <h5 className="mb-4 sm:text-base text-sm">OUR SKILLS & EXPERTISE</h5>
          <h2 className="sm:text-[40px] text-[30px] font-bold leading-[40px] sm:leading-[50px]">
            Welcome To Smartphone & Laptop Repair Center
          </h2>
          <p className="my-4 sm:text-base text-sm">
            Your one-stop solution for mobile, iPad, and MacBook repairs. Fast
            and reliable service using genuine parts. Trust us to bring your
          </p>
          <p className="sm:text-base text-sm">
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
          <img src={skills} alt="skill" />
        </div>
      </div>
    </div>
  );
}
