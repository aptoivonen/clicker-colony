import { createAction, createReducer, createSelector } from "@reduxjs/toolkit";
import initialState from "app/initialState";
import {
  updateReducer,
  addResourceReducer,
  addColonistReducer,
} from "app/reducers";

const addResource = createAction("addResource");
const addColonist = createAction("addColonist");
const update = createAction("update");

const rootReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addResource, addResourceReducer)
    .addCase(addColonist, addColonistReducer)
    .addCase(update, updateReducer);
});

export const selectRound = createSelector(
  (state) => state,
  (state) => state.round
);

export const selectResources = createSelector(
  (state) => state,
  (state) => state.resources
);

export const selectIdleColonists = createSelector(
  (state) => state,
  (state) => state.colonists.idle
);

export { addResource, addColonist, update };

export default rootReducer;
