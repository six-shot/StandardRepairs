import React, { useEffect, useState } from 'react'
import { FaUsers } from 'react-icons/fa';
import { useGetPhonesQuery } from '../../../../../store/reducers/phonerepair';
import Loader from '../../../components/Loader';

export default function OrderTab() {
      const {
        data: orders,
        isLoading,
        isSuccess,
        isError,
        error,
      } = useGetPhonesQuery();
      const [allOrders, setAllOrders] = useState([]);

      useEffect(() => {
        const fetchData = async () => {
          try {
            if (isSuccess) {
              setAllOrders(orders);
            }
          } catch (err) {
            console.error("Error fetching party data:", err);
          }
        };

        fetchData();
      }, [isSuccess, orders]);

      if (isLoading) {
        return (
          <div>
            {" "}
            <Loader />
          </div>
        );
      }

      if (isError) {
        return (
          <div>
            {" "}
            <Loader />
          </div>
        );
      }
 const totalOrders = allOrders.filter(
   (item) => typeof item === "object"
 ).length;

  return (
    <div>
      {" "}
      <div className="grid sm:grid-cols-3 grid-cols-1  gap-5 items-center sm:pr-[8%]">
        <div className="col-span-1 h-[112px]   rounded-[10px] flex justify-between flex-col p-4">
          <div className="flex items-center gap-[10px]">
            <div className="w-[34px] h-[34px] bg-[#000000] flex justify-center items-center text-white rounded-[6px]">
              <FaUsers className="w-[18px]" />
            </div>
            <h4 className="text-[15px] font-medium">No of Orders</h4>
          </div>
          <div className="flex items-end justify-end">
            <h4 className="text-[30px] font-semibold">{totalOrders}</h4>
          </div>
        </div>
        <div className="col-span-1 h-[112px]  rounded-[10px] bg-[#000000] flex justify-between flex-col p-4">
          <div className="flex items-center gap-[10px]">
            <div className="w-[34px] h-[34px] border border-white flex justify-center items-center text-white rounded-[6px]">
              <FaUsers className="w-[18px]" />
            </div>
            <h4 className="text-[15px] font-medium text-white">No of user</h4>
          </div>
          <div className="flex items-end justify-end">
            <h4 className="text-[30px] font-semibold text-white">
              {totalOrders}
            </h4>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}
