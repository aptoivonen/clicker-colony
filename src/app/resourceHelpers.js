const changeResources = (resourceState, resourceChange, change) => {
  Object.entries(resourceState).forEach(([key, value]) => {
    let multiplier;
    if (change === "increment") {
      multiplier = 1;
    }
    if (change === "decrement") {
      multiplier = -1;
    }
    if (multiplier === undefined) {
      throw new Error("wrong change paramater, has to be increment/decrement");
    }
    let newValue = value + multiplier * (resourceChange[key] || 0);
    if (change === "decrement") {
      newValue = Math.max(newValue, 0);
    }
    resourceState[key] = newValue;
  });
};

/**
 * Decrements resources by mutating ResourceState object since there is Immer underneath.
 * Resource values will remain >= 0 after this.
 * @param {{}} resourceState resources object
 * @param {{}} resourceRequirement resources to decrement
 */
export const decrementResources = (resourceState, resourceRequirement) => {
  changeResources(resourceState, resourceRequirement, "decrement");
  // Object.entries(resourceState).forEach(([key, value]) => {
  //   resourceState[key] = Math.max(value - (resourceRequirement[key] || 0), 0);
  // });
};

/**
 * Increments resources by mutating ResourceState object since there is Immer underneath.
 * Resource values will remain >= 0 after this.
 * @param {{}} resourceState resources object
 * @param {{}} resourceRequirement resources to increment
 */
export const incrementResources = (resourceState, resourceIncrement) => {
  changeResources(resourceState, resourceIncrement, "increment");
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
