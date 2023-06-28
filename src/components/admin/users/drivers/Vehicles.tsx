import React from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

import { useGetVehicleByIdQuery } from '@/store/api';
import { useRouter } from "next/router";

const Vehicles = () => {
    const pageNumber = 1

    const router = useRouter();
    const id = router.query.id

    const {  data , isLoading , isError } = useGetVehicleByIdQuery(1)

    console.log(data)

    if (isLoading){
        return <div> Loading ...</div>
    }

    if (isError){
        return <div> Error </div>
    }

  return (

    <div className="flex justify-center max-w-lg border rounded-lg shadow-md mx-auto p-8 h-screen">
      {/* Left column */}
      <div className="w-1/2 mx-2 bg-white">
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
      <div className="w-1/2 mx-2 bg-white ">
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
            <Document className="custom-document"  file={data?.libre}>
              <Page pageNumber={pageNumber} width={200} height={300}   />
            </Document>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Vehicles;
