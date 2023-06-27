import BarChart from "@/components/common/admin/charts/BarChart";

type TopVehiclesProps = {};

const TopVehicles = (props: TopVehiclesProps) => {
  return (
    <div className="w-full lg:w-[60%] p-5 rounded-lg border space-y-5 bg-white shadow-lg max-w-4xl">
      <div className="text-xl font-semibold w-fit">Top Vehicles By Offers</div>
      <BarChart
        axis="y"
        borderRadius={30}
        chartData={Array.from({ length: 7 }).map(
          () => Math.floor(Math.random() * 1000) + 1
        )}
        name="Offers"
        color="rgba(53, 162, 235, 0.5)"
        labels={[
          "BMW",
          "BMW Group",
          "Ford",
          "Nissan",
          "Honda",
          "Toyota",
          "Hyundai",
        ]}
      />
      <div className="text-center">Number of Offers</div>
    </div>
  );
};

export default TopVehicles;
