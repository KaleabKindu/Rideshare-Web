
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { navigationSlice } from './navigation/navigation'
import { apiSlice } from './api'

export const store = configureStore({
  reducer: {
    [navigationSlice.name]:navigationSlice.reducer,
    [apiSlice.reducerPath]:apiSlice.reducer
   },
   middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware().concat(apiSlice.middleware)

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch