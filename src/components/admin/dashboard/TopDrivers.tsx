import React from "react";
import Image from "next/image";

type DriverProps = {};

const Driver = (props: DriverProps) => {
  return (
    <div className="flex justify-between items-center border rounded-lg p-3">
      <div className="flex items-center gap-3">
        <Image
          src="/images/admin/profile.svg"
          width={60}
          height={60}
          alt="profile image"
        />
        <div>tony stark</div>
      </div>
      <div>100 offers</div>
      <div>2000 ETB</div>
    </div>
  );
};

type TopDriversProps = {};

const TopDrivers = (props: TopDriversProps) => {
  return (
    <div className="border rounded-lg p-5 space-y-5 max-w-xl w-full lg:w-[40%] bg-white shadow-lg">
      <div>Top Drivers</div>
      <div className="space-y-5">
        {Array.from({ length: 3 }).map((_, index) => (
          <Driver key={index} />
        ))}
      </div>
    </div>
  );
};

export default TopDrivers;
