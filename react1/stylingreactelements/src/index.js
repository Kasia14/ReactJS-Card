import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Heading from "./Heading";
import List from "./List";
import reportWebVitals from './reportWebVitals';
import App from "./App"

const customStyle = {
  color: "red",
  fontsize: "20px",
  border: "1px solid black"
}




ReactDOM.render(<div>
  {/* <h1 style={customStyle}>Hello</h1>
  <h1 className = "heading" style={customStyle1}>{greeting}</h1> */}
 <App />
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
