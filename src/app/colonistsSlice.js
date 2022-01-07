import { createSlice } from "@reduxjs/toolkit";
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

export const selectAllColonists = (state) =>
  selectIdleColonists(state) + selectWorkers(state);

export const addColonistThunk = () => (dispatch, getState) => {
  const state = getState();
  const { hireCost } = state.colonists;
  const canAddColonist =
    selectHasEnoughResources(state, hireCost) &&
    selectHasAvailableColonistCapacity(state);
  if (canAddColonist) {
    dispatch(colonistAdded(hireCost));
  }
};

export default slice.reducer;
