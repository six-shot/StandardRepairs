import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useGetPhonesQuery } from "../../../../../store/reducers/phonerepair";

export default function AllOrders() {
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
     loading....
      </div>
    );
  }

  if (isError) {
    return <div>Error:{error.message}</div>;
  }

  return (
    <div>
      {allOrders.length > 0 && (
        <div className="overflow-x-auto mt-[2%] pb-[2%]">
          <table id="users" className="mt-[1%] sm:w-full w-[700px]">
            <thead>
              <tr>
                <th className="text-left text-xs font-bold">Name</th>
                <th className="text-left text-xs font-bold">Phone Number</th>
                <th className="text-left text-xs font-bold">Brand</th>
                <th className="text-left text-xs font-bold">Model</th>
                <th className="text-left text-xs font-bold">City</th>
              </tr>
            </thead>
            <tbody>
              {allOrders.map((allorder, index) => (
                <tr key={index}>
                  <td className="text-left text-xs pt-5">
                    {" "}
                    <Link
                      to={`/order/${allorder._id}`}
                      className="text-blue-500 hover:underline"
                    >
                      {allorder.name}
                    </Link>
                  </td>
                  <td className="text-left text-xs pt-5">
                    {allorder.phoneNumber}
                  </td>
                  <td className="text-left text-xs pt-5">{allorder.brand}</td>
                  <td className="text-left text-xs pt-5">{allorder.model}</td>
                  <td className="text-left text-xs pt-5">{allorder.city}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
