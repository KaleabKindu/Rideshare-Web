import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { Credentials, LoginResponse } from "@/types/auth";
import { Driver } from "@/types/driver";
import { User, UsersFilter } from "@/types/Users";
import { FeedBack } from "@/types/commuter";
import { RideRequest, RideRequestFilter } from "@/types/admin/ride-request";

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
  tagTypes: ["Users", "RideRequests"],
  endpoints: (builder) => ({
    adminLogin: builder.mutation<LoginResponse, Credentials>({
      query: (credentials) => ({
        url: "User/admin/login",
        method: "POST",
        body: credentials,
      }),
    }),
    getDriverByID: builder.query<Driver, string>({
      query: (id) => `Driver/admin/${id}`,
      transformResponse(baseQueryReturnValue: any, meta, arg) {
        return baseQueryReturnValue.value;
      },
    }),
    getUserByID: builder.query<User, string>({
      query: (id) => `User/withAGiven/${id}`,
      transformResponse(baseQueryReturnValue: any, meta, arg) {
        return baseQueryReturnValue.value;
      },
    }),
    getCommutersFeedback: builder.query<
      { total: number; feedbacks: FeedBack[] },
      { page: number; size: number }
    >({
      query: ({ page, size }) =>
        `Feedback/?pageNumber=${page}&pageSize=${size}`,
      transformResponse(baseQueryReturnValue: any, meta, arg) {
        return {
          total: baseQueryReturnValue.value.count,
          feedbacks: baseQueryReturnValue.value.paginatedFeedback,
        };
      },
    }),
    getUsers: builder.query<
      { pages: number; users: User[] },
      { page: number; size: number }
    >({
      query: ({ page, size }) => `User/all?pageNumber=${page}&pageSize=${size}`,
      providesTags: ["Users"],
      transformResponse(baseQueryReturnValue: any, meta, arg) {
        return {
          pages: Math.ceil(
            baseQueryReturnValue.value.count /
              baseQueryReturnValue.value.pageSize
          ),
          users: baseQueryReturnValue.value.paginatedUsers,
        };
      },
    }),
    filterUsers: builder.query<{ pages: number; users: User[] }, UsersFilter>({
      query: ({ page, size, query, role, status, phoneNumber }) =>
        `User/filter?pageNumber=${page}&pageSize=${size}${
          query && "&fullName=" + query
        }${status && "&status=" + status}${role && "&roleName=" + role}${
          phoneNumber && "&phoneNumber=" + phoneNumber
        }`,
      providesTags: ["Users"],
      transformResponse(baseQueryReturnValue: any, meta, arg) {
        return {
          pages: Math.ceil(
            baseQueryReturnValue.value.count /
              baseQueryReturnValue.value.pageSize
          ),
          users: baseQueryReturnValue.value.paginatedUsers,
        };
      },
    }),

    getRideRequests: builder.query<
      { pages: number; rideRequests: RideRequest[] },
      { page: number; size: number }
    >({
      query: ({ page, size }) =>
        `RideRequest/all?pageNumber=${page}&pageSize=${size}`,
      providesTags: ["RideRequests"],
      transformResponse(baseQueryReturnValue: any, meta, arg) {
        return {
          pages: Math.ceil(
            baseQueryReturnValue.value.count /
              baseQueryReturnValue.value.pageSize
          ),
          rideRequests: baseQueryReturnValue.value.paginated,
        };
      },
    }),

    filterRideRequests: builder.query<
      { pages: number; rideRequests: RideRequest[] },
      RideRequestFilter
    >({
      query: ({ page, size, name, fare, origin, destination, status }) =>
        `RideRequest/Search?pageNumber=${page}&pageSize=${size}${
          name && "&name=" + name
        }${status && "&status=" + status}${fare && "&fare=" + fare}`,
      providesTags: ["RideRequests"],
      transformResponse(baseQueryReturnValue: any, meta, arg) {
        return {
          pages: Math.ceil(
            baseQueryReturnValue.value.count /
              baseQueryReturnValue.value.pageSize
          ),
          rideRequests: baseQueryReturnValue.value.paginated,
        };
      },
    }),
  }),
});

export const {
  useAdminLoginMutation,
  useGetCommutersFeedbackQuery,
  useGetUserByIDQuery,
  useGetDriverByIDQuery,
  useGetUsersQuery,
  useFilterUsersQuery,
  useGetRideRequestsQuery,
  useFilterRideRequestsQuery
} = apiSlice;
