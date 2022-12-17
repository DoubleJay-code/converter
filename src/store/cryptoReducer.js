const defaultState = {
  crypto: 'BTC',
};

export const cryptoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'CHANGE_CRYPTO':
      return { ...state, crypto: action.payload };
    default:
      return state;
  }
};
