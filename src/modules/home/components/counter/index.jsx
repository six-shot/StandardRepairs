import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export default function Counter() {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div className="bg-black mt-[2%]  px-[10%]  ">
        <div className="flex sm:flex-row flex-col justify-between sm:gap-0 gap-6 items-center border-[2px] border-[#74747e] px-[4%] py-[5%] rounded-[40px] ">
          <div className=" flex flex-col items-center ">
            <h1 className="text-white sm:text-[60px] text-[40px]">
              {counterOn && (
                <CountUp start={0} end={20} duration={2} delay={0} />
              )}
              +
            </h1>
            <h5 className="text-white sm:text-base text-sm">Glorious Years</h5>
          </div>
          <div className="flex items-center flex-col">
            <h1 className="text-white sm:text-[60px] text-[40px]">
              {counterOn && (
                <CountUp start={0} end={2} duration={2} delay={0} />
              )}
              k+
            </h1>
            <h5 className="text-white sm:text-base text-sm">Happy Customer</h5>
          </div>
          <div className="flex items-center flex-col">
            {" "}
            <h1 className="text-white sm:text-[60px] text-[40px]">
              {counterOn && (
                <CountUp start={0} end={5} duration={2} delay={0} />
              )}
              k+
            </h1>
            <h5 className="text-white">Service Complete</h5>
          </div>
          <div className="flex items-center flex-col">
            <h1 className="text-white sm:text-[60px] text-[40px]">
              {counterOn && (
                <CountUp start={0} end={99} duration={2} delay={0} />
              )}
              %
            </h1>
            <h5 className="text-white sm:text-base text-sm ">
              Satisfaction
            </h5>
          </div>
        </div>
      </div>
      <div className="px-[8%]">
        {" "}
        <div className="w-full bg-black h-[120px] mt-[-2%] blur-[10px]"></div>
      </div>
    </ScrollTrigger>
  );
}
