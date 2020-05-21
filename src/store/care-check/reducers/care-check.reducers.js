const initState = {};

export const careCheckReducer = (state = initState, action) => {
  switch (action.type) {
    case "CARE_CHECK_VALUES":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
