import React from "react";

export default function FooterBottom() {
  return (
    <div className="bg-[#f4f4f4]">
      <div className="max-w-[1440px] mx-auto px-[5%]">
        <div className="flex sm:flex-row flex-col justify-between w-full items-start sm:gap-0 gap-5 sm:items-center py-12 border-t-[1px] border-b-[1px] border-gray-300 ">
          <h6 className="sm:text-sm text-xs silka">
            Elpizo Energy Solutions AB <br /> Registration no. 556986-5461
          </h6>
          <h6 className="sm:text-sm text-xs silka">
            © 2024 Elpizo Energy Solutions AB – All Rights Reserved <br />{" "}
            Privacy & cookie policy
          </h6>
        </div>
        <div className="pt-20"></div>
      </div>
    </div>
  );
}
