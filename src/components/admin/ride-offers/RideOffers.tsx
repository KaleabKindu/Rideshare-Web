import React from "react";
import offers from "@/data/admin/ride-offers.json";
import { getOfferStatus } from "./Status";

const final = () => {
  return (
    <div>
      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 ml-2 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      <span className="text-center">Driver Name</span>
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-3 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      <div className="flex items-center">
                        <span>Current Location</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-2 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      <div className="flex items-center">
                        <span>Destination</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-1.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      <div className="flex items-center gap-x-1">
                        <span>Vehicle Plate Number</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-1.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      <div className="flex items-center gap-x-1">
                        <span>Estimated Cost</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-1.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      <div className="flex items-center gap-x-1">
                        <span>Estimated Duration</span>
                      </div>
                    </th>

                    <th
                      scope="col"
                      className="py-3.5 px-1.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      <div className="flex items-center gap-x-1">
                        <span>Available Seats</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-2 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      <div className="flex items-center">
                        <span>Status</span>
                      </div>
                    </th>

                    <th
                      scope="col"
                      className="py-3.5 px-2 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      <div className="flex items-center">
                        <span>Date</span>
                      </div>
                    </th>

                    <th
                      scope="col"
                      className="py-3.5 px-2 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      <div className="flex items-center">
                        <span>Action</span>
                      </div>
                    </th>
                  </tr>
                </thead>

                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                  {offers.map((offer, index) => (
                    <tr key={index}>
                      <td className="px-3 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <h2 className="font-medium text-gray-800 dark:text-white">
                          {offer.Driver_Name}
                        </h2>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        {offer.Current_Location}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        {offer.Destination}
                      </td>
                      <td className="px-7 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        {offer.Vehicle_Plate_Number}
                      </td>
                      <td className="px-7 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        {offer.Estimated_Cost}
                      </td>
                      <td className="px-7 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        {offer.Estimated_Duration}
                      </td>
                      <td className="px-10 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        {offer.Available_Seats}
                      </td>
                      <td className="px-0 py-4 text-sm font-medium whitespace-nowrap">
                        <div>
                          <h2 className="text-sm font-normal">
                            {getOfferStatus(offer.Status)}
                          </h2>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        {offer.Date}
                      </td>

                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <button className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default final;
