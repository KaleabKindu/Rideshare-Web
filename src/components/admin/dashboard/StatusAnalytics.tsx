import React, { useState } from "react";
import LineChart from "@/components/common/admin/charts/MultiLineChart";
import IntervalFilter from "@/components/common/admin/Interval";

type StatusAnalyticsProps = {
  name: string;
};

const StatusAnalytics = ({ name }: StatusAnalyticsProps) => {
  const [interval, setInterval] = useState("monthly");
  const [year, setYear] = useState("2022");
  const [month, setMonth] = useState("Jan");
  return (
    <div className="w-full lg:w-[70%] space-y-3">
      <IntervalFilter
        interval={interval}
        setInterval={setInterval}
        setMonth={setMonth}
        setYear={setYear}
      />
      <div className="border rounded-lg p-5 space-y-5 bg-white shadow-lg max-w-4xl">
        <div className="text-xl font-semibold">{name} Status Overtime</div>
        <LineChart
          borderRadius={20}
          chartData={[
            {
              label: "Completed",
              data: Array.from({ length: 7 }).map(
                () => Math.floor(Math.random() * 1000) + 1
              ),
              borderColor: "rgba(53, 162, 235, 0.5)",
              lineTension: 0.3,
            },
            {
              label: "Failed",
              data: Array.from({ length: 7 }).map(
                () => Math.floor(Math.random() * 1000) + 1
              ),
              borderColor: "rgba(255, 99, 132, 0.5)",
              lineTension: 0.3,
            },
          ]}
          labels={[
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
          ]}
        />
      </div>
    </div>
  );
};

export default StatusAnalytics;
