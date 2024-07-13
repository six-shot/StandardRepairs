import React from "react";
import Marquee from "react-fast-marquee";
import iphone from "../../assets/iphone.png";
import asus from "../../assets/asus.png";
import huawei from "../../assets/huawei.png";
import lenovo from "../../assets/lg.jpg";
import lg from "../../assets/lg.jpg";
import oppo from "../../assets/oppo.png";
import nokia from "../../assets/nokia.jpg";
import oneplus from "../../assets/oneplus.jpg";
import samsung from "../../assets/samsung.png";
import techno from "../../assets/techno.png";
import Xiaomi from "../../assets/Xiaomi.png";
export default function Network() {
  return (
    <div className="text-center text-white px-[5%]">
      <div className="flex justify-center flex-col items-center">
        <h2 className="font-black sm:text-[40px] text-[30px] sm:px-[20%] leading-[30px] sm:leading-[50px]">
          Brands We Repair at Your Doorstep
        </h2>
        <p className="sm:w-[600px] sm:text-base text-sm mt-[2%]">
          Elpizo brings top-notch repair services to your doorstep. We
          specialize in repairing a variety of brands, ensuring convenience and
          expertise meet at your home. Your trusted tech solution awaits!
        </p>
      </div>
      <div className="px-[5%] mt-[5%]">
        <div className="">
          <Marquee className="mq" direction="right" speed={60}>
            <div className="image_wrapper">
              <img src={iphone} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={samsung} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={techno} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={asus} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={huawei} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={lg} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={nokia} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={oppo} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={oneplus} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={lenovo} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={Xiaomi} alt="" />
            </div>
          </Marquee>
        </div>
        <div>
          <Marquee className="mq" direction="left" speed={60}>
            <div className="image_wrapper">
              <img src={iphone} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={samsung} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={techno} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={asus} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={huawei} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={lg} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={nokia} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={oppo} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={oneplus} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={lenovo} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={Xiaomi} alt="" />
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
}
