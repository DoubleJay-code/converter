import './App.scss';
import { Header } from './components/Header';
import { Block } from './components/Block';
import { Reverse } from './components/Reverse';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const cryptoCurrencys = ['BTC', 'ETH', 'QMALL', 'TON'];
  const fiatCurrencys = ['USD', 'RUB', 'KZT', 'EUR'];

  const ratesRef = useRef({});
  const dispatch = useDispatch();
  const cryptoValue = useSelector((state) => state.inputCrypto.value);
  const fiatValue = useSelector((state) => state.inputFiat.value);
  const fromCrypto = useSelector((state) => state.changeCrypto.crypto);
  const toFiat = useSelector((state) => state.changeFiat.fiat);

  const changeCryptoValue = (e) => {
    dispatch({ type: 'CHANGE_CRYPTO_VALUE', payload: e.target.value });
    const result = cryptoValue * ratesRef.current[fromCrypto][toFiat];
    dispatch({ type: 'CHANGE_FIAT_VALUE', payload: result.toFixed(1) });
  };
  const changeFiatValue = (e) => {
    dispatch({ type: 'CHANGE_FIAT_VALUE', payload: e.target.value });
    const result = fiatValue / ratesRef.current[fromCrypto][toFiat];
    dispatch({ type: 'CHANGE_CRYPTO_VALUE', payload: result.toFixed(5) });
  };
  const onChangeCrypto = (el) => {
    dispatch({ type: 'CHANGE_CRYPTO', payload: el });
  };
  const onChangeFiat = (el) => {
    dispatch({ type: 'CHANGE_FIAT', payload: el });
  };

  useEffect(() => {
    fetch(
      'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,QMALL,TON&tsyms=USD,RUB,EUR,KZT,EUR'
    )
      .then((res) => res.json())
      .then((json) => (ratesRef.current = json))
      .catch((err) => {
        console.log(err);

        alert('Wrooong API');
      });
  }, []);

  const array = [
    'https://jsonplaceholder.typicode.com/users/1',
    'https://jsonplaceholder.typicode.com/posts/1',
  ];

  const fetchFunc = async (array) => {
    return Promise.all([
      array.map((el) => fetch(el).then((res) => res.json())),
    ]);
  };

  console.log(fetchFunc(array));

  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <Block
          value={cryptoValue}
          allCurrencys={cryptoCurrencys}
          currency={fromCrypto}
          onChangeCurrency={onChangeCrypto}
          onChangeValue={changeCryptoValue}
        />
        <Reverse />
        <Block
          value={fiatValue}
          allCurrencys={fiatCurrencys}
          currency={toFiat}
          onChangeCurrency={onChangeFiat}
          onChangeValue={changeFiatValue}
        />
      </div>
    </div>
  );
}

export default App;
