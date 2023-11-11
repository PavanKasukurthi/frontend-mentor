import { configureStore } from '@reduxjs/toolkit'
import calculatorReducer from './features/calc/calcSlice'

export const store = configureStore({
  reducer: {
    calculator: calculatorReducer,
  },
})
