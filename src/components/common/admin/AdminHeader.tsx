import React from "react";
import Image from "next/image";

type Props = {};

const AdminHeader = (props: Props) => {
  return (
    <div test-id="navbar" className="fixed w-full bg-white z-30 shadow-sm">
      <div className="flex mx-auto p-2">
        <Image
          className="px-5 py-3"
          src="/images/logo.svg"
          width={200}
          height={200}
          alt="RideShare Logo"
        />
        <div className="hidden md:flex gap-5 ml-auto p-2">
          <Image
          className="rounded-full w-16 h-16"
            src="/images/admin/feven.jpg"
            width={50}
            height={45}
            alt="profile image"
          />
          <div className="hidden md:block ">
            <div className="font-semibold text-2xl">Feven Belay</div>
            <div>Admin</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminHeader;
