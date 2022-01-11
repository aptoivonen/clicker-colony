import { createSlice, createSelector } from "@reduxjs/toolkit";
import { colonistAdded, updated } from "app/actionCreators";
import { decrementResources } from "app/resourceHelpers";
import { selectAvailableResourceCapacity } from "app/buildingsSlice";

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

export const selectResources = createSelector(
  (state) => state,
  (state) => state.resources
);

/**
 * Returns the amount of one resource type.
 * @param {*} state
 * @param {*} resourceType
 * @returns
 */
export const selectResource = createSelector(
  [selectResources, (state, resourceType) => resourceType],
  (resources, resourceType) => resources[resourceType]
);

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

/**
 * Can clicked resource be added to colony? Checks if there is available capacity.
 */
export const selectCanClickResource = createSelector(
  [(state) => state, (state, resourceType) => resourceType],
  (state, resourceType) =>
    selectAvailableResourceCapacity(state, resourceType) > 0
);

export default slice.reducer;
