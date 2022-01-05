import { hasResources, decrementResources } from "app/utils";

const addColonistReducer = (state) => {
  const {
    resources,
    colonists: { hireCost },
  } = state;

  const canAddColonist = hasResources(hireCost, resources);

  if (canAddColonist) {
    state.resources = decrementResources(hireCost, resources);
    state.colonists.idle += 1;
  }
};

export default addColonistReducer;
