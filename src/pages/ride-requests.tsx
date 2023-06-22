import RideRequestItem from '@/components/ride-request/RideRequestItem'
import React from 'react'
import { Gender, Role, User } from '@/types/admin-dashboard/user';
import { RideRequest, Point, Status } from '@/types/admin-dashboard/ride-request';

const sampleUser: User = {
  UserID: 1,
  Fullname: 'John Doe',
  Email: 'johndoe@example.com',
  Password: 'password123',
  Gender: Gender.Male,
  Age: 30,
  PhoneNumber: '1234567890',
  ProfilePicture: 'profile.jpg',
  role: Role.commuter,
};



const sampleRideRequest: RideRequest = {
  RideRequestID: 1,
  Commuter: {
    UserID: 1,
    Fullname: 'John Doe',
    Email: 'johndoe@example.com',
    Password: 'password123',
    Gender: Gender.Male,
    Age: 30,
    PhoneNumber: '1234567890',
    ProfilePicture: 'profile.jpg',
    role: Role.commuter,
  },
  Origin: {
    x: 37.7749,
    y: -122.4194,
  },
  Destination: {
    x: 37.7897,
    y: -122.4061,
  },
  CurrentFare: 10,
  Status: Status.pending,
  NumberOfSeats: 1,
  CreatedDateTime: new Date(),
};



export default function RequestRide() {
    return (
      <div>
        <RideRequestItem name={sampleUser.Fullname} origin={sampleRideRequest.Origin} destination={sampleRideRequest.Destination} currentFare={sampleRideRequest.CurrentFare} numberOfSeats={sampleRideRequest.CurrentFare} status={sampleRideRequest.Status} dateTime={sampleRideRequest.CreatedDateTime}/>
      </div>
    );
  }
  