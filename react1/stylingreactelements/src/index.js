import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';

const customStyle = {
  color: "red",
  fontsize: "20px",
  border: "1px solid black"
}

customStyle.color="green"
ReactDOM.render(
  <h1 style={customStyle}>Hello</h1>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
