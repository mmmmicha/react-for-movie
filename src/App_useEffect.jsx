import Button from './Button';
import styles from './App.module.css';
import { useEffect, useState } from 'react';

function App_useEffect() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState('');
  const onChange = (event) => setKeyword(event.target.value);
  const onClick = () => setValue((prev) => prev + 1);
  console.log('I run all the time');
  useEffect(() => {
    console.log('i run only once');
  }, []); // this empty array mean, react is observing nothing
  useEffect(() => {
    console.log('i run only "keyword" changes', keyword);
  }, [keyword]); // if this 'keyword' is changed, then run this code
  useEffect(() => {
    console.log('i run only "counter" changes', counter);
  }, [counter]); // if this 'counter' is changed, then run this code
  useEffect(() => {
    console.log('i run only "keyword & counter" changes', counter);
  }, [keyword, counter]); // if this 'counter or keyword' are changed, then run this code
  return (
    <div>
      <input
        onChange={onChange}
        value={keyword}
        type="text"
        placeholder="Search here..."
      ></input>
      <h1 className={styles.title}>Welcome back!</h1>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
      <Button text={'Button'} />
    </div>
  );
}

export default App_useEffect;
