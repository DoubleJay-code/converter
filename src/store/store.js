import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { cryptoReduser } from './cryptoReduser';
import { fiatReduser } from './fiatReduser';
import { cryptoValue } from './cryptoValue';
import { fiatValue } from './fiatValue';

const rootReduser = combineReducers({
  inputCrypto: cryptoValue,
  inputFiat: fiatValue,
  changeCrypto: cryptoReduser,
  changeFiat: fiatReduser,
});

export const store = createStore(rootReduser, composeWithDevTools());
