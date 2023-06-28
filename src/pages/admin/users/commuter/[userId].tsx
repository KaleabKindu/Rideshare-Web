import UserDetail from "@/components/admin/users/UserDetail";
import withAdminLayout from "@/components/common/admin/withAdminLayout";
import { useRouter } from "next/router";
import React from "react";
import CommuterFeedback from "@/components/admin/users/commuters/CommuterFeedback";
import feedback from "@/data/admin/commuter-feedback.json";

type UserProps = {};

const User = (props: UserProps) => {
  const router = useRouter();
  return (
    <div>
      <UserDetail id="" />
      <div>
        {feedback.map((data, index) => (
          <div key={index}>
            <CommuterFeedback
              date={data.date}
              title={data.title}
              detail={data.detail}
            />
          </div>
        ))}
        <div className="flex items-center justify-center mt-8">
          <button className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary rounded-lg hover:bg-primary focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-80">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default withAdminLayout(User);
