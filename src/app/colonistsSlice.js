import { createSlice, createSelector } from "@reduxjs/toolkit";
import { colonistAdded } from "app/actionCreators";
import {
  selectWorkers,
  selectHasAvailableColonistCapacity,
} from "app/buildingsSlice";
import { selectHasEnoughResources } from "app/resourcesSlice";

export const slice = createSlice({
  name: "colonists",
  initialState: {
    idle: 1,
    dead: 0,
    consumption: {
      food: 1,
    },
    hireCost: {
      money: 10,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(colonistAdded, (state, action) => {
      state.idle += 1;
    });
  },
});

export const selectIdleColonists = (state) => state.colonists.idle;

export const selectColonistHireCost = (state) => state.colonists.hireCost;

export const selectAllColonists = (state) =>
  selectIdleColonists(state) + selectWorkers(state);

export const selectCanAddColonist = createSelector(
  [
    (state) => state,
    selectColonistHireCost,
    selectHasAvailableColonistCapacity,
  ],
  (state, hireCost, hasAvailableColonistCapacity) =>
    selectHasEnoughResources(state, hireCost) && hasAvailableColonistCapacity
);

export const addColonistThunk = () => (dispatch, getState) => {
  const state = getState();
  const canAddColonist = selectCanAddColonist(state);
  if (canAddColonist) {
    const hireCost = selectColonistHireCost(state);
    dispatch(colonistAdded(hireCost));
  }
};

export default slice.reducer;
