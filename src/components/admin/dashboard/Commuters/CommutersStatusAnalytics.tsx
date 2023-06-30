import NoDoughnutChartStatistics from "@/components/common/admin/NoDoughnutChartStatistics";
import UnknownError from "@/components/common/admin/UnknownError";
import DoughnutChart from "@/components/common/admin/charts/Doughnut";
import { useGetCommutersStatusStatQuery, useGetDriverStatusStatQuery } from "@/store/api";
import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

type Props = {};

const CommuterStatusAnalytics = (props: Props) => {
  const {
    data,
    isLoading,
    isError,
    refetch
  } = useGetCommutersStatusStatQuery();

  const noData = data?.reduce(
    (prev: number, cur: number) => prev + cur,
    0
  ) === 0
  return (
    <div className="rounded-lg space-y-5 border p-5 max-w-sm w-full bg-white shadow-lg">
        <div className="text-xl font-semibold">Commuters Status</div>
      {isLoading ? 
      <div className="flex w-full h-72">
      <ClipLoader
        color="indigo"
        className="mx-auto mt-24"
        size={40}
      />
    </div> :
    isError ? 
    <UnknownError refresh={refetch}/>:
      noData ?
        <NoDoughnutChartStatistics refresh={refetch} />
      :(

        <DoughnutChart
          showLegends={true}
          legendsPosition="bottom"
          cutout="70%"
          chartData={[20, 10]}
          labels={["Active", "Idle"]}
          name="Commuters"
          colors={["rgba(0, 255, 0, 1)", "rgba(255, 0, 0, 1)"]}
        />
      
      )}
      </div>
  );
};

export default CommuterStatusAnalytics;
