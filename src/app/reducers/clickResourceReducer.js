const CLICKABLE_RESOURCE_TYPES = ["food", "money", "copper", "lead"];

/**
 * Add one clickable resource. Only some resources can be added this way.
 * Presumes use of Immer.
 * @param {{}} state
 * @param {{}} action
 */
const clickResourceReducer = (state, action) => {
  const { type, amount } = action.payload;
  if (CLICKABLE_RESOURCE_TYPES.includes(type)) {
    state.resources[type] += amount;
  }
};

export default clickResourceReducer;
