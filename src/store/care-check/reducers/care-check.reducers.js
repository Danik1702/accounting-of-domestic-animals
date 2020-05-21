const initState = {};

export const careCheckReducer = (state = initState, action) => {
  switch (action.type) {
    case "ARE_CHECK_VALUES":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
