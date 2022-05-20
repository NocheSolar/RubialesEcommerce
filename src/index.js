import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import CartContextProvider  from './components/Context/CartContextProvider';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBfxD5EIowTAAjp_Gh69sMPQ7-CWbmgw_4",
  authDomain: "rubialesecommerce.firebaseapp.com",
  projectId: "rubialesecommerce",
  storageBucket: "rubialesecommerce.appspot.com",
  messagingSenderId: "394349714847",
  appId: "1:394349714847:web:af0adf2aaa3355931e31aa"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>  
    <CartContextProvider>
      <App />
    </CartContextProvider>  
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
