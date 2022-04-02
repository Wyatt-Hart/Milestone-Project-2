import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './fonts/Alt_Retro_Thin.ttf';
import './fonts/Alt_Retro_Regular.ttf';
import './fonts/Atari_Classic_Chunky.ttf';

//Body Parser--Decrypts encrypted data sent by Post
<<<<<<< HEAD
//app.use(express.urlencoded({ extended: true }))
=======
>>>>>>> a8bb5be37907af131650db416a0f6d774cd37fca

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
