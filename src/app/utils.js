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
 * @returns {{}} resultResourcesObj the result of the decrement
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

export const getIdleColonists = (state) => state.colonists.idle;

/**
 * Counts the number of all colonists, including idle ones and ones working in buildings.
 * If a building can't have workers, it if skipped.
 * @param {!{buildings: {}}} state global state object
 * @returns {number} the number of all colonists
 */
export const getAllColonists = (state) =>
  getIdleColonists(state) +
  Object.values(state.buildings).reduce(
    (previousSum, currentBuilding) =>
      previousSum + (currentBuilding.workers || 0),
    0
  );
