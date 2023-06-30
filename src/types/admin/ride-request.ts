import { User } from "../Users"

export type RideRequest = {
    RideRequestID: number 
    name:string
    Commuter: User,
    Origin: string,
    Destination: string,
    CurrentFare: number,
    Status: number,
    NumberOfSeats: number
}


export enum Status {WAITING, ONROUTE, COMPLETED, CANCELED}

export interface RideRequestFilter {
    page:number,
    size:number,
    name?:string,
    fare?:number,
    origin?: string,
    destination?: string,
    status?:string | null,
}