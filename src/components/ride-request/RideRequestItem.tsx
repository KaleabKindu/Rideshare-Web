import React from 'react'
import {Point, Status} from '@/types/admin-dashboard/ride-request'

interface RideRequestProps {
    name: string;
    origin: Point;
    destination: Point;
    currentFare: number;
    numberOfSeats: number;
    status: Status;
    dateTime: Date;
}
const RideRequestItem: React.FC<RideRequestProps>= ({name, origin, destination, currentFare, numberOfSeats, status, dateTime}) => {
    // a
  return (
    <div>
        <p>{name}</p>
        <p>{origin.x}, {origin.y}</p>
        <p>{destination.x}, {destination.y}</p>
        <p>{currentFare}</p>
        <p>{numberOfSeats}</p>
        <p>{status}</p>
        <p>{dateTime.toString()}</p>
    </div>
  )
}

export default RideRequestItem