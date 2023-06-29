import React from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import { useRouter } from 'next/router';
import Link from 'next/link'; // Import the Link component
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

import { useGetVehicleByIdQuery } from '@/store/api';

const Vehicles = () => {
  const pageNumber = 1;
  const router = useRouter();
  const vehicleId = router.query.userId as string;

  const { data, isLoading, isError } = useGetVehicleByIdQuery(vehicleId);

  console.log(data);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div className="bg-white mx-10 lg:px-20 lg:mx-40 my-5 py-8 border border-gray-300 rounded-3xl">
      <div className="grid grid-cols-2 gap-4 min-w-[500px]">
        {/* First column */}
        <div className="w-1/4 mx-2 bg-white">
          <div className="bg-white p-4">
            <span>License Number</span>
          </div>
          <div className="bg-white p-4">
            <span>Experience</span>
          </div>
          <div className="bg-white p-4">
            <span>Address</span>
          </div>
          <div className="bg-white p-4">
            <span>Rate Number</span>
          </div>
        </div>

        {/* Second column */}
        <div className="w-3/4 mx-2 bg-white">
          <div className="bg-white p-4">
            <span>{data?.model}</span>
          </div>
          <div className="bg-white p-4">
            <span>{data?.plateNumber}</span>
          </div>
          <div className="bg-white p-4">
            <span>{data?.numberOfSeats}</span>
          </div>
          <div className="bg-white p-4">
          <a href={data?.libre} target="_blank" rel="noopener noreferrer">
              <button className="bg-blue-500 text-white mt-6 px-4 py-2 rounded">
                Open 
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vehicles;
