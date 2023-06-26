import React from "react";
import FilterList from "./FilterList";
import RideRequestItem from "./RideRequestItem";
import { useGetAllRideRequestsQuery } from "@/store/api/ride-request/ride-request";

const options = [
  { value: "onroute", label: "onRoute" },
  { value: "waiting", label: "Waiting" },
  { value: "completed", label: "Completed" },
  { value: "canceled", label: "Canceled" },
  { value: "", label: "None" },
];

const RideRequestList = () => {
  const {
    data: ride_requests = [],
    isLoading,
    error,
  } = useGetAllRideRequestsQuery();

  const handleSelect = (value: string) => {
    console.log("Selected value:", value);
  };

  const handleSearch = (query: string) => {
    console.log("Search query:", query);
  };
  return (
    <div>
      <div>
        <FilterList
          options={options}
          onSelect={handleSelect}
          onSearch={handleSearch}
        />
      </div>

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
                    <span className="text-center">Commuter</span>
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 px-3 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                  >
                    <div className="flex items-center">
                      <span>Origin</span>
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
                      <span>Current Fare(birr)</span>
                    </div>
                  </th>

                  <th
                    scope="col"
                    className="py-3.5 px-1.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
                  >
                    <div className="flex items-center gap-x-1">
                      <span>Number of Seats</span>
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
                {ride_requests.map((request) => (
                  <RideRequestItem
                    name={request.name}
                    origin={request.Origin}
                    destination={request.Destination}
                    currentFare={request.CurrentFare}
                    numberOfSeats={request.NumberOfSeats}
                    status={request.Status}
                    dateTime={request.CreatedDateTime}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RideRequestList;
