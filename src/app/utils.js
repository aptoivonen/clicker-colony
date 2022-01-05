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

// export const getAllColonists = state =>
