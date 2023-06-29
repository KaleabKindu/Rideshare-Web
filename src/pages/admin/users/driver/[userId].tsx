import DriverDetail from '@/components/admin/users/drivers/DriverDetail'
import withAdminLayout from '@/components/common/admin/withAdminLayout'
import { useRouter } from 'next/router'
import React from 'react'
import { Driver } from '@/types/driver';
import UserDetail from '@/components/admin/users/UserDetail';
import Vehicles from "@/components/admin/users/drivers/Vehicles";

const User = () => {
  const router = useRouter();
  const id = router.query.userId as string;

  return (
    <div className='space-y-10'>
      <UserDetail id={id} />
      <DriverDetail driverID={ id }/>
      <Vehicles/>
    </div>
  )
}


export default withAdminLayout(User);
