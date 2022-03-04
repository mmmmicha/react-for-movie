import { useEffect, useState } from 'react';
function App_coin() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(async () => {
    const json = await (
      await fetch('https://api.coinpaprika.com/v1/tickers')
    ).json();
    setCoins(json.slice(0, 50));
    setLoading(false);
    setSelectedObj(json[0]);
  }, []);
  const [value, setValue] = useState('');
  const onChange = (event) => {
    console.log(event);
    setValue(event.target.value);
  };

  const [selectedObj, setSelectedObj] = useState(coins[0]);
  console.log(selectedObj);
  const handleCoinConveration = () => {
    // your calculation
    console.log(selectedObj);
    setResult(Number(value) / Number(selectedObj.quotes.USD.price));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    handleCoinConveration();
  };
  const [result, setResult] = useState('');
  const onSelectChange = (event) => {
    console.log(JSON.parse(event.target.value));
    setSelectedObj(JSON.parse(event.target.value));
  };
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        // justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          marginTop: 0,
        }}
      >
        <h1>The Coins! {loading ? '' : `(${coins.length})`}</h1>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            onChange={onChange}
            value={value}
            placeholder={'Enter your price'}
          ></input>
          <button>submit</button>
          <hr />
        </form>
        {loading ? (
          <strong>Loading...</strong>
        ) : (
          <select style={{ width: 280 }} onChange={onSelectChange}>
            {coins.map((coin, index) => (
              <option key={coin.id} value={JSON.stringify(coin)}>
                {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
              </option>
            ))}
          </select>
        )}
      </div>
      <div
        style={{
          marginTop: 48,
        }}
      >
        result : <input disabled type="text" initalvalue="" value={result} /> eq
      </div>
    </div>
  );
}

export default App_coin;
