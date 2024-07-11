import React from "react";

export default function ExploreCard({ image, title, description, buttonText }) {
  return (
    <div className="px-[5%] my-[10%] ">
      <div className="w-full relative">
        <img
          className="rounded-[40px] border-[3px] border-[#18181A] w-full h-full object-cover"
          src={image}
          alt="compliance"
        />
        <div className="absolute inset-0 flex flex-col items-start justify-center px-[4%]">
          <h1 className="text-white text-3xl font-bold text-[60px] leading-[70px] w-[600px]">
            {title}
          </h1>
          <p className="w-[500px] text-white/60 my-[2%]">{description}</p>
          <button className="border border-white text-sm rounded-[8px] text-white px-5 py-2.5">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
