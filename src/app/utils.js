/**
 * Checks if targetResourcesObj has required resources
 * @param {{}} resourcesRequirementObj what resources target should have
 * @param {{}} targetResourcesObj target resources, typically state.resources
 * @returns {boolean} does target have required resources available
 */
export const hasResources = (resourcesRequirementObj, targetResourcesObj) =>
  Object.entries(resourcesRequirementObj).every(
    ([entryKey, entryValue]) =>
      entryValue >= 0 && targetResourcesObj[entryKey] >= entryValue
  );

/**
 * Decrements resources by returning new result object.
 * Original objects remain untouched.
 * @param {{}} resourcesRequirementObj resources to decrement
 * @param {{}} targetResourcesObj target resources, typically state.resources
 * @returns {{}} the result of the decrement
 */
export const decrementResources = (
  resourcesRequirementObj,
  targetResourcesObj
) => {
  const newTargetResourcesObj = Object.fromEntries(
    Object.entries(targetResourcesObj).map(([entryKey, entryValue]) => [
      entryKey,
      Math.max(entryValue - (resourcesRequirementObj[entryKey] || 0), 0),
    ])
  );
  return newTargetResourcesObj;
};

/**
 * Calculates how many times over resourcesRequirementObj are in targetResourcesObj.
 * @param {{}} resourcesRequirementObj resources to multiply
 * @param {{}} targetResourcesObj target resources
 * @returns {number} how many times resourcesRequirementObj can be found in targetResourcesObj
 */
export const getResourceMultiplier = (
  resourcesRequirementObj,
  targetResourcesObj
) =>
  Math.min(
    ...Object.entries(resourcesRequirementObj).map(([entryKey, entryValue]) => {
      const targetResourceValue = targetResourcesObj[entryKey];
      if (!targetResourceValue) return 0;
      return Math.floor(targetResourceValue / entryValue);
    })
  );

/**
 * Counts the number of all colonists, including idle ones and ones working in buildings.
 * @param {!{buildings: {}}} state global state object
 * @returns {number} the number of all colonists
 */
export const getAllColonists = (state) =>
  state.colonists.idle +
  Object.values(state.buildings).reduce(
    (previousSum, currentBuilding) =>
      previousSum + (currentBuilding.workers || 0),
    0
  );

/**
 * Counts the total capacity to quarter colonists in the colony,
 * by adding up all buildings' colonist capacity.
 * @param {{}} state
 * @returns {number} the capacity to hold colonists
 */
export const getColonistCapacity = (state) =>
  Object.values(state.buildings).reduce(
    (previousSum, currentBuilding) =>
      previousSum + (currentBuilding?.capacity?.colonists || 0),
    0
  );
