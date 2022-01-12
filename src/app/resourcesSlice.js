import { createSlice, createSelector } from "@reduxjs/toolkit";
import { resourceClicked, colonistAdded, updated } from "app/actionCreators";
import { decrementResources, incrementResources } from "app/resourceHelpers";
import {
  selectAvailableResourceCapacity,
  selectHasAvailableResourceCapacity,
} from "app/buildingsSlice";

const RESOURCE_CLICK_AMOUNT = 100;

export const slice = createSlice({
  name: "resources",
  initialState: {
    food: 0,
    money: 1500,
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
      })
      .addCase(resourceClicked, (state, action) => {
        const resourceIncrement = action.payload;
        incrementResources(state, resourceIncrement);
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
 * Returns resource Object where amounts have been cut back if available capacity is lacking to fill capacity
 * but not go over it.
 */
export const selectAddableResourceAmount = createSelector(
  [(state) => state, (state, resourceRequirement) => resourceRequirement],
  (state, resourceRequirement) =>
    Object.fromEntries(
      Object.entries(resourceRequirement).map(([key, value]) => [
        key,
        Math.min(value, selectAvailableResourceCapacity(state, key)),
      ])
    )
);

/**
 * Can clicked resource be added to colony? Checks if there is available capacity.
 */
export const selectCanClickResource = createSelector(
  [(state) => state, (state, resourceType) => resourceType],
  (state, resourceType) =>
    selectHasAvailableResourceCapacity(state, {
      [resourceType]: RESOURCE_CLICK_AMOUNT,
    })
);

/**
 * Selects all of the click amount or cuts back if there isn't enough storage available.
 */
export const selectClickResourceAmountToAdd = createSelector(
  [(state) => state, (state, resourceType) => resourceType],
  (state, resourceType) =>
    selectAddableResourceAmount(state, {
      [resourceType]: RESOURCE_CLICK_AMOUNT,
    })
);

export default slice.reducer;
