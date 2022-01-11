import { createAction } from "@reduxjs/toolkit";
import {
  selectCanAddColonist,
  selectColonistHireCost,
} from "app/colonistsSlice";

/**
 * Basic action creators are meant to be used in thunks and slice reducers, not directly in components.
 * Components should only use thunks.
 * Action creators and thunks have one-to-one correspondence.
 */

// Action creators
const updated = createAction("updated");
const colonistAdded = createAction("colonistAdded");
const resourceClicked = createAction("resourceClicked");
const colonistEmployed = createAction("colonistEmployed");
const colonistIdled = createAction("colonistIdled");
const buildingLeveledUp = createAction("buildingLeveledUp");

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

const clickResource =
  ({ resourceType }) =>
  (dispatch, getState) => {
    dispatch(resourceClicked({ resourceType }));
  };

const employColonist =
  ({ buildingType }) =>
  (dispatch, getState) => {
    dispatch(colonistEmployed({ buildingType }));
  };

const idleColonist =
  ({ buildingType }) =>
  (dispatch, getState) => {
    dispatch(colonistIdled({ buildingType }));
  };

const levelUpBuilding =
  ({ buildingType }) =>
  (dispatch, getState) => {
    dispatch(buildingLeveledUp({ buildingType }));
  };

export {
  updated,
  colonistAdded,
  resourceClicked,
  colonistEmployed,
  colonistIdled,
  buildingLeveledUp,
  update,
  addColonist,
  clickResource,
  employColonist,
  idleColonist,
  levelUpBuilding,
};
