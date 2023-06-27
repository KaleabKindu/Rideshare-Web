import Head from "next/head";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { RiRadioButtonLine } from "react-icons/ri";

const statusColors = {
  pending: {
    icon: "text-yellow-500",
    color: "text-yellow-500 bg-yellow-500",
  },
  approved: {
    icon: "text-green-500",
    color: "text-green-500 bg-green-500",
  },
  blocked: {
    icon: "text-red-500",
    color: "text-red-500 bg-red-500",
  },
};
const roleColors = {
  commuter: {
    color: "bg-purple-500",
  },
  driver: {
    color: "bg-rose-500",
  },
  admin: {
    color: "bg-blue-500",
  },
};
type UserDetailProps = {
  id: string;
};

const UserDetail = ({ id }: UserDetailProps) => {
  const role = "driver" as "commuter" | "driver" | "admin";
  const status = "approved" as "approved" | "pending" | "blocked";
  return (
    <div className="flex flex-wrap gap-10 justify-evenly items-center p-5">
      <Head>
        <title>Anthony Stark</title>
      </Head>
      <div className="flex flex-col items-center gap-5">
        <img className="w-72 h-72" src="/images/admin/profile.svg" alt="" />
        <div className="text-4xl font-bold text-center">Anthony Stark</div>
        <div className="flex gap-4 items-center">
          <div
            className={`text-2xl text-white font-semibold ${roleColors[role].color}  rounded-full px-5 py-1`}
          >
            {role.charAt(0).toUpperCase() + role.slice(1)}
          </div>
        </div>
      </div>
      <div className="w-96 bg-gray-100 space-y-3 rounded-2xl p-8">
        <div className="text-xl font-semibold">Account Detail</div>
        <div className="flex gap-4 items-center">
          <FaEnvelope size={20} className="text-primary" />
          <div>stark@gmail.com</div>
        </div>
        <div className="flex gap-4 items-center">
          <FaPhoneAlt size={20} className="text-primary" />
          <div>+251956142578</div>
        </div>
        {role === "driver" && (
          <div className="flex gap-4 items-center">
            <RiRadioButtonLine
              size={20}
              className={`${statusColors[status].icon}`}
            />
            <div
              className={`${statusColors[status].color} font-bold bg-opacity-20 rounded-full px-5 py-1`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDetail;
