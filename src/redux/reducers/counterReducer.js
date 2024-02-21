import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementCounter: (state, action) => {
      state.counter += action.payload;
    },
    decrementCounter: (state, action) => {
      state.counter -= action.payload;
    },
  },
});

export const { incrementCounter, decrementCounter } = counterSlice.actions;
export default counterSlice.reducer;
