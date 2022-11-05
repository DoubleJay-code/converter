const defaultState = {
  value: 0,
};

export const cryptoValue = (state = defaultState, action) => {
  switch (action.type) {
    case 'CHANGE_CRYPTO_VALUE':
      return { ...state, value: action.payload };
    default:
      return state;
  }
};
