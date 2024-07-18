import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useGetPhoneQuery } from "../../../../../store/reducers/phonerepair";
import back from "../../../assets/back.png";
export default function Order() {
  const { id } = useParams();
  const { data: order, isLoading, isError, error } = useGetPhoneQuery(id);

  const [singleOrder, setSingleOrder] = useState(null);
  let [isOpen, setIsOpen] = useState(false);
  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }
  useEffect(() => {
    if (order) {
      setSingleOrder(order);
    }
  }, [order]);

  if (isLoading) {
    return <div>loading....</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <div className="px-[2%]">
        <div className="w-full">
          {" "}
          <Link to="/orders">
            <div className="flex gap-1 items-center my-[3%]">
              <img src={back} alt="Back" />
              <h5 className="text-xs font-medium text-black">Back</h5>
            </div>
          </Link>
        </div>
        {singleOrder ? (
          <>
            <div className="grid grid-cols-2 gap-4 py-[2%]">
              <div className="col-span-1">
                <div className="flex flex-col">
                  <h3 className="uppercase font-bold text-[30px]">
                    {singleOrder.name}
                  </h3>
                  <h4 className="text-lg">
                    Phone Number: {singleOrder.phoneNumber}
                  </h4>
                  <p className="text-md">City: {singleOrder.city}</p>
                  <p className="text-md">Brand: {singleOrder.brand}</p>
                  <p className="text-md">Model: {singleOrder.model}</p>
                </div>
              </div>
              <div className="col-span-1 flex flex-col justify-between">
                {singleOrder.photoImage ? (
                  <img
                    className="w-full h-auto object-cover mt-4"
                    src={singleOrder.photoImage}
                    alt={`Image of ${singleOrder.name}`}
                  />
                ) : (
                  <div>No image available</div>
                )}
              </div>
            </div>
            <p className="text-md">Fault: {singleOrder.fault}</p>
          </>
        ) : (
          <div>Loading order details...</div>
        )}
      </div>
    </div>
  );
}
