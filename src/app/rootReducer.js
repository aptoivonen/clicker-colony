import { createAction, createReducer } from "@reduxjs/toolkit";
import initialState from "app/initialState";
import {
  updateReducer,
  clickResourceReducer,
  addColonistReducer,
} from "app/reducers";

const clickResource = createAction("clickResource");
const addColonist = createAction("addColonist");
const update = createAction("update");

const rootReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(clickResource, clickResourceReducer)
    .addCase(addColonist, addColonistReducer)
    .addCase(update, updateReducer);
});

export { clickResource, addColonist, update };

export default rootReducer;
