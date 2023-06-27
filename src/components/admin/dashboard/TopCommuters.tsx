import React from "react";
import Image from "next/image";

type CommuterProps = {};

const Commuter = (props: CommuterProps) => {
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
      <div>100 requests</div>
    </div>
  );
};

type TopCommutersProps = {};

const TopCommuters = (props: TopCommutersProps) => {
  return (
    <div className="border rounded-lg p-5 space-y-5 max-w-xl w-full bg-white shadow-lg">
      <div>Top Commuters</div>
      <div className="space-y-5">
        {Array.from({ length: 3 }).map((_, index) => (
          <Commuter key={index} />
        ))}
      </div>
    </div>
  );
};

export default TopCommuters;
