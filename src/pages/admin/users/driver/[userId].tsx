import withAdminLayout from "@/components/common/admin/withAdminLayout";
import { useRouter } from "next/router";
import React from "react";
import Vehicles from "@/components/admin/users/drivers/Vehicles";

type UserProps = {};

const User = (props: UserProps) => {
  const router = useRouter();
  return(
    <div>
       <div>User {router.query.userId}</div>
        <Vehicles/>
    </div>
  )
};

export default withAdminLayout(User);
