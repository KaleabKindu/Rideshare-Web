import React, { useEffect, useState } from "react";
import DoughnutChart from "@/components/common/admin/charts/Doughnut";
import BarChart from "@/components/common/admin/charts/BarChart";
import IntervalFilter from "@/components/common/admin/Interval";
import CommutersStatusAnalytics from "./CommutersStatusAnalytics";
import { useGetCommutersStatQuery } from "@/store/api";
import { Interval } from "@/types/stat";
import { getShortMonthNames, getWeekNames } from "@/utils";
import NoBarStatistics from "@/components/common/admin/NoBarChartStatistics";
import { ClipLoader } from "react-spinners";
import UnknownError from "@/components/common/admin/UnknownError";

type CommutersAnalyticsProps = {};

const CommutersAnalytics = (props: CommutersAnalyticsProps) => {
  const [interval, setInterval] = useState("monthly");
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());

  const {
    data,
    isLoading,
    isError,
    refetch
  } = useGetCommutersStatQuery(
    { option: interval as Interval, year: year, month: month },
    {
      refetchOnMountOrArgChange: true,
    }
  );
  const noData = data?.yAxisData.reduce(
    (prev: number, cur: number) => prev + cur,
    0
  ) !== 0
  return (
    <div className="flex flex-wrap items-start gap-3">
      <div className="w-full space-y-3 lg:w-[60%]">
        <IntervalFilter
          interval={interval}
          setInterval={setInterval}
          setMonth={setMonth}
          setYear={setYear}
        />
        <div className="space-y-5 rounded-lg border p-8 bg-white shadow-lg max-w-4xl">
          <div className="text-2xl font-semibold pl-8">Commuter Analytics</div>
          {isLoading ? (
              <div className="flex w-full h-96">
                <ClipLoader
                  color="indigo"
                  className="mx-auto mt-24"
                  size={40}
                />
              </div>
            ) : isError ?
              <UnknownError refresh={refetch}/>
             :noData ? (
              <NoBarStatistics refresh={refetch} />
            ) :
            <BarChart
            borderRadius={10}
            showLegends={true}
            chartData={data.yAxisData}
            name="Commuters"
            color="rgba(53, 162, 235, 0.5)"
            labels={data.xAxisData}
          />}
        </div>
      </div>
      <CommutersStatusAnalytics />
    </div>
  );
};

export default CommutersAnalytics;
