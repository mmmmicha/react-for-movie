import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import App_cleanUp from './App_cleanUp';
import App_coin from './App_coin';
import styles from './styles.css';

ReactDOM.render(
  <React.StrictMode>
    <App_coin />
  </React.StrictMode>,
  document.getElementById('root')
);
