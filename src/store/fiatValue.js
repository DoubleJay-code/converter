const defaultState = {
  value: 0,
};

export const fiatValue = (state = defaultState, action) => {
  switch (action.type) {
    case 'CHANGE_FIAT_VALUE':
      return { ...state, value: action.payload };
    default:
      return state;
  }
};
