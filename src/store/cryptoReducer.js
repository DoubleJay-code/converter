const defaultState = {
  crypto: 'BTC',
};

export const cryptoReduser = (state = defaultState, action) => {
  switch (action.type) {
    case 'CHANGE_CRYPTO':
      return { ...state, crypto: action.payload };
    default:
      return state;
  }
};
