import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { store } from './redux/store.js';
import './index.css'; // Asegúrate de que este archivo existe o crea uno vacío
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
