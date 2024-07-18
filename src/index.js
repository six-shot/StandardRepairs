import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { configureStore } from "@reduxjs/toolkit";
import reducer from "../src/store/reducers"
import { Provider } from "react-redux";
import { phoneApi } from './store/reducers/phonerepair';
const store = configureStore({
  reducer: {
    ...reducer,
    [phoneApi.reducerPath]: phoneApi.reducer,
 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(phoneApi.middleware)
      
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();