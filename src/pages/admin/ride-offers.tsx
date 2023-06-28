import withAdminLayout from "@/components/common/admin/withAdminLayout";
import Head from "next/head";
import React from "react";
<<<<<<< HEAD
=======
import Final from "@/components/admin/ride-offers/RideOffers";
import FilterOffers from "@/components/admin/ride-offers/FilterOffers";
>>>>>>> 3fb56d9 (implement ride offers list page)

type RideOffersProps = {};

const RideOffers = (props: RideOffersProps) => {
  return (
    <div>
      <Head>
        <title>Ride Offers</title>
      </Head>
      <FilterOffers
        options={[]}
        onSelect={function (value: string): void {
          throw new Error("Function not implemented.");
        }}
        onSearch={function (query: string): void {
          throw new Error("Function not implemented.");
        }}
      />
      <Final />
    </div>
  );
};

export default withAdminLayout(RideOffers);
