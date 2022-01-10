import { createAction } from "@reduxjs/toolkit";
import {
  selectCanAddColonist,
  selectColonistHireCost,
} from "app/colonistsSlice";

/**
 * Actions are meant to be used in thunks and slice reducers, not directly in components.
 * Components should only use thunks.
 * Actions and thunks have one-to-one correspondence.
 */

// Actions
const updated = createAction("updated");
const colonistAdded = createAction("colonistAdded");
const resourceClicked = createAction("resourceClicked");

// Thunks
const update = () => (dispatch, getState) => {
  dispatch(updated());
};

const addColonist = () => (dispatch, getState) => {
  const state = getState();
  const canAddColonist = selectCanAddColonist(state);
  if (canAddColonist) {
    const hireCost = selectColonistHireCost(state);
    dispatch(colonistAdded(hireCost));
  }
};

export { updated, colonistAdded, resourceClicked, update, addColonist };
