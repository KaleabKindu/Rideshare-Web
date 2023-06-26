import { RideRequest } from '@/types/admin/ride-request'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const rideRequestApi = createApi({
  reducerPath: 'rideRequestApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000/',
  }),
  endpoints: (builder) => ({
    getAllRideRequests: builder.query<RideRequest[], void>({
      query: () => '/ride-requests',
    }), 

    searchRequestsByName: builder.query<RideRequest[], string>({
        query: (name:string) => `/ride-requests?name=${name}`,
      }),
      filterByStatus: builder.query<RideRequest[], string>({
        query: (Status:string) => `/ride-requests?Status=${Status}`,
      }),
  }),
})

export const { useGetAllRideRequestsQuery, useSearchRequestsByNameQuery, useFilterByStatusQuery} = rideRequestApi