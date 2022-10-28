import React from 'react';
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom'; // react 17
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// react 17 to pass fcc test
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
 document.getElementById('root')
);