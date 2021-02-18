import logo from './logo.svg';
import './App.css';
// import pi, {doublePi, triplePi} from './math'
import * as pi from './math';
import {add, substract, multiply, divide} from './calculator'
function App() {
  return (
   <div>
     <ul>
       <li>{pi.default}</li>
     <li>{pi.doublePi()}</li>
     <li>{pi.triplePi()}</li>
       </ul>
       <h1>Your result is:</h1>
       <li>{add(1,2)}</li>
       <li>{substract(2,3)}</li>
       <li>{multiply(3,4)}</li>
       <li>{divide(5,6)}</li>
   </div>
  );
}

export default App;
