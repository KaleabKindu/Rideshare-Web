import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../store'
import { Credentials, LoginResponse } from '@/types/auth'
import { Driver } from '@/types/driver'


export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://rideshare-app.onrender.com/api/",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.accessToken;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    adminLogin: builder.mutation<LoginResponse, Credentials>({
      query: (credentials) => ({
        url: "User/admin/login",
        method: "POST",
        body: credentials,
      }),
    }),
    endpoints: (builder) => ({
        adminLogin: builder.mutation<LoginResponse, Credentials>({
            query: (credentials) => ({
              url: 'User/admin/login',
              method: 'POST',
              body: credentials,
            }),
          }),
          getDriverByID: builder.query<Driver, string>({
            query: (id) => `Driver/${id}`,
          }),
    }),
})


export const { useAdminLoginMutation, useGetDriverByIDQuery } = apiSlice
