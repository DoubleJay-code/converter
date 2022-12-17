const defaultState = {
  fiat: 'USD',
};

export const fiatReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'CHANGE_FIAT':
      return { ...state, fiat: action.payload };
    default:
      return state;
  }
};
