import withAdminLayout from "@/components/common/admin/withAdminLayout";
import Head from "next/head";
import React from "react";

type RideRequestsProps = {};

const RideRequests = (props: RideRequestsProps) => {
  return (
    <div>
      <Head>
        <title>Ride Requests</title>
      </Head>
      <div>Ride Requests</div>
    </div>
  );
};

export default withAdminLayout(RideRequests);
