export function Block({
  allCurrencys,
  currency,
  onChangeCurrency,
  value,
  onChangeValue,
}) {
  const name = {
    BTC: {
      a: 'BTC',
      b: 'Bitcoin',
    },
    ETH: {
      a: 'ETH',
      b: 'Ethereum',
    },
    QMALL: {
      a: 'QMALL',
      b: 'Qmall Exchange',
    },
    TON: {
      a: 'TON',
      b: 'Telegram Open Network',
    },
    USD: {
      a: 'USD',
      b: 'Доллар США',
    },
    RUB: {
      a: 'RUB',
      b: 'Российский рубль',
    },
    KZT: {
      a: 'KZT',
      b: 'Казахстанский тенге',
    },
    EUR: {
      a: 'EUR',
      b: 'Евро',
    },
  };
  return (
    <div className="block">
      <h2>У меня есть</h2>
      <div className="block__currency">
        <ul>
          {allCurrencys.map((el) => (
            <li
              onClick={() => onChangeCurrency(el)}
              className={currency === el ? 'active' : ''}
              key={el}
            >
              {el}
            </li>
          ))}
        </ul>
      </div>
      <div className="block__input">
        <h3>{currency === name[currency].a ? name[currency].b : ''}</h3>
        <input
          onChange={(e) => onChangeValue(e)}
          onKeyUp={(e) => onChangeValue(e)}
          maxLength={3}
          value={value}
          type="number"
          placeholder="0"
        ></input>
      </div>
    </div>
  );
}
