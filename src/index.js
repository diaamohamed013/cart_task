import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter , HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
const loader = document.querySelector('.loader');

// if you want to show the loader when React loads data again
const showLoader = () => loader.classList.remove('loader--hide');

const hideLoader = () => loader.classList.add('loader--hide');

setTimeout(() =>
  root.render(
    <React.StrictMode>
      <HashRouter>
        <App hideLoader={hideLoader}
            showLoader={showLoader}
        />
      </HashRouter>
    </React.StrictMode>
  )
  , 1000)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
