import { configureStore } from "@reduxjs/toolkit";
import roundReducer from "app/roundSlice";
import resourcesReducer from "app/resourcesSlice";
import colonistsReducer from "app/colonistsSlice";
import buildingsReducer from "app/buildingsSlice";
import { loadState, saveState } from "utils/localStorage";
import throttle from "lodash/throttle";

const preloadedState = loadState();

export const store = configureStore({
  reducer: {
    round: roundReducer,
    resources: resourcesReducer,
    colonists: colonistsReducer,
    buildings: buildingsReducer,
  },
  preloadedState,
});

/**
 * Save all state changes to localStorage.
 * Use throttle to save only once a second (JSON.stringify is expensive)
 */
store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);
