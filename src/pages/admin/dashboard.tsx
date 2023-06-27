import withAdminLayout from '@/components/common/admin/withAdminLayout'
import Head from 'next/head'
import React from "react";
import CommutersAnalytics from "@/components/admin/dashboard/CommutersAnalytics";
import DriverAndVehicleAnalytics from "@/components/admin/dashboard/DriverAndVehicleAnalytics";
import RideRequestsAnalytics from "@/components/admin/dashboard/RideRequestsAnalytics";
import RideOffersAnalytics from "@/components/admin/dashboard/RideOffersAnalytics";
import TopCommuters from "@/components/admin/dashboard/TopCommuters";
import Card from '@/components/admin/dashboard/Card';
import { AiOutlineUser }  from 'react-icons/ai'
import { FaCar } from 'react-icons/fa';
import { MdOutlineLocalOffer,MdOutlineRequestPage } from 'react-icons/md'


type DashboardProps = {};

const Dashboard = (props: DashboardProps) => {
  return (
    <div className="space-y-16">
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className='space-y-10 mt-5'>
        <div>
          <div className='font-bold text-3xl'>
            Welcome Back
          </div>
          <div className='text-gray-400'>
            Here are some Statistics on RideShare
          </div>
        </div>
        <div className='flex flex-wrap gap-3'>
          <Card name='Commuters' Icon={AiOutlineUser} numberOfItems={17356} increase={true} percentage={10} />
          <Card name='Drivers' Icon={AiOutlineUser} numberOfItems={10356} increase={false} percentage={8.9} />
          <Card name='Vehicles' Icon={FaCar} numberOfItems={10236} increase={false} percentage={2.5} />
          <Card name='Requests' Icon={MdOutlineRequestPage} numberOfItems={1356} increase={true} percentage={4.2} />
          <Card name='Offers' Icon={MdOutlineLocalOffer} numberOfItems={856} increase={false} percentage={0.2} />
        </div>

      </div>
      
      <CommutersAnalytics />
      <TopCommuters />
      <DriverAndVehicleAnalytics />
      <RideRequestsAnalytics />
      <RideOffersAnalytics />     
    </div>
  );
};

export default withAdminLayout(Dashboard)
