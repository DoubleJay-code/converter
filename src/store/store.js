import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { cryptoReducer } from './cryptoReduser';
import { fiatReducer } from './fiatReduser';
import { cryptoValue } from './cryptoValue';
import { fiatValue } from './fiatValue';

const rootReduser = combineReducers({
  inputCrypto: cryptoValue,
  inputFiat: fiatValue,
  changeCrypto: cryptoReducer,
  changeFiat: fiatReducer,
});

export const store = createStore(rootReduser, composeWithDevTools());
