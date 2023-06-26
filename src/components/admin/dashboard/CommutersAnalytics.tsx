import React, { useState } from "react";
import DoughnutChart from "@/components/common/admin/charts/Doughnut";
import BarChart from "@/components/common/admin/charts/BarChart";
import IntervalFilter from "@/components/common/admin/Interval";

type CommutersAnalyticsProps = {};

const CommutersAnalytics = (props: CommutersAnalyticsProps) => {
  const [interval, setInterval] = useState("monthly");
  const [year, setYear] = useState('2022')
  const [month, setMonth] = useState('Jan')
  return (
    <div className="flex flex-wrap items-start gap-3">
      <div className="w-full space-y-3 lg:w-[60%]">
        <IntervalFilter interval={interval} setInterval={setInterval} setMonth={setMonth} setYear={setYear} />
        <div className="space-y-5 rounded-lg border p-8 bg-white shadow-lg max-w-4xl">
          <div className="text-2xl font-semibold pl-8">Commuter Analytics</div>
          <BarChart
            borderRadius={10}
            showLegends={true}
            chartData={Array.from({ length: 12 }).map(
              () => Math.floor(Math.random() * 1000) + 1
            )}
            name="Commuters"
            color="rgba(53, 162, 235, 0.5)"
            labels={[
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sept",
              "Oct",
              "Nov",
              "Dec",
            ]}
          />
        </div>
      </div>
      
      <div className="rounded-lg space-y-5 border p-5 max-w-md bg-white shadow-lg">
        <div className="text-xl font-semibold">Commuters Status</div>
        <DoughnutChart
          showLegends={true}
          legendsPosition="bottom"
          cutout="70%"
          chartData={[20, 10]}
          labels={["Active", "Idle"]}
          name="Commuters"
          colors={["rgba(0, 255, 0, 1)", "rgba(255, 0, 0, 1)"]}
        />
      </div>
    </div>
  );
};

export default CommutersAnalytics;
