import { createSlice, createSelector } from "@reduxjs/toolkit";
import { colonistAdded, updated } from "app/actionCreators";
import { decrementResources } from "app/resourceHelpers";

export const slice = createSlice({
  name: "resources",
  initialState: {
    food: 0,
    money: 15,
    copper: 0,
    lead: 0,
    power: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updated, (state, action) => {
        state.food += 1;
      })
      .addCase(colonistAdded, (state, action) => {
        const resourceRequirement = action.payload;
        decrementResources(state, resourceRequirement);
      });
  },
});

export const selectResources = (state) => state.resources;

export const selectHasEnoughResources = createSelector(
  [selectResources, (state, resourceRequirement) => resourceRequirement],
  (resources, resourceRequirement) =>
    Object.entries(resourceRequirement).every(
      ([entryKey, entryValue]) =>
        entryValue >= 0 && resources[entryKey] >= entryValue
    )
);

export default slice.reducer;
