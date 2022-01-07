/**
 * Decrements resources by mutating ResourceState object since there is Immer underneath.
 * @param {{}} resourceState resources object
 * @param {{}} resourceRequirement resources to decrement
 * @returns {{}} the result of the decrement
 */
export const decrementResources = (resourceState, resourceRequirement) => {
  Object.entries(resourceState).forEach(([key, value]) => {
    resourceState[key] = Math.max(value - (resourceRequirement[key] || 0), 0);
  });

  // const newState = Object.fromEntries(
  //   Object.entries(state).map(([entryKey, entryValue]) => [
  //     entryKey,
  //     Math.max(entryValue - (resourceRequirement[entryKey] || 0), 0),
  //   ])
  // );
  // return newState;
};

/**
 * Calculates how many times over resourcesRequirementObj are in targetResourcesObj.
 * @param {{}} state resourceState
 * @param {{}} resourceRequirement resources to multiply
 * @returns {number} how many times resourcesRequirementObj can be found in targetResourcesObj
 */
export const getResourceMultiplier = (state, resourceRequirement) =>
  Math.min(
    ...Object.entries(resourceRequirement).map(([entryKey, entryValue]) => {
      const targetResourceValue = state[entryKey];
      if (!targetResourceValue) return 0;
      return Math.floor(targetResourceValue / entryValue);
    })
  );
