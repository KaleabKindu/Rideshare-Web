import React, { useState } from "react";
import LineChart from "@/components/common/admin/charts/MultiLineChart";
import DoughnutChart from "@/components/common/admin/charts/Doughnut";
import BarChart from "@/components/common/admin/charts/BarChart";
import StatusAnalytics from "./StatusAnalytics";
import IntervalFilter from "@/components/common/admin/Interval";

type RideRequestsAnalyticsProps = {};

const RideRequestsAnalytics = (props: RideRequestsAnalyticsProps) => {
  const [interval, setInterval] = useState("monthly");
  const [year, setYear] = useState('2022')
  const [month, setMonth] = useState('Jan')
  return (
    <div className="space-y-16">
      <div className="flex flex-wrap items-start gap-3">
        <div className="w-full lg:w-[60%] space-y-3">
          <IntervalFilter interval={interval} setInterval={setInterval} setMonth={setMonth} setYear={setYear} />
          <div className="border rounded-lg p-5 space-y-5 bg-white shadow-lg max-w-4xl">
            <div className="text-2xl font-semibold pl-8">
              Ride Requests Analytics
            </div>
            <BarChart
              borderRadius={20}
              chartData={Array.from({ length: 12 }).map(
                () => Math.floor(Math.random() * 1000) + 1
              )}
              name="Ride Requests"
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
        
        <div className="rounded-lg border p-5 max-w-md bg-white shadow-lg">
          <div className="text-xl font-semibold">Ride Requests Status</div>
          <DoughnutChart
            showLegends={true}
            cutout="70%"
            chartData={[20, 10, 5]}
            labels={["Completed", "Failed", "onRoute"]}
            name="Ride Requests"
            colors={[
              "rgba(0, 255, 155, 1)",
              "rgba(255, 0, 0, 1)",
              "rgba(155, 255, 0, 1)",
            ]}
          />
        </div>
      </div>
      <StatusAnalytics name="Ride Offers"/>

      
    </div>
  );
};

export default RideRequestsAnalytics;
