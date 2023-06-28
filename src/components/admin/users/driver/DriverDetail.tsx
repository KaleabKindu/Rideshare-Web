import { useState } from 'react';
import { Driver } from '@/types/driver';
import Image from 'next/image';

interface DriverDetailProps {
  driver: Driver;
}

const DriverDetail: React.FC<DriverDetailProps> = ({ driver }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape') {
      setIsZoomed(false);
    }
  };

  return (
    <div
      className={`bg-white mx-10 lg:px-20 lg:mx-40 my-5 py-8 border border-gray-300 rounded-3xl ${
        isZoomed ? 'overflow-hidden' : ''
      }`}
    >
      <h1 className="text-3xl font-semibold pl-5 mb-4">Driver Details</h1>
      <div className="overflow-x-auto px-10 scrollbar-none">
        <style>
          {`
            .scrollbar-none::-webkit-scrollbar {
              display: none;
            }

            .zoom-background {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background-color: rgba(0, 0, 0, 0.75);
              z-index: 50;
              display: flex;
              justify-content: center;
              align-items: center;
            }

            .zoom-background img {
              max-width: 90vw;
              max-height: 90vh;
              object-fit: contain;
              cursor: zoom-out;
            }
          `}
        </style>
        <div className="grid grid-cols-2 gap-4 min-w-[500px]">
          <span>License</span>
          <div className="relative">
            <Image
              src={driver.value.license}
              alt="Driver License"
              width={150}
              height={100}
              className="w-full h-auto cursor-pointer transition-all duration-300 hover:scale-105"
              onClick={toggleZoom}
              onKeyDown={handleKeyDown}
              tabIndex={0}
            />
            {isZoomed && (
              <div className="zoom-background" onClick={toggleZoom}>
                <Image
                  src={driver.value.license}
                  alt="Driver License"
                  width={500}
                  height={333}
                />
              </div>
            )}
          </div>
          <span>License Number</span>
          <span>{driver.value.licenseNumber}</span>
          <span>Experience</span>
          <span>{driver.value.experience}</span>
          <span>Address</span>
          <span>{driver.value.experience}</span>
          <span>Rate Number</span>
          <span>{driver.value.rate[2]}</span>
        </div>
      </div>
    </div>
  );
};

export default DriverDetail;