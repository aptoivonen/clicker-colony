import { createSelector } from "@reduxjs/toolkit";
import {
  getAllColonists,
  getColonistCapacity,
  hasAvailableColonistCapacity,
} from "app/utils";

const identityFn = (state) => state;

export const selectRound = createSelector(identityFn, (state) => state.round);

export const selectResources = createSelector(
  identityFn,
  (state) => state.resources
);

export const selectIdleColonists = createSelector(
  identityFn,
  (state) => state.colonists.idle
);

export const selectAllColonists = createSelector(identityFn, getAllColonists);

export const selectColonistsCapacity = createSelector(
  identityFn,
  getColonistCapacity
);

export const selectHasAvailableColonistCapacity = createSelector(
  identityFn,
  hasAvailableColonistCapacity
);
