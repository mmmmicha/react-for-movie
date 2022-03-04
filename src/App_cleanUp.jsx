import { useEffect, useState } from 'react';

function Hello() {
  useEffect(() => {
    console.log('created :)');
    return () => console.log('destroyed :('); // in useEffect, when component will be disappread This function will return value or function
  }, []);
  return <h1>Hello</h1>;
}

function App_cleanUp() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? 'Hide' : 'Show'}</button>
    </div>
  );
}

export default App_cleanUp;
