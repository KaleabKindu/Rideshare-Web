import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../store'
import { Credentials, LoginResponse } from '@/types/auth'
import { RideRequest } from '@/types/admin/ride-request'


export const apiSlice = createApi({
    reducerPath:'api',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://rideshare-app.onrender.com/api/',
        prepareHeaders:(headers, { getState }) => {
            const token = (getState() as RootState).auth.accessToken
            if (token){
                headers.set('Authorization', `Bearer ${token}`)
            }
            return headers
        }
    }),
    endpoints: (builder) => ({
        adminLogin: builder.mutation<LoginResponse, Credentials>({
            query: (credentials) => ({
              url: 'User/admin/login',
              method: 'POST',
              body: credentials,
            }),

            
          }),
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


export const { useAdminLoginMutation } = apiSlice