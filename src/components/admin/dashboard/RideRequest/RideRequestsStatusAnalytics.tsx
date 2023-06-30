import NoDoughnutChartStatistics from '@/components/common/admin/NoDoughnutChartStatistics';
import UnknownError from '@/components/common/admin/UnknownError';
import DoughnutChart from '@/components/common/admin/charts/Doughnut'
import { useGetRideRequestsStatusCountQuery, useGetRideRequestsStatusStatQuery } from '@/store/api';
import { ClipLoader } from 'react-spinners';

type Props = {}

const RideRequestsStatusAnalytics = (props: Props) => {

  const { data, isLoading, isError, refetch } =
  useGetRideRequestsStatusCountQuery();
const chartData = data?.count || []
const label = data?.statuses || []
const noData = data?.count.reduce((prev, cur) => prev + cur, 0) === 0


  return (
      <div className="rounded-lg border p-5 max-w-sm w-full bg-white shadow-lg">
        <div className="text-xl font-semibold">Ride Requests Status</div>
          {isLoading ? 
          <div className="flex w-full h-72">
          <ClipLoader
            color="indigo"
            className="mx-auto mt-24"
            size={40}
          />
        </div> :
        isError ? 
        <UnknownError refresh={refetch}/>
       : noData ? 
        <NoDoughnutChartStatistics refresh={refetch} />:
          <DoughnutChart
          showLegends={true}
          cutout="70%"
          chartData={chartData}
          labels={label}
          name="Ride Requests"
          colors={[
            "rgba(0, 255, 155, 1)",
            "rgba(255, 0, 0, 1)",
            "rgba(155, 255, 0, 1)",
          ]}
        />}
      </div>
  )
}

export default RideRequestsStatusAnalytics