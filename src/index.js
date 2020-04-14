import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App.jsx';
import * as serviceWorker from './test/serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
