import { createSlice } from '@reduxjs/toolkit'

const defaultState = {
  value: 0,
}

const calcSlice = createSlice({
  name: 'calculator',
  initialState: defaultState,
  reducers: {
    add: (state, action) => {
      state.value += action.payload
    },
    subtract: (state, action) => {
      state.value -= action.payload
    },
    multiply: (state, action) => {
      state.value *= action.payload
    },
    divide: (state, action) => {
      state.value /= action.payload
    },
    total: (state, action) => {
      state = action.payload
    },
  },
})

export const { add, subtract, multiply, divide, total } = calcSlice.actions

export const selectValue = (state) => state.calculator.value

export default calcSlice.reducer
