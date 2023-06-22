import { User } from "./user"

export type RideRequest = {
    RideRequestID: number 
    Commuter: User 
    Origin: Point
    Destination: Point
    CurrentFare: number
    Status: Status
    NumberOfSeats: number
    CreatedDateTime: Date
}


export type Point = {
    x: number;
    y: number;
}

export enum Status {onroute, pending}