import DriverDetail from '@/components/admin/users/driver/DriverDetail'
import withAdminLayout from '@/components/common/admin/withAdminLayout'
import { useGetDriverByIDQuery } from '@/store/api';
import { useRouter } from 'next/router'
import React from 'react'
import { Driver } from '@/types/driver';

const User = () => {
  const router = useRouter();
  const driverID = router.query.userId as string;
  const { data, isLoading, isError} = useGetDriverByIDQuery(driverID);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !data ) {
    return (
      <div>
        <p>Error occurred finding driver.</p>
      </div>
    )
  }

  // Define the data type of the driver object
  const driver = data as Driver;

  return (
    <div>
      <DriverDetail driver={ driver }/>
    </div>
  )
}

export default withAdminLayout(User);
