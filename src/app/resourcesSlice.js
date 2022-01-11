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
        // TODO:
      })
      .addCase(colonistAdded, (state, action) => {
        const resourceRequirement = action.payload;
        decrementResources(state, resourceRequirement);
      });
  },
});

export const selectResources = (state) => state.resources;

/**
 * Returns the amount of one resource type.
 * @param {*} state
 * @param {*} resourceType
 * @returns
 */
export const selectResource = (state, resourceType) =>
  selectResources(state)[resourceType];

/**
 * Tells, if colony has enough resources for resource requirement.
 */
export const selectHasEnoughResources = createSelector(
  [selectResources, (state, resourceRequirement) => resourceRequirement],
  (resources, resourceRequirement) =>
    Object.entries(resourceRequirement).every(
      ([key, value]) => value >= 0 && resources[key] >= value
    )
);

export default slice.reducer;
