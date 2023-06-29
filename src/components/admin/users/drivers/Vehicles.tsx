import React from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import { useRouter } from 'next/router'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

import { useGetVehicleByIdQuery } from '@/store/api';

const Vehicles = () => {
    const pageNumber = 1;
    const router = useRouter();
    const vehicleId = router.query.userId as string;
    
    const {  data , isLoading , isError } = useGetVehicleByIdQuery(Number(vehicleId))

    console.log(data)

    if (isLoading){
        return <div> Loading ...</div>
    }

    if (isError){
        return <div> Error </div>
    }

  return (

    <div className="flex justify-center h-screen">
      {/* Left column */}
      <div className="w-1/6 mx-2 bg-white">
        <div className="bg-white p-4">
          <p>Model</p>
        </div>
        <div className="bg-white p-4">
          <p>Phone Number</p>
        </div>
        <div className="bg-white p-4">
          <p>Number of Seats</p>
        </div>
        <div className="bg-white p-4">
          <p>Libre</p>
        </div>
      </div>

      {/* Right column */}
      <div className="w-1/4 mx-2 bg-white">
        <div className="bg-white p-4">
          <p className="bg-gray-100 px-6 flex justify-center">{data?.model}</p>
        </div>
        <div className="bg-white p-4">
          <p className="bg-gray-100 px-6 flex justify-center">{data?.plateNumber}</p>
        </div>
        <div className="bg-white p-4">
          <p className="bg-gray-100 px-6 flex justify-center">{data?.numberOfSeats}</p>
        </div>
        <div className="bg-white p-4">
          <a href={data?.libre} target="_blank" rel="noopener noreferrer">
            <Document className="custom-document" file={data?.libre}>
              <Page pageNumber={pageNumber} width={250}  />
            </Document>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Vehicles;
