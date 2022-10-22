import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './nasaSlice'

export const store = configureStore({
  reducer: {
	nasa: counterReducer 
  },
})


