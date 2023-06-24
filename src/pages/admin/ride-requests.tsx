import RideRequestItem from '@/components/admin/ride-request/RideRequestItem'
import RideRequestList from '@/components/admin/ride-request/RideRequestList'
import TrialRequest from '@/components/admin/ride-request/TrialRequest'
import withAdminLayout from '@/components/common/admin/withAdminLayout'
import Head from 'next/head'
import React from 'react'


// import { Gender, Role, User } from '@/types/admin-dashboard/user';
// import { RideRequest, Point, Status } from '@/types/admin-dashboard/ride-request';

// const sampleUser: User = {
//   UserID: 1,
//   Fullname: 'John Doe',
//   Email: 'johndoe@example.com',
//   Password: 'password123',
//   Gender: "Male",
//   Age: 30,
//   PhoneNumber: '1234567890',
//   ProfilePicture: 'profile.jpg',
//   role: "commuter",
// };



// const sampleRideRequest: RideRequest = {
//   RideRequestID: 1,
//   Commuter: "commuter",
//   Origin: "Bole",
//   Destination: "Arada",
//   CurrentFare: 10,
//   Status: "pending",
//   NumberOfSeats: 1,
//   CreatedDateTime:"6/23/2023",
// };


type RideRequestsProps = {}

const RideRequests = (props: RideRequestsProps) => {
  return (
    <div>
      <Head>
        <title>Ride Requests</title>
      </Head>
      {/* <div><RideRequestItem name={sampleUser.Fullname} origin={sampleRideRequest.Origin} destination={sampleRideRequest.Destination} currentFare={sampleRideRequest.CurrentFare} numberOfSeats={sampleRideRequest.CurrentFare} status={sampleRideRequest.Status} dateTime={sampleRideRequest.CreatedDateTime}/></div>
       */}
       <RideRequestList/>
    </div>
  )
}

export default withAdminLayout(RideRequests)