

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
 



// const name =  React.createElement('h1',{style:{
//    textAlign: 'center',
//    color: 'blue'
// }},'Tran Tam ');

const divStyle = {
  color: 'black',
  backgroundColor : 'red',
  textAlign: 'center',

};
const divElm = <div style={divStyle}>VAN ANH</div>


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  divElm
);

reportWebVitals();