import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import bg from "../assets/10.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

import eight from "../assets/8.jpg";


export default function Test() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="h-screen"
      >
        <SwiperSlide className="w-full h-screen ">
          <div className="relative w-full h-[83vh]">
            <video
              className="object-cover absolute  left-0 w-full h-full z-10"
              autoPlay
              muted
              loop
            >
              <source
                src="https://res.cloudinary.com/dnhdh9rub/video/upload/v1720966463/6_gjwcgz.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>

            <div className="absolute top-0 left-0 w-full h-[83vh] flex flex-col items-center justify-center z-20">
              <h1 className="text-white sm:text-[65px] text-[40px] font-bold  text-center leading-[45px] sm:leading-[76px]">
                DOORSTEP REPAIR <br className="sm:flex hidden" /> SERVICES
              </h1>
              <p className="text-white mt-[0.5%]  text-center font-bold sm:text-lg md:text-2xl sm:w-[500px]">
                FOR MOBILES, APPLE WATCHES, IPADS & MACBOOKS
              </p>
              <div className="mt-[1%] flex  items-center gap-5">
                <button className="bg-black text-sm rounded-[8px] text-white sm:px-5 px-2 py-2.5">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="w-full h-screen ">
          <div className="relative w-full h-[83vh]">
            <img
              className="object-cover absolute  left-0 w-full h-full z-10"
              src={eight}
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80 z-15"></div>

            <div className="absolute top-0 left-0 w-full h-[83vh] flex flex-col items-center justify-center z-20">
              <h1 className="text-white sm:text-[65px] text-[40px] font-bold  text-center leading-[45px] sm:leading-[76px]">
                DOORSTEP CAR <br className="sm:flex hidden" /> REPAIR SERVICES
              </h1>
              <p className="text-white mt-[0.5%]  text-center font-bold sm:text-lg md:text-2xl sm:w-[500px]">
                FOR ALL MAKES AND MODELS, AT YOUR CONVENIENCE
              </p>
              <div className="mt-[1%] flex  items-center gap-5">
                <button className="bg-black text-sm rounded-[8px] text-white sm:px-5 px-2 py-2.5">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full h-screen ">
          <div className="relative w-full h-[83vh]">
            <video
              className="object-cover absolute  left-0 w-full h-full z-10"
              autoPlay
              muted
              loop
            >
              <source
                src="https://res.cloudinary.com/dnhdh9rub/video/upload/v1721081473/9_xgeg2d.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>

            <div className="absolute top-0 left-0 w-full h-[83vh] flex flex-col items-center justify-center z-20">
              <h1 className="text-white sm:text-[65px] text-[40px] font-bold  text-center leading-[45px] sm:leading-[76px]">
                DOORSTEP REPAIR <br className="sm:flex hidden" /> SERVICES
              </h1>
              <p className="text-white mt-[0.5%]  text-center font-bold sm:text-lg md:text-2xl sm:w-[500px]">
                FOR MOBILES, APPLE WATCHES, IPADS & MACBOOKS
              </p>
              <div className="mt-[1%] flex  items-center gap-5">
                <button className="bg-black text-sm rounded-[8px] text-white sm:px-5 px-2 py-2.5">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full h-screen ">
          <div className="relative w-full h-[83vh]">
            <img
              className="object-cover absolute  left-0 w-full h-full z-10"
              src={bg}
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80 z-15"></div>

            <div className="absolute top-0 left-0 w-full h-[83vh] flex flex-col items-center justify-center z-20">
              <h1 className="text-white sm:text-[65px] text-[40px] font-bold  text-center leading-[45px] sm:leading-[76px]">
                DOORSTEP CAR <br className="sm:flex hidden" /> REPAIR SERVICES
              </h1>
              <p className="text-white mt-[0.5%]  text-center font-bold sm:text-lg md:text-2xl sm:w-[500px]">
                FOR ALL MAKES AND MODELS, AT YOUR CONVENIENCE
              </p>
              <div className="mt-[1%] flex  items-center gap-5">
                <button className="bg-black text-sm rounded-[8px] text-white sm:px-5 px-2 py-2.5">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
