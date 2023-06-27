import withAdminLayout from "@/components/common/admin/withAdminLayout";
import Head from "next/head";
import React from "react";

type RideOffersProps = {};

const RideOffers = (props: RideOffersProps) => {
  return (
    <div>
      <Head>
        <title>Ride Offers</title>
      </Head>
      <div>Ride Offers</div>
    </div>
  );
};

export default withAdminLayout(RideOffers);
