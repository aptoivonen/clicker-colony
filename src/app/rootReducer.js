import { createAction, createReducer, createSelector } from "@reduxjs/toolkit";
import initialState from "app/initialState";
import {
  updateReducer,
  clickResourceReducer,
  addColonistReducer,
} from "app/reducers";
import { getIdleColonists, getAllColonists } from "app/utils";

const clickResource = createAction("clickResource");
const addColonist = createAction("addColonist");
const update = createAction("update");

const rootReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(clickResource, clickResourceReducer)
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
  getIdleColonists
);

export const selectAllColonists = createSelector(
  (state) => state,
  getAllColonists
);

export { clickResource, addColonist, update };

export default rootReducer;
