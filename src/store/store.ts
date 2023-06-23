
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { navigationSlice } from './navigation/navigation'
import { apiSlice } from './api'
import { authSlice } from './auth/authSlice'

export const store = configureStore({
  reducer: {
    [navigationSlice.name]:navigationSlice.reducer,
    [apiSlice.reducerPath]:apiSlice.reducer,
    [authSlice.name]:authSlice.reducer
   },
   middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware().concat(apiSlice.middleware)

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch