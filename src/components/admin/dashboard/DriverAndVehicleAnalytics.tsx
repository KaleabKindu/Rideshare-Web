import React, { useEffect, useState } from "react";
import BarChart from "@/components/common/admin/charts/BarChart";
import DoughnutChart from "@/components/common/admin/charts/Doughnut";
import MultiBarChart from "@/components/common/admin/charts/MultiBarChart";
import TopDrivers from "./TopDrivers";
import IntervalFilter from "@/components/common/admin/Interval";
import TopVehicles from "./TopVehicles";

type DriverAndVehicleAnalyticsProps = {};

const DriverAndVehicleAnalytics = (props: DriverAndVehicleAnalyticsProps) => {
  const [interval, setInterval] = useState("monthly");
  const [year, setYear] = useState('2022')
  const [month, setMonth] = useState('Jan')
  const [inner, setInner] = useState(false)
  useEffect(()=>{
    if(inner){
      const toRef = setTimeout(() => {
        setInner(false)
        clearTimeout(toRef)
      }, 2000)
    }
   
  })
  return (
    <div className="space-y-16">
      <div className="flex flex-wrap lg:flex-nowrap items-start gap-5">
        <div className="w-full lg:w-60% space-y-3">
          <IntervalFilter interval={interval} setInterval={setInterval} setMonth={setMonth} setYear={setYear} />
          <div className="space-y-5 rounded-lg border p-8 bg-white shadow-lg max-w-4xl">
            <div className="text-2xl font-semibold pl-8">
              Drivers and Vehicles Analytics
            </div>
            <MultiBarChart
              borderRadius={5}
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
              chartData={[
                {
                  label: "Drivers",
                  data: Array.from({ length: 12 }).map(
                    () => Math.floor(Math.random() * 1000) + 1
                  ),
                  backgroundColor: "rgba(53, 162, 235, 0.5)",
                },
                {
                  label: "Vehicles",
                  data: Array.from({ length: 12 }).map(
                    () => Math.floor(Math.random() * 1000) + 1
                  ),
                  backgroundColor: "rgba(255, 99, 132, 0.5)",
                },
              ]}
            />
          </div>
        </div>
       
        <div className="max-w-md lg:w-[40%] rounded-lg border p-5 space-y-5 bg-white shadow-lg">
          <div className="text-xl font-semibold w-fit">
            Current Drivers Status
          </div>
          <div className="flex gap-3">
            <div className={`relative ${inner && 'z-10'}`} onMouseEnter={() => setInner(true)}>
              <DoughnutChart
                showLegends={false}
                cutout="70%"
                chartData={[50, 20, 10]}
                labels={["Approved", "Blocked", "Pending"]}
                name="Drivers"
                colors={[
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(154, 62, 235, 1)",
                ]}
              />

              <div className={`absolute bottom-[20%] right-[20%] w-[60%] mx-auto ${inner && '-z-10'}`}  onMouseOut={() => setInner(true)}>
                <DoughnutChart
                  showLegends={false}
                  cutout="70%"
                  chartData={[20, 10]}
                  labels={["Active", "Idle"]}
                  name="Drivers"
                  colors={["rgba(0, 255, 0, 1)", "rgba(255, 0, 0, 1)"]}
                />
              </div>
            </div>
            <div className="flex flex-col justify-center gap-2">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded-full bg-[#00ff00]" />
                <div className="text-sm">Active</div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded-full bg-[#ff0000]" />
                <div className="text-sm">Idle</div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded-full bg-[#ff6384]" />
                <div className="text-sm">Approved</div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded-full bg-[#36a2eb]" />
                <div className="text-sm">Blocked</div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded-full bg-[#9a3eeb]" />
                <div className="text-sm">Pending</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-start flex-wrap lg:flex-nowrap gap-5">
        <TopVehicles />
        <TopDrivers />
      </div>
      
    </div>
  );
};

export default DriverAndVehicleAnalytics;
