import { createAction, createReducer } from "@reduxjs/toolkit";
import initialState from "app/initialState";
import { hasResources, decrementResources } from "app/utils";

const addResource = createAction("addResource");
const addColonist = createAction("addColonist");
const update = createAction("update");

const rootReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addResource, (state, action) => {
      const { type, amount } = action.payload;
      state.resources[type] += amount;
    })
    .addCase(addColonist, (state) => {
      const canAddColonist = hasResources(
        state.colonists.hireCost,
        state.resources
      );

      if (canAddColonist) {
        state.resources = decrementResources(
          state.colonists.hireCost,
          state.resources
        );
        state.colonists.idle += 1;
      }
    })
    .addCase(update, (state) => {
      state.round += 1;
    });
});

export { addResource, addColonist, update };

export default rootReducer;
