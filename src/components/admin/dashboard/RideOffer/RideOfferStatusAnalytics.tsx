import NoDoughnutChartStatistics from "@/components/common/admin/NoDoughnutChartStatistics";
import UnknownError from "@/components/common/admin/UnknownError";
import DoughnutChart from "@/components/common/admin/charts/Doughnut";
import { useGetRiderOffersStatusStatQuery } from "@/store/api";
import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

type Props = {};

const RideOffersStatusAnalytics = (props: Props) => {
  const { data, isLoading, isError, refetch } =
    useGetRiderOffersStatusStatQuery();
  const [chartData, setChartData] = useState<number[]>([]);
  const [label, setLabel] = useState<string[]>([]);

  const [noData, setNoData] = useState(true);
  useEffect(() => {
    if (data) {
      setChartData(data.count);
      setLabel(data.statuses);
    }
  }, [data]);

  useEffect(() => {
    if (data) {
      setNoData(
        data.count.reduce((prev: number, cur: number) => prev + cur, 0) === 0
      );
    }
  }, [data]);

  return (
    <div className="rounded-lg border p-5 max-w-sm w-full bg-white shadow-lg">
      <div className="text-xl font-semibold">Ride Offers Status</div>

      {isLoading ? (
        <div className="flex w-full h-72">
          <ClipLoader color="indigo" className="mx-auto mt-24" size={40} />
        </div>
      ) : isError ? (
        <UnknownError refresh={refetch} />
      ) : noData ? (
        <NoDoughnutChartStatistics refresh={refetch} />
      ) : (
        <DoughnutChart
          showLegends={true}
          cutout="70%"
          chartData={chartData}
          labels={label}
          name="Ride Offers"
          colors={[
            "rgba(255, 200, 0, 1)",
            "rgba(0, 0, 255, 1)",
            "rgba(0, 255, 0, 1)",
            "rgba(255, 0, 0, 1)",
          ]}
        />
      )}
    </div>
  );
};

export default RideOffersStatusAnalytics;
