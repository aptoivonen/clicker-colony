export const hasResources = (resourcesRequirementObj, targetResourcesObj) =>
  Object.entries(resourcesRequirementObj).every(
    ([entryKey, entryValue]) =>
      entryValue >= 0 && targetResourcesObj[entryKey] >= entryValue
  );

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
