
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { navigationSlice } from './navigation/navigation'
import { apiSlice } from './api'
import { authSlice } from './auth/authSlice'
import { rideRequestApi } from './api/ride-request/ride-request'

export const store = configureStore({
  reducer: {
    [navigationSlice.name]:navigationSlice.reducer,
    [apiSlice.reducerPath]:apiSlice.reducer,
    [authSlice.name]:authSlice.reducer,
    [rideRequestApi.reducerPath]: rideRequestApi.reducer
   },
   middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware().concat(apiSlice.middleware).concat(rideRequestApi.middleware)

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch