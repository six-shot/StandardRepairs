import React from "react";
import Marquee from "react-fast-marquee";
import eth from "../../assets/eth.webp";
import bsc from "../../assets/bsc.webp";
import arbitrum from "../../assets/arbitrum_2.webp";
import avalache from "../../assets/avalache.webp";
import optimism from "../../assets/optimism.webp";
import polygon from "../../assets/polygon.webp";
export default function Network() {
  return (
    <div className="text-center text-white">
      <div className="flex justify-center flex-col items-center">
        <h2 className="font-black sm:text-[40px] text-[30px] px-[20%] leading-[50px]">
          Brands We Repair at Your Doorstep
        </h2>
        <p className="w-[600px] mt-[2%]">
          Buzzmeeh brings top-notch repair services to your doorstep. We
          specialize in repairing a variety of brands, ensuring convenience and
          expertise meet at your home. Your trusted tech solution awaits!
        </p>
      </div>
      <div className="px-[5%] mt-[5%]">
        <div className="">
          <Marquee className="mq" direction="right" speed={60}>
            <div className="w-[60%]">
              <img src={eth} alt="" />
              <h5>Ethereum</h5>
            </div>
            <div className="w-[60%]">
              <img src={bsc} alt="" />
              <h5>Bsc</h5>
            </div>
            <div className="w-[50%]">
              <img src={arbitrum} alt="" />
              <h5>Arbitrum</h5>
            </div>
            <div className="w-[40%]">
              <img src={avalache} alt="" />
              <h5>Avalache</h5>
            </div>
            <div className="w-[60%]">
              <img src={optimism} alt="" />
              <h5>Optimism</h5>
            </div>
            <div className="w-[50%]">
              <img src={polygon} alt="" />
              <h5>Ploygon</h5>
            </div>
          </Marquee>
        </div>
        <div>
          <Marquee className="mq" direction="left" speed={60}>
            <div className="w-[60%]">
              <img src={eth} alt="" />
              <h5>Ethereum</h5>
            </div>
            <div className="w-[60%]">
              <img src={bsc} alt="" />
              <h5>Bsc</h5>
            </div>
            <div className="w-[50%]">
              <img src={arbitrum} alt="" />
              <h5>Arbitrum</h5>
            </div>
            <div className="w-[40%]">
              <img src={avalache} alt="" />
              <h5>Avalache</h5>
            </div>
            <div className="w-[60%]">
              <img src={optimism} alt="" />
              <h5>Optimism</h5>
            </div>
            <div className="w-[50%]">
              <img src={polygon} alt="" />
              <h5>Ploygon</h5>
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
}
