import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'; //eo
// import { Provider } from 'react-redux';  // importo el provider para envolver la app.
// import store from './redux/store/store.js'  // importo el store de redux

ReactDOM.render(
  // <Provider store={store}>  {/* // gracias a esto, todos los componentes tienen acceso al store. */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
