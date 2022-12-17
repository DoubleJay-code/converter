import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { cryptoReducer } from './cryptoReducer';
import { fiatReducer } from './fiatReducer';
import { cryptoValue } from './cryptoValue';
import { fiatValue } from './fiatValue';

const rootReduser = combineReducers({
  inputCrypto: cryptoValue,
  inputFiat: fiatValue,
  changeCrypto: cryptoReducer,
  changeFiat: fiatReducer,
});

export const store = createStore(rootReduser, composeWithDevTools());
