import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { Credentials, LoginResponse } from "@/types/auth";
import {Vehicle} from "@/types/vehicles"

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
    getVehicleById: builder.query<Vehicle , number>({
      query : (id) => `Vehicles/${id}`,
      transformResponse(baseQueryReturnValue:any, meta, arg) {
        return baseQueryReturnValue.value 
      },
    })  
  }), 
});

export const { useAdminLoginMutation , useGetVehicleByIdQuery } = apiSlice;
