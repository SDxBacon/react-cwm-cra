import React from 'react';
import { render } from 'react-snapshot';
import disableReactDevTools from 'utils/disableReactDevTools';
import App from './App';
import reportWebVitals from './reportWebVitals';

if (process.env.NODE_ENV === 'production') disableReactDevTools();

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
