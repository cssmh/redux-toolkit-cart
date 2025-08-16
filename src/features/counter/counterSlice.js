import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "countNumer",
  initialState,
  reducers: {
    incremental: (state) => {
      state.value += 1;
    },
    decremental: (state) => {
      state.value -= 1;
    },
    decrementalByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;