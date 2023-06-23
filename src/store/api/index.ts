import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../store'


export const apiSlice = createApi({
    reducerPath:'api',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://rideshare-app.onrender.com/api/',
        prepareHeaders:(headers, { getState }) => {
            // Get The JWT token from store
            const token = (getState() as RootState)
            if (token){
                headers.set('Authorization', `Bearer ${token}`)
            }
            return headers
        }
    }),
    endpoints: (builder) => ({
        adminLogin: builder.mutation({
            query: (credentials) => ({
              url: 'User/admin/login',
              method: 'POST',
              body: credentials,
            }),
          }),
    }),
})


export const { useAdminLoginMutation } = apiSlice