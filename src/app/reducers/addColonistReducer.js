import {
  hasResources,
  decrementResources,
  getAllColonists,
  getColonistCapacity,
} from "app/utils";

/**
 * Adds a new colonist if there are enough resources to pay for him and enough capacity to hold him.
 * @param {{}} state the global state
 */
const addColonistReducer = (state) => {
  const {
    resources,
    colonists: { hireCost },
  } = state;

  const canAddColonist =
    hasResources(hireCost, resources) &&
    getColonistCapacity(state) > getAllColonists(state);

  if (canAddColonist) {
    state.resources = decrementResources(hireCost, resources);
    state.colonists.idle += 1;
  }
};

export default addColonistReducer;
