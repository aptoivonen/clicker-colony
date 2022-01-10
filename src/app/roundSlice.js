import { createSlice } from "@reduxjs/toolkit";
import { updated } from "app/actionCreators";

export const slice = createSlice({
  name: "round",
  initialState: {
    value: 1,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updated, (state, action) => {
      state.value += 1;
    });
  },
});

export const selectRound = (state) => state.round.value;

export default slice.reducer;
