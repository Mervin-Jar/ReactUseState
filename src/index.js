import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FavouriteColor from "./components/FavouriteColor";
import Car from "./components/Car";
import Scooter from "./components/Scooter";
import List from "./components/List"
import Timer from "./components/Timer";
import MyForm from "./components/MyForm";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {/*<App />*/}
    <FavouriteColor/>
    <Car/>
    <Scooter/>
    <List />
      {/*<Timer/>*/}
    <MyForm/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
