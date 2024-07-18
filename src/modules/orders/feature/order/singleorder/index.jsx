import React from "react";


import Order from "../order";
import DashboardLayout from "../../../components/layouts/DashboardLayout";

export default function SingleOrder() {
  return (
    <div className="bg-gradient-to-r from-black from-50% to-[#FFFFFF] to-50% overflow-y-scroll">
      <div className="max-w-[1440px] mx-auto font-poppins ">
        <DashboardLayout>
          <Order/>
        </DashboardLayout>
      </div>
    </div>
  );
}
