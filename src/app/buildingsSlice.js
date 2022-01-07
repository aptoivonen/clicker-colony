import { createSlice } from "@reduxjs/toolkit";
import { selectAllColonists } from "app/colonistsSlice";

export const slice = createSlice({
  name: "buildings",
  initialState: {
    quarters: {
      name: "Quarters",
      description: "Living quarters for colonists",
      level: 1,
      levelUpCost: {
        money: 10,
      },
      capacity: {
        colonists: 10,
      },
    },
    hydroponicFarm: {
      name: "Hydroponic Farm",
      description: "Produces food for colonists",
      level: 1,
      levelUpCost: {
        money: 10,
      },
      production: {
        food: 3,
      },
    },
    copperMine: {
      name: "Copper Mine",
      description: "Engineers can mine for copper",
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
      name: "Lead Mine",
      description: "Engineers can mine for lead",
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

export const selectWorkers = (state) =>
  Object.values(state.buildings).reduce(
    (previousSum, currentBuilding) =>
      previousSum + (currentBuilding.workers || 0),
    0
  );

export const selectColonistCapacity = (state) =>
  Object.values(state.buildings).reduce(
    (previousSum, currentBuilding) =>
      previousSum +
      currentBuilding.level * (currentBuilding?.capacity?.colonists || 0),
    0
  );

export const selectHasAvailableColonistCapacity = (state) =>
  selectColonistCapacity(state) > selectAllColonists(state);

export default slice.reducer;
