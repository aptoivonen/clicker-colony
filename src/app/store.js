import { configureStore } from "@reduxjs/toolkit";
import roundReducer from "app/roundSlice";
import resourcesReducer from "app/resourcesSlice";
import colonistsReducer from "app/colonistsSlice";
import buildingsReducer from "app/buildingsSlice";
import { loadState } from "utils/localStorage";

export const store = configureStore({
  reducer: {
    round: roundReducer,
    resources: resourcesReducer,
    colonists: colonistsReducer,
    buildings: buildingsReducer,
  },
  preloadedState: loadState(),
});
