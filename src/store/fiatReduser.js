const defaultState = {
  fiat: 'USD',
};

export const fiatReduser = (state = defaultState, action) => {
  switch (action.type) {
    case 'CHANGE_FIAT':
      return { ...state, fiat: action.payload };
    default:
      return state;
  }
};
