import React from "react";
import Sidebar from "../sidebar";
import Header from "../header";



export default function DashboardLayout(props) {
  return (
    <div className="grid sm:grid-cols-12 grid-cols-1 w-full ">
      <Sidebar />

      <div className="col-span-10 bg-[#ffffff]">
        <Header />
        {props.children}
     
      </div>
    </div>
  );
}
