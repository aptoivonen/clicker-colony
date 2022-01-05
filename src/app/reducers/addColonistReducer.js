import { hasResources, decrementResources } from "app/utils";

const addColonistReducer = (state) => {
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
};

export default addColonistReducer;
