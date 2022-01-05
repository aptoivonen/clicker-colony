const addResourceReducer = (state, action) => {
  const { type, amount } = action.payload;
  state.resources[type] += amount;
};

export default addResourceReducer;
