import React from "react";
import { footerLinks } from "../../../../utils/data";


export default function Footer() {
  return (
    <div>
      <div className="bg-[#f5f0f0] px-[5%] mt-[5%]">
        <div className="2xl:px-0 py-20 grid grid-cols-1 sm:grid-cols-7">
          <div className="col-span-3 sm:pr-32 sm:order-first order-last">
      
           
            <div className="mt-10">
              <h5 className="silka font-medium text-[24px] mb-5">
                Join our newsletter
              </h5>
            </div>
            <div className="w-full h-[48px] border bg-[#f5f5f5] border-black rounded-[50px]">
              <input
                type="text"
                className="w-full h-full bg-transparent rounded-[50px] pl-12 placeholder:text-[14px] silka placeholder:text-black"
                placeholder="Enter your email"
              />
            </div>
            <button className=" mt-10 text-[13px] py-3.5 px-10 silka font-medium text-white bg-[#000] rounded-[50px]">
              Submit
            </button>
            <p className="silka text-[10px] mt-4">
              By clicking Submit, you consent to Polarium storing and processing
              your personal information to provide you the content requested.
              Read our privacy policy <span className="underline">here</span>.
            </p>
          </div>

          <div className="col-span-4">
            <div className="w-full flex sm:flex-row flex-col gap-2 sm:flex-wrap md:mt-0 mt-10">
              {footerLinks.map((item, index) => (
                <div
                  className="flex flex-col ss:my-0 my-4 min-w-[150px]"
                  key={index}
                >
                  <h4 className="silka font-semibold text-[16px] leading-[27px] mb-3  sm:border-0 border-b-[1px] py-4 border-black">
                    {item.title}
                  </h4>
                  <ul className="mt-4">
                    {item.links.map((item, index) => {
                      return (
                        <li
                          className="silka text-[14px] mb-3 sm:w-[180px] leading-[22px]"
                          key={index}
                        >
                          {item.name}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
