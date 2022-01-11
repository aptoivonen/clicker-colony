import { createSlice, createSelector } from "@reduxjs/toolkit";
import { selectAllColonists } from "app/colonistsSlice";
import { selectResource } from "app/resourcesSlice";

export const slice = createSlice({
  name: "buildings",
  initialState: {
    quarters: {
      level: 1,
      levelUpCost: {
        money: 10,
      },
      capacity: {
        colonists: 10,
      },
    },
    storage: {
      level: 1,
      levelUpCost: {
        money: 10,
      },
      capacity: {
        resources: 1000,
      },
    },
    hydroponicFarm: {
      level: 1,
      levelUpCost: {
        money: 10,
      },
      production: {
        food: 3,
      },
    },
    copperMine: {
      level: 1,
      levelUpCost: {
        copper: 10,
      },
      production: {
        copper: 3,
      },
      workers: 0,
    },
    leadMine: {
      level: 1,
      levelUpCost: {
        lead: 10,
      },
      production: {
        lead: 3,
      },
      workers: 0,
    },
  },
  reducers: {},
});

const selectBuildings = createSelector(
  (state) => state,
  (state) => state.buildings
);

export const selectWorkers = createSelector(selectBuildings, (buildings) =>
  Object.values(buildings).reduce(
    (previousSum, currentBuilding) =>
      previousSum + (currentBuilding.workers || 0),
    0
  )
);

export const selectColonistCapacity = createSelector(
  selectBuildings,
  (buildings) =>
    Object.values(buildings).reduce(
      (previousSum, currentBuilding) =>
        previousSum +
        currentBuilding.level * (currentBuilding?.capacity?.colonists || 0),
      0
    )
);

export const selectHasAvailableColonistCapacity = createSelector(
  (state) => state,
  (state) => selectColonistCapacity(state) > selectAllColonists(state)
);

/**
 * How much resources buildings can store. Every resource has the same capacity,
 * so e.g. capacity=1000 would allow to store 1000 copper, 1000 lead, etc.
 * @param {*} state
 * @param {*} resourceType
 * @returns {number} capacity to store any resource
 */
export const selectResourceCapacity = createSelector(
  selectBuildings,
  (buildings) =>
    Object.values(buildings).reduce(
      (previousSum, currentBuilding) =>
        previousSum +
        currentBuilding.level * (currentBuilding?.capacity?.resources || 0),
      0
    )
);

/**
 * How much of the resource type can still be stored in the colony.
 * @param {*} state
 * @param {*} resourceType
 * @returns
 */
export const selectAvailableResourceCapacity = createSelector(
  [(state) => state, (state, resourceType) => resourceType],
  (state, resourceType) =>
    selectResourceCapacity(state) - selectResource(state, resourceType)
);

export default slice.reducer;
