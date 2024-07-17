import React from 'react';
import ReactDOM from 'react-dom/client';
import Navigation from 'Navigation';
import { store, persistedStore } from './redux/store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import Modal from 'react-modal';
import './index.css';

Modal.setAppElement('#root');

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistedStore}>
      <Navigation />
    </PersistGate>
  </Provider>
);
